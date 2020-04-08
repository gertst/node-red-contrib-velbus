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
  add som dedicated modules for dimmers, relays, Memo texts, Temperature sensors, ...


## Example scripts

- Check [this Velbus Forum thread](https://forum.velbus.eu/t/node-red-integration/15632) for updated examples soon.
 
## Contact
- For bugs/issues/requests: [Github](https://github.com/gertst/node-red-contrib-velbus/issues)
- [My Twitter handle](https://twitter.com/GertStalpaert)
