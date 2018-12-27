let constants = require('../velbus/const');
let Packet = require('../velbus/packet');

module.exports = function (RED) {
	"use strict";

	let velbusConfigNode = null;

	//runs on deploy or when node is already in flow
	function VelbusRawCommand(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.address = config.address;
		this.command = config.command;
		this.databytes = config.databytes;
		this.priority = config.priority;

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

		this.on('input', msg => {
			let packet = new Packet();
			packet.setDataBytes([
				parseInt(this.command), this.stringToArray(this.databytes)]);
			packet.pack();
			velbusConfigNode.velbus.port.write(packet.getRawBuffer());

		});

		this.stringToArray = (s) => {
			let arr = [];
			s.split(" ").forEach(item => {
				arr.push(parseInt(item));
			});
			return arr
		}

	}


	RED.nodes.registerType("velbus-raw-command", VelbusRawCommand);
}
