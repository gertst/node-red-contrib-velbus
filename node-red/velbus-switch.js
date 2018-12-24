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
			this.status({fill: "red", shape: "ring", text: error.message});
			RED.notify(error.message, "error");
		});

		velbusConfigNode.events.on('onSerialPacket', packet => {

			if (packet.address !== config.channel) {
				RED.notify("packet", "info");
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

	RED.httpAdmin.get(`/velbus/get-modules/:configNodeId`, function (req, res, next) {
		let configNode = RED.nodes.getNode(req.params.configNodeId);
		res.end(JSON.stringify(configNode.velbus.modules));
	});

	RED.nodes.registerType("velbus-switch", VelbusSwitch);
}
