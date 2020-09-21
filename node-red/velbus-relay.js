let Utils = require ("../info/utils");

let constants = require('../velbus/const');
let Packet = require('../velbus/packet');

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusRelay(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		this.connector = config.connector;
		this.address = config.addressType === "MANUAL" ? parseInt(config.address) : parseInt(config.addressType);
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

				if (packet.command === constants.commands.COMMAND_RELAY_SWITCH_STATUS) {

					let channel;
					if (packet.getDataByte(1) === 1) {
						channel = 1;
					} else if (packet.getDataByte(1) === 2) {
						channel = 2;
					} else if (packet.getDataByte(1) === 4) {
						channel = 3;
					} else if (packet.getDataByte(1) === 8) {
						channel = 4;
					}

					if (channel === this.channel) {
						// need to know which relays this is as the protocol to determine which channel is on can be different
						// console.log("module type:", packet.getDataByte(1));	// this will show which module
						if (packet.getDataByte(1) === 8) {	// VMB4RY
							this.isOn = Utils.bitAtGivenPosSetOrUnset(packet.getDataByte(3),channel);
						} else {														// other relay modules (checked: VMB4RYLD, VMB4RYNO, VMB1RY*)
							this.isOn = Utils.bitAtGivenPosSetOrUnset(packet.getDataByte(3),1);
						}

						// update status
						updateStatus(this);
					}


				}
			}

		});

		this.on('input', msg => {
			let packet = new Packet(this.address, constants.PRIO_HI);
			let speed = 0;
			let switchOn = true;
			if (this.commandsType === "TOGGLE") {
				switchOn = !this.isOn;
			} else if (this.commandsType === "PAYLOAD") {
				if (["1", "ON", "TRUE"].includes(msg.payload.toString().toUpperCase())) {
					switchOn = true;
				} else if (["0", "OFF", "FALSE"].includes(msg.payload.toString().toUpperCase())) {
					switchOn = false;
				} else if (msg.payload.toString().toUpperCase() === "TOGGLE") {
					switchOn = !this.isOn;
				} else {
					this.status({
						fill: "red",
						shape: "dot",
						text: `msg.payload has no valid value - ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
					});
					return
				}
			} else if (this.commandsType === "ON") {
				switchOn = true
			} else if (this.commandsType === "OFF") {
				switchOn = false
			}

			const command = switchOn ? constants.commands.COMMAND_SWITCH_RELAY_ON : constants.commands.COMMAND_SWITCH_RELAY_OFF;
			const bit = Math.pow(2, this.channel - 1);
			packet.setDataBytes([command, bit]);
			packet.pack();
			global.velbus.client.write(packet.getRawBuffer());
			
			// make sure module is in sync
			this.isOn = switchOn;
			updateStatus(this);
		});


		requestStatus(this);


	}

	RED.httpAdmin.get(`/velbus/get-relay-modules`, function (req, res, next) {

		if (global.velbus && global.velbus.modules) {
			res.end(JSON.stringify(global.velbus.modules.filter(i => i.nrOfRelays > 0)));
		} else {
			res.end([]);
		}

	});


	RED.nodes.registerType("velbus-relay", VelbusRelay);
};

function requestStatus(that) {
	//console.log("sendRequest", that.address);
	if (that.address) {
		let packet = new Packet(that.address, constants.PRIO_LOW);
		const bit = Math.pow(2, that.channel - 1);
		packet.setDataBytes([constants.commands.COMMAND_MODULE_STATUS_REQUEST, bit]);
		packet.pack();
		global.velbus.client.write(packet.getRawBuffer());
		// console.log(packet.toString());//
	}
}

function updateStatus(that) {
		const onOffString = that.isOn ? "on" : "off";

		that.status({
			fill: "green",
			shape: that.isOn ? "dot" : "ring",
			text: `Switched ${onOffString} @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
		});

		//console.log("address:", that.address);
		//console.log("channel:", that.channel);
		//console.log("status:", that.isOn);

		that.send(
				{
					payload: that.isOn,
					on: that.isOn
				});

}
