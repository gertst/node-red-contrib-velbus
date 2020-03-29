let Velbus = require('../velbus/velbus');

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusConnector(config) {

		RED.nodes.createNode(this, config);

		this.ip = config.ip;
		this.port = config.port;
		config.RED = RED;

		initVelbus(config);

	}

	function initVelbus(config) {
		if (!global.velbus) {
			global.velbus = new Velbus(config);
		}
	}

	RED.httpAdmin.get(`/velbus/init/:ip/:port`, function (req, res, next) {

		const config = {
			ip: req.params.ip,
			port: req.params.port,
			RED
		};
		initVelbus(config);

	});

	RED.nodes.registerType("velbus-connector", VelbusConnector);
};
