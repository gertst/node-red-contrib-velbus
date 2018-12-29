let constants = require('../velbus/const');
let Packet = require('../velbus/packet');

module.exports = function (RED) {
	"use strict";

	let velbusConfigNode = null;

	//runs on deploy or when node is already in flow
	function VelbusSwitch(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.address = parseInt(config.address);
		this.channel = parseInt(config.channel);

		this.velbusNamePart1 = "";
		this.velbusNamePart2 = "";
		this.velbusNamePart3 = "";
		this.velbusName = "";

		this.status({fill: "green", shape: "ring", text: `Waiting ...`});

		velbusConfigNode = RED.nodes.getNode(config.serial);

		velbusConfigNode.events.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error.message});
		});

		velbusConfigNode.events.on('onSerialPacket', packet => {

			if (packet.address === this.address) {

				console.info(`cmd ${packet.command} @ ${packet.address} - ${packet.toString()}`);

				if (packet.command === constants.COMMAND_MODULE_TYPE) {
					//request name of module
					let getModuleLabel = new Packet(packet.address, Packet.PRIORITY_LOW,
							[constants.COMMAND_MODULE_NAME_REQUEST, this.channel], false);
					velbusConfigNode.velbus.port.write(getModuleLabel.getRawBuffer());
				}

				if (packet.command === constants.COMMAND_MODULE_NAME_PART1) {
					console.log("name1:", packet.toString());
					const databytes = packet.getDataBytes();
					if (databytes[1] === this.channel) {
						for( let i=2; i<8; i++) {
							this.velbusNamePart1 += String.fromCharCode(databytes[i]);
						}
						console.log("1st part::: ", this.velbusNamePart1)
					}
				} else if (packet.command === constants.COMMAND_MODULE_NAME_PART2) {
					console.log("name2:", packet.toString());
				} else if (packet.command === constants.COMMAND_MODULE_NAME_PART3) {
					console.log("name3:", packet.toString());
				}

				this.status({fill: "green", shape: "ring", text: `Last command: ${packet.command}`});

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
