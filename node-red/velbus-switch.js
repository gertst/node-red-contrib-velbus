let constants = require('../velbus/const');

module.exports = function (RED) {
	"use strict";

	let velbusConfigNode = null;

	//runs on deploy or when node is already in flow
	function VelbusSwitch(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		//this.address = parseInt(config.address);

		velbusConfigNode = RED.nodes.getNode(config.serial);

		velbusConfigNode.events.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error.message});
		});

		velbusConfigNode.events.on('onSerialPacket', packet => {

			if (packet.address === parseInt(config.address)) {
				if (packet.command === constants.COMMAND_PUSH_BUTTON_STATUS) {
					console.log(`pushed ${packet.getRawDataAsString()}`);
					this.send({payload: true});
				}
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

	RED.httpAdmin.get(`/velbus/get-modules/:configNodeId`, function (req, res, next) {
		let configNode = RED.nodes.getNode(req.params.configNodeId);
		if (!configNode) {
			return
		}

		//filter only modules that have buttons
		let modules = configNode.velbus.modules.filter(module => {
			return constants.modulesWithButtons.includes(module.name)
		});


		res.end(JSON.stringify(modules));
	});

	RED.nodes.registerType("velbus-switch", VelbusSwitch);
}
