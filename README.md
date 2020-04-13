# node-red-contrib-velbus

This is a custom Node Red plugin to connect the Velleman 
Velbus home automation system to Node Red. Node-red typically runs on a Raspberry Pi to manage home automation gear.
It runs non stop and (almost) flawless on my PI since Jan 19, 2019.
The flaws I had never were caused by Velbus or this package of custom nodes.

To connect to Velbus you need 
- an USB connector module like the VMB1USB or VMBRSUSB. I only tested with a VMB1USB but I suppose both will work. Let me know if not! 
- a TCP server app that converts USB serial communication to a socket connection. 
I use the splendid and rock solid VelServ app made by Jeroends. You can find it [here](https://github.com/jeroends/velserv).
You can find MDAR's [installation details here](https://forum.velbus.eu/t/how-to-install-and-run-velserv-a-velbus-tcp-gateway/15422) 
to install it on almost any Linux/Debian based system.


Once installed, these Velbus nodes can be found in the Velbus palette:
 1. a **Send Raw Bytes** node, to send Velbus commands
 2. a **Receive Raw Bytes** node, to listen to Velbus messages
 3. a **Button** node to manage presses on Velbus push buttons
 4. a **Temperature** Node to send and receive temperature sensor data

__If you are using this module, please let me know! Curious about your findings/remarks/...__

## History

- 2018/12/17 
	- Alpha phase: loading modules, no real workflow yet!
- 2019/01/05 
	- Button node proof of concept works, but not without issues.
	- Reconnect to Velbus works
- 2019/05/02
	- BREAKING change: Address in Button node now works with HEX values
	- BREAKING change: you can now choose to connect using USB (as before) or using Socket (new)
	- Added module VMBELO	
- 2020/04/05
	- BREAKING change: The connection to Velbus is now accomplished using TCP/sockets
	- All modules have now a better UI to select modules an nodes
	- There's a new node to receive all Velbus messages
- 2020/04/08
	- A new Temperature node	
- 2020/04/11
	- Quite some modules had wrong configuration data, but thanks to the great dedication of [MDAR](https://forum.velbus.eu/u/mdar/summary), 
	  who did some testing for modules I don't have, these issues got fixed!
	  - VMBGP1
      - VMBGP2
      - VMBGP4
      - VMBGPO
      - VMBGPOD
      - VMBPIRO
      - VMBGP4PIR
      - VMBRFR8S
      - VMBMETEO
      - VMB4AN
      - VMBVP01
   - Bugfix: in some circumstances modules were found twice. Thanks Ggaljoen to notify me.
   - Added an example of a Send Raw Bytes node
- 2020/04/12
   - Fix width of typed input fields.
   - BREAKING: New UX for the Send Raw Bytes node 
   - 1st step to have more info available for each command  
- 2020/04/13
   - Bugfix: moved devDependency "mustache" to dependency.
   - cleanup old references and files
   
		
## Implemented Velbus modules:

##### Tested input modules
Next modules can be controlled by simulating button presses.
- VMB4PB (tested)
- VMB8PB (tested)
- VMBELO (tested)
- Other probably working but not tested. Let me know if your's not working.
  However, all button modules can be easily added just by filling in the decimal address nr manually.
  You can also edit the file `node_modules/node-red-contrib-velbus/velbus/const.js` to add your
  module or change its properties. See module help. Let me know your changes!


##### To Do
- Although the generic nodes can manage all Velbus commands and messages, I want to 
  add som dedicated modules for dimmers, relays, Memo texts, ...


## Example scripts

- Using the Send Raw Bytes node to update the time on Velbus:
	- Overview:
	![Nodes overview](/readme-assets/send-raw-bytes-example-overview.png)
	- Preparing the input message by using a Fuction node:
	![Function node details](/readme-assets/send-raw-bytes-example-function-node-details.png)
	- Adding the Send Raw Bytes details:
	![Nodes](/readme-assets/send-raw-bytes-example-edit-panel.png)
	- Copy nodes from here:
	``[{"id":"610806f.e6af4f8","type":"function","z":"be32b5b5.08f898","name":"inject Date","func":"//get the ’date from the payload of the input message\nlet d = new Date(msg.payload);\n\n/*\nThis is how Velbus expects the day values:\nH’00’ Monday\nH’01’ Tuesday\nH’02’ Wednesday\nH’03’ Thursday\nH’04’ Friday\nH’05’ Saterday\nH’06’ Sunday\n*/\n\n/*\nBut the standard Date.getDay() function has the American notation,\nso we have to convert it first:\n*/\n//substract a day to go from Sunday as first day to Monday\nlet day = d.getDay() - 1;\n//if we have Sunday, correct it to 6\nif (day === -1) day = 6;\n\n\n// create a new payload, with the 3 keys\n// we need: day, hour and minute\nlet payload = {\n    day: day, \n    hour: d.getHours(), \n    minute: d.getMinutes()\n}\n\n//replace the old payload with our new one\nmsg.payload = payload;\n\n//return the message\nreturn msg;","outputs":1,"noerr":0,"x":350,"y":140,"wires":[["953ad491.928dc8"]]},{"id":"739d47ca.297f48","type":"inject","z":"be32b5b5.08f898","name":"each day at 6","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 06 * * *","once":false,"onceDelay":0.1,"x":120,"y":200,"wires":[["610806f.e6af4f8"]]},{"id":"57c66aa9.d3ef54","type":"inject","z":"be32b5b5.08f898","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":100,"y":140,"wires":[["610806f.e6af4f8"]]},{"id":"953ad491.928dc8","type":"velbus-send-raw-bytes","z":"be32b5b5.08f898","name":"Raw Bytes","connector":"c152af36.a02ea","dataBytes":"{{day}} {{hour}} {{minute}}","dataBytesType":"216","address":"","addressType":"0","priority":"251","rtr":"0","x":540,"y":140,"wires":[]},{"id":"c152af36.a02ea","type":"velbus-connector","z":"","ip":"raspberrypi.local","port":"6000"}]``
- Check [this Velbus Forum thread](https://forum.velbus.eu/t/node-red-integration/15632) for updated examples soon.
 
## Contact
- For bugs/issues/requests: [Github](https://github.com/gertst/node-red-contrib-velbus/issues)
- [My Twitter handle](https://twitter.com/GertStalpaert)
