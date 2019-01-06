let constants = require('../velbus/const');
let Packet = require('../velbus/packet');
let mustache = require("mustache");

module.exports = function (RED) {
	"use strict";

	let velbusConfigNode = null;

	//runs on deploy or when node is already in flow
	function VelbusRawBytes(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.bytes = config.bytes;

		velbusConfigNode = RED.nodes.getNode(config.serial);

		velbusConfigNode.events.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error.message});
		});

		velbusConfigNode.events.on('onReconnecting', error => {
			this.status({fill: "green", shape: "ring", text: "Reconnected"});
		});

		this.status({fill: "green", shape: "ring", text: ``});

		velbusConfigNode.events.on('onSerialPacket', packet => {

			if (packet.address === parseInt(config.address)) {

				this.status({fill: "green", shape: "ring", text: `Last command: ${packet.command}`});

				// if (packet.command === constants.COMMAND_PUSH_BUTTON_STATUS) {
				// 	console.log(`pushed ${packet.getRawDataAsString()}`);
				// 	this.send({payload: true});
				// }
			}

		});

		this.on('input', msg => {
			let packet = new Packet();
			this.bytes = mustache.render(this.bytes, msg); //parse mustache tags
			packet.setRawBytesAndPack(this.stringToArray(this.bytes));
			console.log(`sent ${packet.toString()}`);
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


	RED.nodes.registerType("velbus-raw-bytes", VelbusRawBytes);
}
