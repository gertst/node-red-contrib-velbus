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
		this.modules = [];

		this.velbusConfigNode = velbusConfigNode;
		this.init(port);

	}


	init(port) {


		this.port = new SerialPort(port, {
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
		});

		this.port.on('close', msg => {
			console.warn('Velbus: Serial got closed :: ', msg);
			if (this.velbusConfigNode) {
				this.velbusConfigNode.events.emit("onSerialError", msg);
			}
		});

		this.port.on('data', data => {
			let packet = new Packet();
			packet.setRawBytesAndPack(data);

			//console.log("packet", data);

			console.info(`cmd ${packet.command} @ ${packet.address} - ${packet.toString()}`);

			if (packet.command === constants.COMMAND_MODULE_TYPE) {
				let moduleName = constants.moduleNames["module" + packet.dec2hex(packet.getDataByte(1))];
				console.info(`Module ${moduleName} found @ ${packet.dec2hex(packet.address)}`);
				this.modules.push({name: moduleName, address: packet.address});

				//request name of module
				let getModuleLabel = new Packet();
				getModuleLabel.setRawBytesAndPack([
						Packet.STX, Packet.PRIORITY_LOW, packet.address,
						constants.COMMAND_MODULE_NAME_REQUEST, 0X00, Packet.ETX]);
				this.port.write(getModuleLabel.getRawBuffer());

			} else if (packet.command === constants.COMMAND_MODULE_NAME_PART1) {
				console.log("name:", packet.toString());
			} else {
				if (this.velbusConfigNode) {
					this.velbusConfigNode.events.emit("onSerialPacket", packet);
				}
			}

			// //btn pressed?
			// if (packet.command === Packet.COMMAND_BUTTON) {
			// 	console.log("Btn:v2: " + packet.address); //
			// 	node.send({payload: "btn:" + packet.address});
			// 	//self.emitter.emit(Velbus.EVT_BUTTON_PRESSED, buffer);
			// }
		});

		if (!this.port.isOpen) {
			this.port.open();
		}

		this.scan();

	}


	/**
	 * Scan the bus for Velbus modules
	 */
	scan() {
		this.modules = [];
		for (let channel = 1; channel < 255; channel++) {
			setTimeout(() => {
				let getModule = new Packet();
				getModule.setRawBytesAndPack([Packet.STX, Packet.PRIORITY_LOW, channel, constants.COMMAND_GET_MODULE, 0X00, Packet.ETX]);
				//console.log("getModule data: ", getModule.getRawBuffer());
				this.port.write(getModule.getRawBuffer());
			}, 1000 + channel * 100);

		}

	}

	close() {
		this.port.close();
	}


}


module.exports = Velbus;
