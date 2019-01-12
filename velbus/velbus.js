let SerialPort = require('serialport');
let Packet = require('./packet');
let constants = require('./const');

class Velbus {


	/**
	 *
	 * @param velbusConfigNode optional: if not present, Velbus is instanciated from edit mode,
	 * to scan for modules.
	 */
	constructor(port, velbusConfigNode) {
		global.velbus = this;
		this.portString = port;

		this.modules = [];
		this.velbusConfigNode = velbusConfigNode;
		this.init();

	}


	init() {


		this.port = new SerialPort(this.portString, {
			baudRate: 38400,
			autoOpen: false
		});


		// open errors will be emitted as an error event
		this.port.on('error', err => {
			console.warn('Velbus: Serial ERROR :: ', err);
			//RED.notify(err, "error");
			if (this.velbusConfigNode) {
				this.velbusConfigNode.events.emit("onSerialError", err);
			}
			this.iid = setTimeout(() => this.tryReconnect(), 3000);
		});

		this.port.on('close', msg => {
			console.warn('Velbus: Serial got closed :: ', msg);
			if (this.velbusConfigNode) {
				this.velbusConfigNode.events.emit("onSerialError", msg);
			}
			this.iid = setTimeout(() => this.tryReconnect(), 3000);
		});

		this.port.on('data', data => {
			let packet = new Packet();
			packet.setRawBytesAndPack(data);

			//console.log("packet", data);

			//console.info(`cmd ${packet.command} @ ${packet.address} - ${packet.toString()}`);

			if (packet.command === constants.COMMAND_MODULE_TYPE) {
				let moduleName = constants.moduleNames["module" + packet.dec2hex(packet.getDataByte(1))];
				console.info(`Module ${moduleName} found @ ${packet.dec2hex(packet.address)}`);
				this.modules.push({name: moduleName, address: packet.address});

			}


			if (this.velbusConfigNode) {
				this.velbusConfigNode.events.emit("onSerialPacket", packet);
			}


		});

		this.port.open();

		this.scan();

	}

	tryReconnect() {
		clearTimeout(this.iid);

		this.port.open();
		this.velbusConfigNode.events.emit("onReconnecting");
	}


	/**
	 * Scan the bus for Velbus modules
	 */
	scan() {
		this.modules = [];
		for (let addr = 1; addr < 200; addr++) {
			setTimeout(() => {
				let getModule = new Packet();
				getModule.setRawBytesAndPack([Packet.STX, Packet.PRIORITY_LOW, addr, 0X40, 0X00, Packet.ETX]);
				//console.log("getModule data: ", getModule.toString());
				this.port.write(getModule.getRawBuffer());
			}, 1000 + addr * 100);

		}

	}

	close() {
		this.port.close();
	}


}


module.exports = Velbus;
