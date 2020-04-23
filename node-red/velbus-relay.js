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
						this.isOn = Utils.bitAtGivenPosSetOrUnset(packet.getDataByte(3),channel);
						const onOffString = this.isOn ? "on" : "off";

						this.status({
							fill: "green",
							shape: this.isOn ? "dot" : "ring",
							text: `Switched ${onOffString} @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
						});

						this.send(
								{
									payload: this.isOn,
									on: this.isOn
								});
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
		});


		requestStatus(this);


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