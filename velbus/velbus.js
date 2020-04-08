let Packet = require('./packet');
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

		this.init();

	}

	destroy() {
		clearTimeout(this.iid);
		if (this.client) {
			delete(this.client);
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

			console.info(`BUS: ${packet.toString()}`);
			if (packet.rawPacket[0] === Packet.STX && packet.rawPacket.length >= 5) {


				if (packet.command === constants.commands.COMMAND_MODULE_NAME_PART1) {
					this.setPartName(0, packet);
				} else if (packet.command === constants.commands.COMMAND_MODULE_NAME_PART2) {
					this.setPartName(1, packet);
				} else if (packet.command === constants.commands.COMMAND_MODULE_NAME_PART3) {
					this.setPartName(2, packet);
				} else if (packet.command === constants.commands.COMMAND_MODULE_TYPE && packet.rawPacket.length >= 10) {
					let metaData = constants.moduleMetaData.find(i => i.type === packet.getDataByte(1));
					if (metaData) {
						this.modules.push({
							name: metaData.name,
							address: packet.address,
							hasInput: metaData.hasInput,
							nrOfChannels: metaData.nrOfChannels,
							requestNameBinary: metaData.requestNameBinary,
							extraAddresses: [],
						});
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

		const databytes = packet.getDataBytes();
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
			this.buttonNames[packet.address][channel] = ["","",""];
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
}

module.exports = Velbus;



