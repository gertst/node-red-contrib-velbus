let constants = require('../velbus/const');

let connector;

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusReceiveRawBytes(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		// Retrieve the config node
		this.connector = RED.nodes.getNode(config.connector);
		connector = this.connector;
		this.address = config.addressType === "MANUAL" ? parseInt(config.address) : parseInt(config.addressType);
		this.command = config.commandType === "MANUAL" ? parseInt(config.command) : parseInt(config.commandType);

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

				if (packet.command === this.command || this.command === -1) {
					//console.log(`pushed ${packet.getRawDataAsString()}`);
					const databytes = packet.getDataBytes;
					this.status({
						fill: "green",
						shape: "dot",
						text: `Received ${packet.getCommandName} @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
					});

					this.send(
							{
								payload: {
									channel: packet.channel,
									command: packet.command,
									commandName: packet.getCommandName,
									dataBytesArray: packet.getDataBytes,
									rawBytesArray: packet.rawPacket
								}
							});

				}
			}

		});

	}

	RED.httpAdmin.get(`/velbus/get-all-modules-receive`, function (req, res, next) {

		if (connector && connector.velbus && connector.velbus.modules) {
			res.end(JSON.stringify(connector.velbus.modules));
		} else {
			res.end("[]");
		}

	});

	RED.httpAdmin.get(`/velbus/get-commands-list-receive`, function (req, res) {

		const commandlist = Object.keys(constants.commands).map(key => {
			return {
				value: parseInt(constants.commands[key]),
				label: `${key.substr(8).toLowerCase().split("_").join(" ")} (${constants.numberToHexString(constants.commands[key])})`,
				hasValue: false
			}
		});
		res.end(JSON.stringify(commandlist));

	});


	RED.nodes.registerType("velbus-receive-raw-bytes", VelbusReceiveRawBytes);
};
