let Velbus = require('../velbus/velbus');

module.exports = function (RED) {
	"use strict";

	//runs on deploy or when node is already in flow
	function VelbusConnector(config) {

		RED.nodes.createNode(this, config);

		this.type = config.type;
		this.ip = config.ip;
		this.port = config.port;

		global.velbus = new Velbus(this);


		this.status({fill: "green", shape: "ring", text: `Waiting ...`});


	}


	RED.nodes.registerType("velbus-switch", VelbusSwitch);
}
