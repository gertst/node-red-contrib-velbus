let constants = require('../velbus/const');
let Packet = require('../velbus/packet');

let connector;

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusDimmer(config) {

		RED.nodes.createNode(this, config);

		// Retrieve the config node
		this.connector = RED.nodes.getNode(config.connector);
		connector = this.connector;

		this.name = config.name;
		this.connector = config.connector;
		this.address = config.addressType === "MANUAL" ? parseInt(config.address) : parseInt(config.addressType);
		this.channel = parseInt(config.channel);
		this.commands = config.commands;
		this.commandsType = config.commandsType;

		if (connector && connector.velbus) {
			this.status({fill: "green", shape: "dot", text: `Velbus ready`});
		} else {
			this.status({fill: "red", shape: "dot", text: `No Velbus connector node found: Add one first!`});
			return
		}
		connector.velbus.on('onError', msg => {
			this.status({fill: "red", shape: "dot", text: msg});
		});
		connector.velbus.on('onStatus', msg => {
			this.status({fill: "green", shape: "dot", text: msg});
		});

		connector.velbus.on('onSerialPacket', packet => {

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
			//console.log("input", msg);
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
			if (connector && connector.velbus && connector.velbus.client) {
				connector.velbus.client.write(packet.getRawBuffer());
			} else {
				this.status({fill: "red", shape: "ring", text: `No active Velbus: Did you deploy first?`});
			}
		});


		requestStatus(this);


	}

	RED.httpAdmin.get(`/velbus/get-dimmer-modules`, function (req, res, next) {

		if (connector.velbus && connector.velbus.modules) {
			res.end(JSON.stringify(connector.velbus.modules.filter(i => i.nrOfDimmers > 0)));
		} else {
			res.end("[]");
		}

	});


	RED.nodes.registerType("velbus-dimmer", VelbusDimmer);
};

function requestStatus(that) {
	//console.log("sendRequest", that.address);
	if (connector && connector.velbus && connector.velbus.client && that.address) {
		let packet = new Packet(that.address, constants.PRIO_LOW);
		packet.setDataBytes([constants.commands.COMMAND_MODULE_STATUS_REQUEST, that.channel]);
		packet.pack();
		connector.velbus.client.write(packet.getRawBuffer());
		// console.log(packet.toString());//
	}
}