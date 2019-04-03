let constants = require('../velbus/const');
let Packet = require('../velbus/packet');
let Velbus = require('../velbus/velbus');
let mustache = require("mustache");

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusRawBytes(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.bytes = config.bytes;

		if (!global.velbus) {
			global.velbus = new Velbus(this);
		}

		global.velbus.on('onSerialError', error => {
			this.status({fill: "red", shape: "ring", text: error.message});
		});

		global.velbus.on('onReconnecting', error => {
			this.status({fill: "green", shape: "ring", text: "Reconnected"});
		});

		this.status({fill: "green", shape: "ring", text: `Waiting ...`});

		// global.velbus.on('onSerialPacket', packet => {
		//
		// 	if (packet.address === parseInt(config.address)) {
		//
		// 		this.status({fill: "green", shape: "ring", text: `Last command: ${packet.command}`});
		//
		// 		// if (packet.command === constants.COMMAND_PUSH_BUTTON_STATUS) {
		// 		// 	console.log(`pushed ${packet.getRawDataAsString()}`);
		// 		// 	this.send({payload: true});
		// 		// }
		// 	}
		//
		// });

		this.on('input', msg => {
			let packet = new Packet();
			//console.log("msg.payload:", msg.payload);
			if (!this.origBytes) {
				this.origBytes = this.bytes;
			}
			this.bytes = mustache.render(this.origBytes, msg.payload); //parse mustache tags
			packet.setRawBytesAndPack(this.stringToArray(this.bytes));
			console.log(`sent: ${packet.toString()}`);
			if (global.velbus) {
				this.status({fill: "green", shape: "ring", text: `Last command: ${this.bytes}`});
				global.velbus.port.write(packet.getRawBuffer());
			} else {
				this.status({fill: "red", shape: "ring", text: `No active Velbus: Did you deploy?`});
			}

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
