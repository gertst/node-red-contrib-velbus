let constants = require('../velbus/const');
let Packet = require('../velbus/packet');
let Velbus = require('../velbus/velbus');
let mustache = require("mustache");

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusSendRawBytes(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.connector = config.connector;
		this.priority = config.priority;
		this.rtr = config.rtr === "1";
		this.address = config.addressType === "custom" ? parseInt(config.address) : parseInt(config.addressType);
		this.command = config.commandType === "custom" ? parseInt(config.command) : parseInt(config.commandType);
		this.dataBytesString = config.dataBytes;

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


		this.on('input', msg => {
			let packet = new Packet(this.address, this.priority, null, this.rtr);
			//console.log("msg.payload:", msg.payload);
			//add command to dataBytes
			let template = parseInt(this.command) + " " + this.dataBytesString;
			let parsedString = mustache.render(template, msg.payload); //parse mustache tags
			console.log("parsedString:", parsedString);
			packet.setDataBytes(this.stringToArray(parsedString));
			console.log(`send: ${packet.toString()}`);
			if (global.velbus) {
				this.status({fill: "green", shape: "dot", text: `Last command: ${packet.getCommandName} ${parsedString} @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`});
				packet.pack();
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
		};

	}

	RED.httpAdmin.get(`/velbus/get-modules`, function (req, res, next) {

		if (global.velbus && global.velbus.modules) {
			res.end(JSON.stringify(global.velbus.modules));
		} else {
			res.end([]);
		}

	});

	RED.httpAdmin.get(`/velbus/get-commands-list`, function (req, res) {

		const commandlist = Object.keys(constants.commands).map(key => {
			return {
				value: parseInt(constants.commands[key]),
				label: `${key.substr(8).toLowerCase().split("_").join(" ")} (${constants.numberToHexString(constants.commands[key])})`,
				hasValue: false
			}
		});
		res.end(JSON.stringify(commandlist));

	});


	RED.nodes.registerType("velbus-send-raw-bytes", VelbusSendRawBytes);
}
