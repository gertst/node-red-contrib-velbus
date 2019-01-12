let constants = require('../velbus/const');
let Packet = require('../velbus/packet');
let Velbus = require('../velbus/velbus');

module.exports = function (RED) {
	"use strict";

	let velbusConfigNode = null;

	//runs on deploy or when node is already in flow
	function VelbusSwitch(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.address = parseInt(config.address);
		this.channel = parseInt(config.channel);

		if (!global.velbus) {
			global.velbus = new Velbus(this);
		}


		this.velbusNameParts = ["","",""];
		this.velbusName = "";

		this.status({fill: "green", shape: "ring", text: `Waiting ...`});


		global.velbus.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error.message});
		});

		global.velbus.on('onReconnecting', error => {
			this.status({fill: "green", shape: "ring", text: "Reconnected"});
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
						this.status({fill: "green", shape: "ring", text: "Pressed"});
						this.send({payload: "pressed"});
					} else if (databytes[2] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: "Released"});
						this.send({payload: "released"});
					} else if (databytes[3] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: "Long pressed"});
						this.send({payload: "longPressed"});
					}
				}
			}

		});

		global.velbus.requestButtonName(this.address, this.channel);

		global.velbus.on('onButtonName', (address, channel, name) => {
			if (address === this.address && channel === this.channel) {
				this.velbusName = name;
				this.status({fill: "green", shape: "ring", text: this.velbusName});
			}
		});




	}


	// RED.httpAdmin.get('/velbus/init-velbus/:nodeId', function (req, res, next) {
	// 	let configNode = RED.nodes.getNode(req.params.nodeId);
	// 	configNode.velbus.init(false);
	// 	//initVelbusPort(configNode.serial);
	// });

	// RED.httpAdmin.get('/velbus/scan-for-modules', function (req, res, next) {
	// 	velbusConfigNode.velbus.scan();
	// 	res.end();
	// });

	// RED.httpAdmin.get(`/velbus/get-modules/:configNodeId`, function (req, res, next) {
	// 	let configNode = RED.nodes.getNode(req.params.configNodeId);
	// 	if (!configNode) {
	// 		return
	// 	}
	//
	// 	//filter only modules that have buttons
	// 	let modules = configNode.velbus.modules.filter(module => {
	// 		return constants.modulesWithButtons.includes(module.name)
	// 	});
	//
	//
	// 	res.end(JSON.stringify(modules));
	// });

	RED.nodes.registerType("velbus-switch", VelbusSwitch);
}
