let Velbus = require('../velbus/velbus');

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusConnector(config) {

		RED.nodes.createNode(this, config);

		this.ip = config.ip;
		this.port = config.port;
		config.RED = RED;

		if (!this.velbus) {
			this.velbus = new Velbus(config);
		}

	}


	RED.nodes.registerType("velbus-connector", VelbusConnector);
};
