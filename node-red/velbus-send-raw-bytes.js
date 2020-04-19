let constants = require('../velbus/const');
let commandInfo = require('../info/commandInfo');
let Packet = require('../velbus/packet');
let mustache = require("mustache");

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusSendRawBytes(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.connector = config.connector;
		this.priority = config.priority;
		this.rtr = config.rtr;
		this.address = config.address;
		this.addressType = config.addressType;
		this.dataBytes = config.dataBytes;
		this.dataBytesType = config.dataBytesType;

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
			let address = parseInt(this.addressType);
			if (this.addressType === "MSG") {
				address = parseInt(msg.address);
				if (isNaN(address)) {
					this.status({fill: "red", shape: "dot", text: "Error: msg.address is not a number!"});
					return
				}
			} else if (this.addressType === "PAYLOAD") {
				address = parseInt(msg.payload.address);
				if (isNaN(address)) {
					this.status({fill: "red", shape: "dot", text: "Error: msg.payload.address is not a number!"});
					return
				}
			} else if (this.addressType === "MANUAL") {
				address = parseInt(this.address);
			}
			let priority = this.priority;
			if (this.priority === "MSG") {
				priority = msg.priority;
				if (priority != 251 && priority != 248) {
					this.status({fill: "red", shape: "dot", text: "Error: msg.priority must be 251 (low) or 248 (high)!"});
					return
				}
			} else if (this.priority === "PAYLOAD") {
				priority = msg.payload.priority;
				if (priority != 251 && priority != 248) {
					this.status({fill: "red", shape: "dot", text: "Error: msg.payload.priority must be 251 (low) or 248 (high)!"});
					return
				}
			}

			let rtr = this.rtr;
			if (this.rtr === "MSG") {
				rtr = msg.rtr;
				if (rtr != 0 && rtr != 1) {
					this.status({fill: "red", shape: "dot", text: "Error: msg.rtr must be 0 (Off) or 1 (On)!"});
					return
				}
			} else if (this.rtr === "PAYLOAD") {
				rtr = msg.payload.rtr;
				if (rtr != 0 && rtr != 1) {
					this.status({fill: "red", shape: "dot", text: "Error: msg.payload.rtr must be 0 (Off) or 1 (On)!"});
					return
				}
			}

			let packet = new Packet(address, priority, null, rtr);
			//console.log("msg.payload:", msg.payload);
			//add command to dataBytes
			let dataBytesString;
			if (this.dataBytesType === 'PAYLOAD') {
				if (msg.payload === "") {
					this.status({fill: "red", shape: "dot", text: "Error: msg.payload is empty! Expected: Space delimited list of DataBytes."});
					return
				} else {
					dataBytesString = msg.payload.toString();
				}
			} else if (this.dataBytesType === 'DATABYTES') {
				if (msg.dataBytes === "") {
					this.status({fill: "red", shape: "dot", text: "Error: msg.dataBytes is empty! Expected: Space delimited list of DataBytes."});
					return
				} else {
					dataBytesString = msg.payload.dataBytes.toString();
				}
			} else if (this.dataBytesType === 'TOPIC+PAYLOAD') {
				if (msg.topic === "") {
					this.status({fill: "red", shape: "dot", text: "Error: msg.topic is empty! Expected: A combination of topic + payload to create a space delimited list of numbers for DataBytes."});
					return
				} else {
					if (msg.payload.dataBytes) {
						dataBytesString = msg.topic + " " + msg.payload.dataBytes;
					} else {
						dataBytesString = msg.topic + " " + msg.payload;
					}
				}
			} else if (this.dataBytesType === 'MANUAL') {
				if (this.dataBytes === "") {
					this.status({fill: "red", shape: "dot", text: "Error: No Data Bytes found. Expected: Space delimited list of DataBytes."});
					return
				} else {
					dataBytesString = this.dataBytes;
				}
			} else {
				dataBytesString = this.dataBytesType + " " + this.dataBytes;
			}
			//console.log("dataBytesString: " + dataBytesString);

			dataBytesString = mustache.render(dataBytesString, msg.payload); //parse mustache tags

			packet.setDataBytes(this.stringToArray(dataBytesString));
			//console.log(`send: ${packet.toString()}`);
			if (global.velbus) {
				this.status({fill: "green", shape: "dot", text: `Last command: ${packet.getCommandName} ${dataBytesString} @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`});
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

	RED.httpAdmin.get(`/velbus/get-commands-list-send`, function (req, res) {

		const commandlist = Object.keys(constants.commands).map(key => {
			return {
				value: parseInt(constants.commands[key]),
				label: `${key.substr(8).toLowerCase().split("_").join(" ")} (${constants.numberToHexString(constants.commands[key])}) + `,
				// hasValue: false
			}
		});
		res.end(JSON.stringify(commandlist));

	});

	RED.httpAdmin.get(`/velbus/get-commands-info`, function (req, res) {

		res.end(JSON.stringify(commandInfo));

	});


	RED.nodes.registerType("velbus-send-raw-bytes", VelbusSendRawBytes);
}
