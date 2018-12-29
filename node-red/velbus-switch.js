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

		this.velbusNameParts = ["","",""];
		this.velbusName = "";

		this.status({fill: "green", shape: "ring", text: `Waiting ...`});

		velbusConfigNode = RED.nodes.getNode(config.serial);

		velbusConfigNode.events.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error.message});
		});


		//request button name
		this.velbusNameParts = ["","",""];
		let getModuleLabel = new Packet(this.address, Packet.PRIORITY_LOW,
				[constants.COMMAND_MODULE_NAME_REQUEST, Math.pow(2, this.channel - 1)], false);
		velbusConfigNode.velbus.port.write(getModuleLabel.getRawBuffer());



		velbusConfigNode.events.on('onSerialPacket', packet => {

			if (packet.address === this.address) {

				//this.status({fill: "green", shape: "ring", text: `Last command: ${packet.command}`});

				//console.info(`cmd ${packet.command} @ ${packet.address} - ${packet.toString()}`);

				if (packet.command === constants.COMMAND_MODULE_TYPE) {
					//request name of module
					this.velbusNameParts = ["","",""];
					let getModuleLabel = new Packet(this.address, Packet.PRIORITY_LOW,
							[constants.COMMAND_MODULE_NAME_REQUEST, Math.pow(2, this.channel - 1)], false);
					velbusConfigNode.velbus.port.write(getModuleLabel.getRawBuffer());
				}

				if (packet.command === constants.COMMAND_MODULE_NAME_PART1) {
					const databytes = packet.getDataBytes();
					if (databytes[1] === Math.pow(2, this.channel - 1)) {
						this.setSetPartName(0, databytes);
					}
				} else if (packet.command === constants.COMMAND_MODULE_NAME_PART2) {
					const databytes = packet.getDataBytes();
					if (databytes[1] === Math.pow(2, this.channel - 1)) {
						this.setSetPartName(1, databytes);
					}
				} else if (packet.command === constants.COMMAND_MODULE_NAME_PART3) {
					const databytes = packet.getDataBytes();
					if (databytes[1] === Math.pow(2, this.channel - 1)) {
						this.setSetPartName(2, databytes);
					}
				}


				if (packet.command === constants.COMMAND_PUSH_BUTTON_STATUS) {
					//console.log(`pushed ${packet.getRawDataAsString()}`);
					const databytes = packet.getDataBytes();
					if (databytes[1] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: "Pressed"});
						this.send({payload: {pressed: true}});
					} else if (databytes[2] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: "Released"});
						this.send({payload: {released:true}});
					} else if (databytes[3] === Math.pow(2, this.channel - 1)) {
						this.status({fill: "green", shape: "ring", text: "Long pressed"});
						this.send({payload: {longPressed:true}});
					}
				}
			}

		});

		this.setSetPartName = (index, databytes) => {

			//if (databytes[3] === 255) return;


			for( let i=2; i<databytes.length; i++) {
				if (databytes[i] !== 255) {
					this.velbusNameParts[index] += String.fromCharCode(databytes[i]);
				}
			}
			this.velbusName = this.velbusNameParts.join("");
			console.log("NAME::: ", this.velbusName);
			this.status({fill: "green", shape: "ring", text: this.velbusName});
		}

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
