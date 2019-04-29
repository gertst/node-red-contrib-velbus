let constants = require('../velbus/const');
let Velbus = require('../velbus/velbus');
let Packet = require('../velbus/packet');

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusSwitch(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.address = parseInt(config.address);
		this.channel = parseInt(config.channel);

		var thisNode = this;

		if (!global.velbus) {
			global.velbus = new Velbus(this); 
		}


		this.velbusName = "";

		this.status({fill: "green", shape: "ring", text: `Waiting ...`});


		global.velbus.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error.message});
		});

		global.velbus.on('onReconnecting', error => {
			this.status({fill: "green", shape: "ring", text: `${this.velbusName} reconnected`});
		});


		global.velbus.on('onSerialPacket', packet => {

			if (packet.address === this.address) {

				//this.status({fill: "green", shape: "ring", text: `Last command: ${packet.command}`});

				//console.info(`cmd ${packet.command} @ ${packet.address} - ${packet.toString()}`);

				// if (packet.command === constants.COMMAND_MODULE_TYPE) {
				// 	this.requestButtonName();
				// }


				if (packet.command === constants.COMMAND_PUSH_BUTTON_STATUS) {
					//console.log(`pushed ${packet.getRawDataAsString()}`);
					const databytes = packet.getDataBytes();
					if (databytes[1] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: `${this.velbusName} Pressed`});
						thisNode.send({payload: "pressed"});
					} else if (databytes[2] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: `${this.velbusName} Released`});
						thisNode.send({payload: "released"});
					} else if (databytes[3] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: `${this.velbusName} Long pressed`});
						thisNode.send({payload: "longPressed"});
					}
				}
			}

		});

		setTimeout(() => global.velbus.requestButtonName(this.address, this.channel), 3000);

		global.velbus.on('onButtonName', (address, channel, name) => {
			if (address === this.address) {
				RED.comms.publish("onVelbusButtonName", name);
			}

			if (address === this.address && channel === this.channel) {
				this.velbusName = name;
				this.status({fill: "green", shape: "ring", text: this.velbusName});
			}
		});

		global.velbus.on('onModuleFound', (packet, moduleName) => {

			let modulesWithButtons = global.velbus.modules.filter(module => {
				return constants.modulesWithButtons.includes(module.name)
			});

			RED.comms.publish("onVelbusModuleFound", modulesWithButtons);

			if (packet.address === this.address && packet.channel === this.channel) {
				this.velbusName = name;
				this.status({fill: "green", shape: "ring", text: this.velbusName});
			}
		});

		this.on('input', msg => {
			let pressed = 0;
			let released = 0;
			let longPressed = 0;

			if (msg.payload === "pressed") {
				pressed = Math.pow(2, this.channel - 1);
			} else if (msg.payload === "released") {
				released = Math.pow(2, this.channel - 1);
			} else if (msg.payload === "longPressed") {
				longPressed = Math.pow(2, this.channel - 1);
			} else if (msg.payload === "press") {
				pressed = Math.pow(2, this.channel - 1);
				setTimeout(() => {
					let pressed = 0;
					let released = Math.pow(2, this.channel - 1);
					let longPressed = 0;

					let packet = new Packet(
							this.address,
							Packet.PRIORITY_HIGH,
							[constants.COMMAND_PUSH_BUTTON_STATUS, pressed, released, longPressed],
							false);
					this.sendPacket(packet);
				}, 300);

			}

			let packet = new Packet(
					this.address,
					Packet.PRIORITY_HIGH,
					[constants.COMMAND_PUSH_BUTTON_STATUS, pressed, released, longPressed],
					false);

			this.sendPacket(packet);


		});

		this.sendPacket = (packet) => {
			packet.pack();
			console.log(`Virtual button: ${packet.toString()}`);
			if (global.velbus) {
				let command = "";
				if (packet.rawPacket[5]) {
					command = "pressed";
				} else if (packet.rawPacket[6]) {
					command = "released";
				} else if (packet.rawPacket[7]) {
					command = "long pressed";
				}
				this.status({fill: "green", shape: "ring", text: `${this.name} ${command}`});
				global.velbus.port.write(packet.getRawBuffer());
			} else {
				this.status({fill: "red", shape: "ring", text: `No active Velbus: Did you deploy?`});
			}
		}

	}

	RED.httpAdmin.get(`/velbus/scan-for-modules`, function (req, res, next) {

		if (!global.velbus) {
			res.end("no velbus");
		} else {
			global.velbus.scan();
			res.end("scanning");
		}

	});


	RED.httpAdmin.get(`/velbus/get-name-for-button/:address/:channel`, function (req, res, next) {

		if (!global.velbus) {
			res.end("no velbus");
		} else {
			global.velbus.requestButtonName(parseInt(req.params.address), parseInt(req.params.channel));
			res.end("Getting name ...");
		}
	});


	RED.nodes.registerType("velbus-switch", VelbusSwitch);
}
