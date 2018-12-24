let Velbus = require("../velbus/velbus");

module.exports = function (RED) {
	"use strict";

	var velbusConfigNode = null;

	//runs on deploy or when node is already in flow
	function VelbusSwitch(config) {

		RED.nodes.createNode(this, config);
		velbusConfigNode = RED.nodes.getNode(config.serial);


		// if (!velbusConfigNode || !velbusConfigNode.serial) {
		// 	return
		// }

		// velbusConfigNode.events.on('onModuleFound', packet => {
		// 	if (packet.address !== config.channel) {
		// 		this.status({fill: "green", shape: "ring", text: "Module found"});
		// 	}
		// });

		velbusConfigNode.events.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error});
			RED.notify(error, "error");
		});

		velbusConfigNode.events.on('onSerialPacket', packet => {

			RED.getNode

			if (packet.address !== config.channel) {
				return
			}


			// var message = {};
			// message.payload = sensor;
			//
			// scope.send(message);
			// scope.status({fill: "green", shape: "dot", text: config.channel});

		});

		// velbusConfigNode.velbus.openSerial();

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

	RED.httpAdmin.get(`/velbus/get-modules/:port`, function (req, res, next) {
		let velbus = new Velbus(req.params.port);

		res.end(velbus);
	});

	RED.nodes.registerType("velbus-switch", VelbusSwitch);
}
