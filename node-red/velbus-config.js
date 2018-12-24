let Velbus = require('../velbus/velbus.js');
let events = require('events');
let SerialPort = require('serialport');


module.exports = function (RED) {


	function ConfigNode(configNode) {
		RED.nodes.createNode(this, configNode);

		this.events = new events.EventEmitter();
		this.serial = configNode.serial;

		this.velbus = new Velbus(configNode.serial, this);

	}

	RED.nodes.registerType("velbus-config", ConfigNode);


	RED.httpAdmin.get('/velbus/get-velbus-port', function (req, res, next) {
		SerialPort.list(function (err, ports) {
			//find a Velleman USB module
			ports.forEach(function (port) {
				if (port.manufacturer && port.manufacturer.toLowerCase().indexOf("velleman") > -1) {
					console.info("FYI: Port found made by Velleman: " + port.comName);
					res.end(port.comName);
				}
			});
			res.end("No Velbus port found ...");
		});
	});

	// RED.httpAdmin.get('/velbus/open-serial', function (req, res, next) {
	//
	// 	let configVelbus = new Velbus(this);
	// 	const result = configVelbus.openSerial();
	// 	res.end(result)
	// });

};