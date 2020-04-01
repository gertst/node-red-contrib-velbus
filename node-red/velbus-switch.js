let constants = require('../velbus/const');
let Velbus = require('../velbus/velbus');
let Packet = require('../velbus/packet');

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusSwitch(config) {

		RED.nodes.createNode(this, config);

		let thisNode = this;

		this.name = config.name;
		this.connector = config.connector;
		this.address = parseInt(config.address);

		this.channel = parseInt(config.channel);

		setTimeout(() => {
			this.velbusName = "";

			this.status({fill: "green", shape: "ring", text: `Waiting ...`});


			//console.log("velbus switch timeout", global.velbus);

			if (!global.velbus) {
				this.status({fill: "orange", shape: "dot", text: `No Velbus connector node found: Add one first!`});
				return
			}

			global.velbus.on('onConnectionError', error => {
				this.status({fill: "red", shape: "dot", text: error.message});
			});

			global.velbus.on('onReconnecting', error => {
				this.status({fill: "green", shape: "dot", text: `${this.velbusName} reconnected`});
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
							this.status({
								fill: "green",
								shape: "dot",
								text: `${this.velbusName} Pressed @ ${new Date().toLocaleDateString() - new Date().toLocaleTimeString()}`
							});
							this.clickState = "pressed";
							if (this.outputs === "3") {
								thisNode.send([null, null, {payload: "pressed"}]);
							}
						} else if (databytes[2] === Math.pow(2, this.channel - 1)) {
							this.status({
								fill: "green",
								shape: "dot",
								text: `${this.velbusName} Released @ ${new Date().toLocaleDateString() - new Date().toLocaleTimeString()}`
							});
							if (this.outputs === "3") {
								thisNode.send([
									this.clickState === "pressed" ? {payload: "pressed"} : null,
									null,
									{payload: "released"}
								]);
							} else if (this.outputs === "1") {
								thisNode.send([this.clickState === "pressed" ? {payload: "pressed"} : null]);
							}

						} else if (databytes[3] === Math.pow(2, this.channel - 1)) {
							this.status({
								fill: "green",
								shape: "dot",
								text: `${this.velbusName} Long pressed @ ${new Date().toLocaleDateString() - new Date().toLocaleTimeString()}`
							});
							this.clickState = "longPressed";
							if (this.outputs === "3") {
								thisNode.send([
									null,
									{payload: "longPressed"},
									{payload: "longPressed"}
								]);
							} else if (this.outputs === "2") {
								thisNode.send([
									null,
									{payload: "longPressed"}
								]);
							}

						}
					}
				}

			});

			// global.velbus.on('onButtonName', (address, channel, name) => {
			// 	console.log("onButtonName", channel, name);
			// 	if (address === this.address) {
			// 		RED.comms.publish("onVelbusButtonName", address, channel, name);
			// 	}
			//
			// 	if (address === this.address && channel === this.channel) {
			// 		this.velbusName = name;
			// 		this.status({fill: "green", shape: "dot", text: this.velbusName});
			// 	}
			// });

			// global.velbus.on('onModuleFound', (packet, moduleName) => {
			// 	//console.log("SWITCH - onModuleFound", moduleName);
			// 	let modulesWithButtons = global.velbus.modules.filter(module => {
			// 		return constants.modulesWithButtons.includes(module.name)
			// 	});
			//
			// 	//RED.comms.publish("onVelbusModuleFound", modulesWithButtons);
			//
			// 	if (packet.address === this.address && packet.channel === this.channel) {
			// 		this.velbusName = name;
			// 		this.status({fill: "green", shape: "ring", text: this.velbusName});
			// 	}
			// });

			//setTimeout(() => global.velbus.requestButtonName(this.address, this.channel), 3000);

		}, 200);//end timeout


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
				global.velbus.client.write(packet.getRawBuffer());
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

	RED.httpAdmin.get(`/velbus/get-modules`, function (req, res, next) {

		if (global.velbus && global.velbus.modules) {
			res.end(JSON.stringify(global.velbus.modules));
		} else {
			res.end([]);
		}

	});


	RED.httpAdmin.get(`/velbus/request-channel-names/:address/:nrOfChannels`, function (req, res, next) {

		if (!global.velbus) {
			res.end("no velbus");
		} else {
			for (let channel = 1; channel <= parseInt(req.params.nrOfChannels); channel++) {
				setTimeout(() => {
					console.log("request for ch", channel);
					global.velbus.requestButtonName(parseInt(req.params.address), channel);
				}, channel * 250);
			}
			res.end(`Getting ${parseInt(req.params.nrOfChannels)} names ...`);
		}
	});


	RED.httpAdmin.get(`/velbus/get-channel-names/:address`, function (req, res, next) {
		let channelNames = [];
		if (global.velbus.buttonNames[req.params.address]) {
			channelNames = global.velbus.buttonNames[req.params.address];
			channelNames = channelNames.map((namePartsArray, index) => {
				return {id: index, name: namePartsArray.join("")}
			});
		}
		console.log("channelNames:", channelNames);
		res.end(JSON.stringify(channelNames));
	});

	// RED.httpAdmin.get(`/velbus/get-name-for-button/:address/:channel`, function (req, res, next) {
	//
	// 	if (!global.velbus) {
	// 		res.end("no velbus");
	// 	} else {
	// 		global.velbus.requestButtonName(parseInt(req.params.address), parseInt(req.params.channel));
	// 		global.velbus.redResults[req.params.address + "-" + req.params.channel] = res.end;
	// 		//res.end("Getting name ...");
	// 	}
	// });

	// RED.comms.subscribe("onVelbusButtonName ", (topic, data) => {
	// 	console.log("onVelbusButtonName topic, data", topic, data);
	// 	if (this.address === data.address && this.channel === data.channel) {
	// 		//$('#node-input-name').val(data.label)
	// 	}
	// });

	RED.nodes.registerType("velbus-switch", VelbusSwitch);
}
