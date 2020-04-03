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
		this.connector = config.connector;
		this.bytes = config.bytes;

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
				this.status({fill: "green", shape: "dot", text: `Last command: ${this.bytes} @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`});
				global.velbus.client.write(packet.getRawBuffer());
			} else {
				this.status({fill: "red", shape: "dot", text: `No active Velbus yet: Did you deploy?`});
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
