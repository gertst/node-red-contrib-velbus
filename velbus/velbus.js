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
			this.config.RED.comms.publish("onError", (err.message || JSON.stringify(err)) + " Try " + this.connectionTries);
			//console.log("Socket error:", JSON.stringify(err));
		});
		this.client.on('close', msg => {
			this.emit("close socket", msg);
			this.iid = setTimeout(() => this.tryReconnect(), 3000);

		});

		this.client.on('ready', () => {
			//console.log("Socket ready:", JSON.stringify(data));
			//this.emit("onStatus", "Connection accomplished");
			this.config.RED.comms.publish("onLog", "Connection with Velbus accomplished");
			//this.scan();
		});

		this.client.on('data', data => {

			let packet = new Packet();

			packet.setRawBytesAndPack(data);

			if (packet.rawPacket[0] === Packet.STX && packet.rawPacket.length >= 5) {
				console.info(`cmd ${packet.command} @ ${packet.address} - ${packet.toString()}`);


				if (packet.command === constants.COMMAND_MODULE_NAME_PART1) {
					this.setPartName(0, packet);
				} else if (packet.command === constants.COMMAND_MODULE_NAME_PART2) {
					this.setPartName(1, packet);
				} else if (packet.command === constants.COMMAND_MODULE_NAME_PART3) {
					this.setPartName(2, packet);
				} else if (packet.command === constants.COMMAND_MODULE_TYPE && packet.rawPacket.length >= 10) {
					let moduleName = constants.moduleNames["module" + packet.dec2hex(packet.getDataByte(1)).toUpperCase()];
					// console.info(`Module ${moduleName} (type ${packet.dec2hex(packet.getDataByte(1))}) found @ ${packet.dec2hex(packet.address)}`);
					// this.emit("onStatus", `Module ${moduleName} (type ${packet.dec2hex(packet.getDataByte(1))}) found @ ${packet.dec2hex(packet.address)} - #found: ${this.modules.length}`);
					this.modules.push({name: moduleName, address: packet.address});
					// this.emit("onModuleFound", packet, moduleName);
					// this.config.RED.comms.publish("onVelbusModuleFound", this.modules);
				}

			}

			this.emit("onSerialPacket", packet);

		});

		this.connect();

	}

	connect() {
		this.connectionTries++;
		this.client.connect({port: this.config.port, host: this.config.ip}, () => {
			this.config.RED.comms.publish("onLog", `Connected (try ${this.connectionTries}) ...`);

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
			//sent found module after 4 secs
			setTimeout(() => {
				this.config.RED.comms.publish("onVelbusModuleFound", this.modules);
			}, 4000);
		} else {
			this.config.RED.comms.publish("onError", "No Velbus serial port found - not able to scan for modules.");
		}


	}

	close() {
		this.client.close();
		console.warn("Velbus client closed");
	}

	requestButtonName(address, channel) {
		console.log("requestButtonName", (address), (channel));
		let getModuleLabel = new Packet(address, Packet.PRIORITY_LOW,
				[constants.COMMAND_MODULE_NAME_REQUEST, Math.pow(2, channel - 1)], false);
		if (this.client) {
			this.client.write(getModuleLabel.getRawBuffer());
		} else {
			console.warn("No Velbus connection: not able to get button names.");
		}

	}

	setPartName(index, packet) {

		console.log("setPartName", index);

		// VelbusModule
		// velbusModule = velbusModules.get(address);
		//
		// if (velbusModule != null) {
		// 	byte channel = packet[5];
		// 	byte[] namePart = Arrays.copyOfRange(packet, 6, 6 + length - 2);
		//
		// 	VelbusChannelIdentifier velbusChannelIdentifier = new VelbusChannelIdentifier(address, channel);
		// 	velbusModule.setChannelName(velbusChannelIdentifier, namePartNumber, namePart);
		// 	notifyDiscoveredVelbusModule(velbusModule);
		// }

		//if (databytes[3] === 255) return;
		const databytes = packet.getDataBytes();
		const channel = this.channelFromByte(databytes[1]);

		if (!this.buttonNames[packet.address]) {
			this.buttonNames[packet.address] = [];
		}
		if (!this.buttonNames[packet.address][channel]) {
			this.buttonNames[packet.address][channel] = [];
		}

		// if (index === 0) {
		// 	this.buttonNames[packet.address][channel] = [];
		// }

		//if (!this.buttonNames[packet.address][channel].end) {
		this.buttonNames[packet.address][channel][index] = "";
		//const dataLength = Math.min(9, databytes.length); //to bugfix the max length
		//console.log("databytes.length", databytes.length);
		for (let i = 1; i < databytes.length; i++) {
			if (databytes[i] !== 255) {
				//console.log("char", databytes[i], String.fromCharCode(databytes[i]));
				this.buttonNames[packet.address][channel][index] += String.fromCharCode(databytes[i]);
			} else {
				//console.log("char 255: end??");
				//this.buttonNames[packet.address][channel].end = true;
				//this.emit("onButtonName", packet.address, channel, this.buttonNames[packet.address][channel].join(""))
			}
		}
		//if (this.buttonNames[packet.address][channel].length === 3) {
		//this.emit("onButtonName", packet.address, channel, this.buttonNames[packet.address][channel].join(""));
		if (index === 2) {
			this.config.RED.comms.publish("onVelbusButtonName", packet.address, channel, this.buttonNames[packet.address][channel].join(""));
			console.log("name:", this.buttonNames[packet.address][channel].join(""));
		}
		//}
		//}


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



