let constants = require('../velbus/const');
let Packet = require('../velbus/packet');

let connector;

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusTemperature(config) {

		RED.nodes.createNode(this, config);

		this.name = config.name;
		// Retrieve the config node
		this.connector = RED.nodes.getNode(config.connector);
		connector = this.connector;
		this.address = config.addressType === "MANUAL" ? parseInt(config.address) : parseInt(config.addressType);
		this.mode = parseInt(config.modeType);

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

				if (packet.command === constants.commands.COMMAND_TEMPERATURE_SENSOR_TEMPERATURE) {
					//console.log(`pushed ${packet.getRawDataAsString()}`);

					const highByteCurrentSensorTemperature = packet.rawPacket[5];
					const lowByteCurrentSensorTemperature = packet.rawPacket[6];

					const tempC = ((highByteCurrentSensorTemperature << 3) + (lowByteCurrentSensorTemperature >> 5))
							* 0.0625 * ((lowByteCurrentSensorTemperature & 0x1F) === 0x1F ? -1 : 1);

					const tempF = tempC * 9/5 + 32;

					this.status({
						fill: "green",
						shape: "dot",
						text: `Temperature is ${tempC}°C @ ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`
					});

					this.send(
							{
								payload: tempC,
								fahrenheit: tempF,
								celcius: tempC
							});

				}
			}

		});

		this.on('input', msg => {
			// console.log("input", msg);
			sendRequest(this);
		});

		/*
		(valid range: 10…255s)
		(5…9 = auto send on temperature change >=0.5°)
		(1…4 = auto send disabled)
		(0 = no change on auto send interval)
		 */

		sendRequest(this);


	}

	RED.httpAdmin.get(`/velbus/get-temperature-modules`, function (req, res, next) {

		if (connector && connector.velbus && connector.velbus.modules) {
			res.end(JSON.stringify(connector.velbus.modules.filter(i => i.hasTemperatureSensor)));
		} else {
			res.end("[]");
		}

	});


	RED.nodes.registerType("velbus-temperature", VelbusTemperature);
};

function sendRequest(that) {
	if (connector && connector.velbus && connector.velbus.client && that.address) {
		let packet = new Packet(that.address, constants.PRIO_LOW);
		packet.setDataBytes([constants.commands.COMMAND_TEMPERATURE_SENSOR_TEMPERATURE_REQUEST, that.mode]);
		packet.pack();
		connector.velbus.client.write(packet.getRawBuffer());
	}
}