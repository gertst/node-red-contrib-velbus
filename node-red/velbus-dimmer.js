let constants = require('../velbus/const');
let Packet = require('../velbus/packet');

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusDimmer(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.connector = config.connector;
		this.address = config.addressType === "custom" ? parseInt(config.address) : parseInt(config.addressType);
		this.channel = parseInt(config.channel);
		this.commands = config.commands;
		this.commandsType = config.commandsType;

		 // console.log("config", config);
		 // console.log("this", this);


		this.status({fill: "green", shape: "ring", text: `Waiting ...`});

		if (!global.velbus) {
			this.status({fill: "orange", shape: "dot", text: `No Velbus connector node found: Add one first!`});
			return
		}

		global.velbus.on('onError', msg => {
			this.status({fill: "red", shape: "dot", text: msg});
		});

		global.velbus.on('onStatus', msg => {
			this.status({fill: "green", shape: "dot", text: msg});
		});

		global.velbus.on('onSerialPacket', packet => {

			if (packet.address === this.address) {

				if (packet.command === constants.commands.COMMAND_VARIABLE_DIMMER_STATUS
					&& packet.getDataByte(1) === this.channel) {

					const brightness = packet.getDataByte(3);
					this.lastBrightness = brightness;
					const onOffString = brightness === 0 ? "off" : "on";

					this.status({
						fill: "green",
						shape: brightness === 0 ? "ring" : "dot",
						text: `Switched ${onOffString} (${brightness}%) @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
					});

					this.send(
							{
								payload: brightness,
								on: brightness > 0
							});

				}
			}

		});

		this.on('input', msg => {
			console.log("input", msg);
			let brightness;
			let packet = new Packet(this.address, constants.PRIO_HI);
			let speed = 0;
			if (this.commandsType === "TOGGLE") {
				brightness = this.lastBrightness === 0 ? 100 : 0;
			} else if (this.commandsType === "PAYLOAD") {
				brightness = parseInt(msg.payload);
			} else if (this.commandsType === "VALUE") {
				brightness = parseInt(this.commands);
			}

			if (isNaN(brightness) || brightness < 0 || brightness > 100) {
				this.status({
					fill: "red",
					shape: "dot",
					text: `msg.payload is NaN or not between 0 and 100 - ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
				});
				return
			}

			packet.setDataBytes([constants.commands.COMMAND_SET_DIMMER_VALUE, this.channel, brightness, 0, speed]);
			packet.pack();
			global.velbus.client.write(packet.getRawBuffer());
		});


		requestStatus(this);


	}

	RED.httpAdmin.get(`/velbus/get-dimmer-modules`, function (req, res, next) {

		if (global.velbus && global.velbus.modules) {
			res.end(JSON.stringify(global.velbus.modules.filter(i => i.nrOfDimmers > 0)));
		} else {
			res.end([]);
		}

	});


	RED.nodes.registerType("velbus-dimmer", VelbusDimmer);
};

function requestStatus(that) {
	//console.log("sendRequest", that.address);
	if (that.address) {
		let packet = new Packet(that.address, constants.PRIO_LOW);
		packet.setDataBytes([constants.commands.COMMAND_MODULE_STATUS_REQUEST, that.channel]);
		packet.pack();
		global.velbus.client.write(packet.getRawBuffer());
		// console.log(packet.toString());//
	}
}