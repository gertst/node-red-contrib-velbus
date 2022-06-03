let Utils = require ("../info/utils");

let constants = require('../velbus/const');
let Packet = require('../velbus/packet');

let connector;

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusRelay(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		// Retrieve the config node
		this.connector = RED.nodes.getNode(config.connector);
		connector = this.connector;
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
				if (packet.command === constants.commands.COMMAND_MODULE_TYPE && packet.rawPacket.length >= 10) {
					const module = this.connector.velbus.modules.find(i => i.address === this.address);
					if (module) {
						this.moduleName = module.name;
						this.moduleType = module.moduleType;
						requestStatus(this);	// now is a good time to request status
					}
				}

				if (packet.command === constants.commands.COMMAND_RELAY_SWITCH_STATUS) {
					// VMB4RYLD/NO, VMB4RY and VMB1RY* Protocols checked

					let channel;
					if (packet.getDataByte(1) === 1) {
						channel = 1;
					} else if (packet.getDataByte(1) === 2) {
						channel = 2;
					} else if (packet.getDataByte(1) === 4) {
						channel = 3;
					} else if (packet.getDataByte(1) === 8) {
						channel = 4;
					} else if (packet.getDataByte(1) === 16) {
						channel = 5;
					}

					if (channel === this.channel) {
						// console.log("address:", this.address);					// address
						// console.log("channel:", channel, "byte=", packet.getDataByte(1));	// channel and bytes
						// console.log("name:", this.name);
						// console.log("module name:", this.moduleName);
						// console.log("module type:", this.moduleType);

						// relay status is dependent on relay type
						let channel_bit = (this.moduleName === "VMB4RY") ? channel : 1; 

						this.isOn = Utils.bitAtGivenPosSetOrUnset(packet.getDataByte(3), channel_bit);
						// console.log("status:", this.isOn, "byte=", packet.getDataByte(3));	// on/off status

						// old code left in in case
						//if (packet.getDataByte(1) === 8) {	// VMB4RY
						//	this.isOn = Utils.bitAtGivenPosSetOrUnset(packet.getDataByte(3),channel);
						//} else {				// other relay modules (checked: VMB4RYLD, VMB4RYNO, VMB1RY*)
						//	this.isOn = Utils.bitAtGivenPosSetOrUnset(packet.getDataByte(3),1);
						//}

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
			if (connector && connector.velbus && connector.velbus.client) {
				connector.velbus.client.write(packet.getRawBuffer());
			} else {
				this.status({fill: "red", shape: "ring", text: `No active Velbus: Did you deploy first?`});
			}
			// make sure module is in sync
			this.isOn = switchOn;
			updateStatus(this);
		});


		// requestStatus(this); // this might be premature as we may not have identified the relay type yet


	}

	RED.httpAdmin.get(`/velbus/get-relay-modules`, function (req, res, next) {

		if (connector && connector.velbus && connector.velbus.modules) {
			res.end(JSON.stringify(connector.velbus.modules.filter(i => i.nrOfRelays > 0)));
		} else {
			res.end("[]");
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
		if (connector && connector.velbus && connector.velbus.client) {
			connector.velbus.client.write(packet.getRawBuffer());
		}
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
