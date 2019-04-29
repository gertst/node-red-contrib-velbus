let client, net;

net = require('net');

client = new net.Socket();

client.connect(3334, '192.168.0.142');

client.onError = function() {
	console.log("error");
};


client.on("data", function(data) {
	//var byteArray = new Uint8Array(data);
	//console.log("data:", byteArray);
	console.log("data:", data);
});