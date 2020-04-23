class Protocol {
	constructor() {

		const fs = require('fs');

		let rawdata = fs.readFileSync('./info/protocol.json');
		this.jsonData = JSON.parse(rawdata);
		this.modules = Object.keys(this.jsonData.ModuleTypes);
		// console.log("protocol modules", this.modules);
	}
}
module.exports = Protocol;