class Protocol {
	constructor() {

		const fs = require('fs');

		//let rawdata = fs.readFileSync(__dirname + 'info/protocol.json');
		let rawdata = require('./protocol.json');
		this.jsonData = rawdata;
		//this.modules = Object.keys(this.jsonData.ModuleTypes);
		//console.log("protocol modules", this.modules);
	}
}
module.exports = Protocol;