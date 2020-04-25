let Utils = require("../info/utils");

let Packet = require('./packet');
let Protocol = require('../info/protocol');
let constants = require('./const');
let EventEmitter = require('events');
require('events').EventEmitter.defaultMaxListeners = 100;

class Velbus extends EventEmitter {


	constructor(config) {
		super();
		this.modules = [];
		this.buttonNames = [];
		this.config = config;
		this.connectionTries = 0;

		this.protocol = new Protocol();

		this.init();

	}

	destroy() {
		clearTimeout(this.iid);
		if (this.client) {
			delete (this.client);
			console.warn("Velbus client deleted");
		}
	}

	init() {
		clearTimeout(this.iid);
		this.connectionTries = 0;

		let net = require('net');
		this.client = new net.Socket();
		console.warn("new Velbus client");

		// open errors will be emitted as an error event
		this.client.on('error', err => {
			//this.emit("onConnectionError", (err.message || JSON.stringify(err)) + " Try " + this.connectionTries);
			this.emit("onError", (err.message || JSON.stringify(err)) + " Try " + this.connectionTries);
			console.log("Socket error:", JSON.stringify(err));
		});
		this.client.on('close', msg => {
			this.iid = setTimeout(() => this.tryReconnect(), 3000);

		});

		this.client.on('ready', () => {
			//console.log("Socket ready:", JSON.stringify(data));
			this.emit("onStatus", "Velbus ready");

		});

		this.client.on('data', data => {

			let packet = new Packet();

			packet.setRawBytesAndPack(data);

			if (packet.rawPacket[0] === Packet.STX && packet.rawPacket.length >= 5) {

				// console.info(`BUS: ${packet.toString()}`);

				if (packet.command === constants.commands.COMMAND_MODULE_NAME_PART1) {
					this.setPartName(0, packet);
				} else if (packet.command === constants.commands.COMMAND_MODULE_NAME_PART2) {
					this.setPartName(1, packet);
				} else if (packet.command === constants.commands.COMMAND_MODULE_NAME_PART3) {
					this.setPartName(2, packet);
				} else if (packet.command === constants.commands.COMMAND_MODULE_TYPE && packet.rawPacket.length >= 10) {
					const moduleType = packet.getDataByte(1);
					let metaData = constants.moduleMetaData.find(i => i.type === moduleType);
					if (metaData) {
						//add module if not yet present
						if (!this.modules.find(i => i.address === packet.address)) {
							let module = {...metaData};
							module.address = packet.address;
							module.extraAddresses = [];
							module.moduleType = moduleType;
							this.modules.push(module);
							//get module name
							const nameAddress = this.getMemoryAddressesForModuleName(packet.address);
							if (nameAddress) {
								let getModuleNamePacket = new Packet(module.address);
								getModuleNamePacket.priority = Packet.PRIORITY_LOW;
								getModuleNamePacket.setDataBytes([constants.commands.COMMAND_READ_MEMORY_BLOCK,
									nameAddress.highByte, nameAddress.lowByte]);
								getModuleNamePacket.pack();
								// console.log("--getModuleNamePacket1", module.name, getModuleNamePacket.toString());
								this.client.write(getModuleNamePacket.getRawBuffer());
							}
						}
					} else {
						console.log("WARNING: Module of type " + packet.getDataByte(1) + " is unknown.");
					}
					// this.emit("onModuleFound", packet, moduleName);
					// this.config.RED.comms.publish("onVelbusModuleFound", this.modules);
				} else if (packet.command === constants.commands.COMMAND_MODULE_SUBTYPE) {
					//used to get the extra addresses of the VMBELO
					let metaData = constants.moduleMetaData.find(i => i.type === packet.getDataByte(1));
					if (metaData) {
						const module = this.modules.find(i => i.address === packet.address);
						if (module) {
							module.extraAddresses = [];
							if (packet.getDataByte(4) !== 0xFF) {
								module.extraAddresses.push(packet.getDataByte(4))
							}
							if (packet.getDataByte(5) !== 0xFF) {
								module.extraAddresses.push(packet.getDataByte(5))
							}
							if (packet.getDataByte(6) !== 0xFF) {
								module.extraAddresses.push(packet.getDataByte(6))
							}
							if (packet.getDataByte(7) !== 0xFF) {
								module.extraAddresses.push(packet.getDataByte(7))
							}

							//console.log("extraAddresses:", module.extraAddresses);
						} else {
							console.log("WARNING: Module with address " + packet.address + " was not (yet) scanned.");
						}
					}
				} else if (packet.command === constants.commands.COMMAND_MEMORY_BLOCK) {
					//get memory range to check for the module name
					const startRange = this.getMemoryAddressesForModuleName(packet.address).decimalValue;
					const endRange = startRange + 63; // max nr of bytes for name
					const memoryAddress = parseInt("0x" + Utils.dec2hex(packet.getDataByte(1) ) + Utils.dec2hex(packet.getDataByte(2)));
					//within name range?
					if (memoryAddress >= startRange && memoryAddress <= endRange) {
						const module = this.modules.find(i => i.address === packet.address);
						if (!module.moduleNameArray) {
							module.moduleNameArray = [];
						}
						let i = 3;
						let endOfString = packet.getDataByte(i) === 255;
						while (i <= 6 && !endOfString) {
							let charPos = memoryAddress - startRange + i - 3;
							module.moduleNameArray[charPos] = String.fromCharCode(packet.getDataByte(i));
							i++;
							endOfString = packet.getDataByte(i) === 255;
						}
						// console.log("****module.moduleName", module.name, module.moduleNameArray.join(""));
						const nextAddress = memoryAddress + 4;
						if (!endOfString && nextAddress <= endRange) {
							//get next 4 chars
							const nameAddress = {
								lowByte: nextAddress & 0xFF,
								highByte: (nextAddress >> 8) & 0xFF};
							let getModuleNamePacket = new Packet(packet.address);
							getModuleNamePacket.priority = Packet.PRIORITY_LOW;
							getModuleNamePacket.setDataBytes([constants.commands.COMMAND_READ_MEMORY_BLOCK,
								nameAddress.highByte, nameAddress.lowByte]);
							getModuleNamePacket.pack();
							this.client.write(getModuleNamePacket.getRawBuffer());
						} else {
							// console.log("we have the full name:", module.name, module.moduleNameArray.join(""))
						}

					}
				}
			}

			this.emit("onSerialPacket", packet);

		});

		this.connect();

	}

	connect() {
		this.connectionTries++;
		this.client.connect({port: this.config.port, host: this.config.ip}, () => {

			this.scan();
		});
	}

	tryReconnect() {
		clearTimeout(this.iid);
		if (this.client && this.connectionTries < 20) {
			this.connect();
		}
	}


	/**
	 * Scan the bus for Velbus modules
	 */
	scan() {

		if (this.client) {
			this.config.RED.comms.publish("onLog", "Scanning Velbus for modules ...");
			this.modules = [];
			for (let addr = 1; addr < 250; addr++) {
				setTimeout(() => {
					let getModule = new Packet();
					getModule.setRawBytesAndPack([Packet.STX, Packet.PRIORITY_LOW, addr, 0X40, 0X00, Packet.ETX]);
					//console.log("scan on address::", addr.toString(16));
					this.client.write(getModule.getRawBuffer());
				}, 1000 + addr * 10);

			}
			// //sent found module after 4 secs
			// setTimeout(() => {
			// 	this.config.RED.comms.publish("onVelbusModuleFound", this.modules);
			// }, 6000);
		} else {
			this.emit("onError", "No Velbus serial port found - not able to scan for modules.");
		}


	}

	close() {
		this.client.close();
		this.emit("onError", "Velbus client closed");
	}

	requestButtonName(address, channel) {
		//console.log("requestButtonName", address, channel);
		let channelBit;
		if (this.modules.find((item => item.address === address)).requestNameBinary) {
			channelBit = channel
		} else {
			channelBit = Math.pow(2, channel - 1);
		}
		let getModuleLabel = new Packet(address, Packet.PRIORITY_LOW,
				[constants.commands.COMMAND_MODULE_NAME_REQUEST, channelBit], false);
		if (this.client) {
			this.client.write(getModuleLabel.getRawBuffer());
		} else {
			console.warn("No Velbus connection: not able to get button names.");
		}

	}

	setPartName(index, packet) {

		const databytes = packet.getDataBytes;
		let channel;
		const found = this.modules.find((item => item.address === packet.address));
		if (!found) {
			this.emit("onError", `Module with address ${packet.address} could not be found. Please try to deploy first.`);
			return
		}
		if (found.requestNameBinary) {
			channel = databytes[1];
		} else {
			channel = this.channelFromByte(databytes[1])
		}

		if (!this.buttonNames[packet.address]) {
			this.buttonNames[packet.address] = [];
		}
		if (!this.buttonNames[packet.address][channel]) {
			this.buttonNames[packet.address][channel] = ["", "", ""];
		}


		this.buttonNames[packet.address][channel][index] = "";
		const dataLength = Math.min(9, databytes.length); //to bugfix the max length
		//console.log("databytes.length", databytes.length, "<>", dataLength);
		for (let i = 2; i < dataLength; i++) {
			if (databytes[i] !== 255) {
				this.buttonNames[packet.address][channel][index] += String.fromCharCode(databytes[i]);
				//console.log(`this.buttonNames[${packet.address}][${channel}]`, this.buttonNames[packet.address][channel]);
			} else {
				break
			}
		}


	}

	channelFromByte(byte) {
		const byteString = byte.toString(2);
		let channel = 1;
		let i = byteString.length - 1;
		while (byteString[i] === "0") {
			i--;
			channel++;
		}
		return channel;
	}

	getMemoryAddressesForModuleName(address) {
		const module = this.modules.find(i => i.address === address);
		if (module) {
			const moduleType = this.protocol.jsonData.ModuleTypes[Utils.dec2hex(module.moduleType)];
			if (moduleType) {
				const memory = moduleType.Memory;
				if (memory) {
					const memoryAddressForName = memory["1"].ModuleName.split(";")[0];
					const highByte = parseInt("0x" + memoryAddressForName.substr(0, 2));
					const lowByte = parseInt("0x" + memoryAddressForName.substr(2, 2));
					const decimalValue = parseInt("0x" + Utils.dec2hex(highByte) + Utils.dec2hex(lowByte));
					// console.log("address found for", moduleType.Type);
					return {highByte, lowByte, decimalValue};
				} else {
					console.warn(`Module type 0x${Utils.dec2hex(module.moduleType)} has no key Memory in protocol.json ModuleTypes [${module.moduleType}] ...`)
					return null
				}
			} else {
				console.warn(`Module type 0x${Utils.dec2hex(module.moduleType)} not found in protocol.json ModuleTypes ...`)
				return null
			}
		} else {
			return null;
		}
	}
}

module.exports = Velbus;



