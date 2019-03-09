# node-red-contrib-velbus

WORK IN PROGRESS - This is a custom Node Red plugin to connect the Velleman 
Velbus home automation system to Node Red. IT'S STILL AN UNFINISHED VERSION!

It requires a serial (USB) connection from Velbus to the computer where
Node Red is running. 

Tested (and working) on a Macbook Pro and a Raspberry Pi.

Once installed, Velbus nodes like Buttons, Relays and Dimmers can be added to the flow.
First select the serial port: this should be automatically found.
Then deploy to save and connect to Velbus.
From then on you are able to scan for Velbus modules. 


## Status

- 2018/12/17 
	- Alpha phase: loading modules, no real workflow yet!
- 2019/01/05 
	- Button node proof of concept works, but not without issues.
	- Reconnect to Velbus works

## Implemented Velbus modules:

##### Buttons
- VMB4PB
- VMB8PB
- Other button modules can probably be easily added, but I don't have them, so I cannot test.

##### Dimmers
- to do: VMBDMI

##### Relays
- to do: VMB4RY

## Todo

- ☒ auto scan for Velbus serial port
- ☐ show real names of found modules (WIP)
- ☒ auto-reconnect serial port
- ☐ consts: add friendly names of commands and show commands

## Example scripts

- To update the day/time of your Velbus each week or after power failure, copy these nodes to Node-red:
``[{"id":"a9c0684c.f7cae8","type":"velbus-raw-bytes","z":"299a7d60.bd7df2","name":"Clock update","bytes":"0x0F 0xFB 00 0x04 0xD8 {{day}} {{hour}} {{minute}} 0 0x04","x":560,"y":460,"wires":[]},{"id":"500bd22.bf8db2c","type":"inject","z":"299a7d60.bd7df2","name":"@Sunday","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 12 * * 0","once":false,"onceDelay":0.1,"x":110,"y":440,"wires":[["b777281f.aac4e8"]]},{"id":"b777281f.aac4e8","type":"function","z":"299a7d60.bd7df2","name":"inject Date","func":"let d = new Date();\nlet day = d.getDay()-1;\nif (day === -1) day = 0;\n\nlet payload = {day: 5, hour: d.getHours(), minute: d.getMinutes()}\nmsg.payload = payload;\nreturn msg;","outputs":1,"noerr":0,"x":350,"y":460,"wires":[["a9c0684c.f7cae8"]]},{"id":"7fea2506.31fd2c","type":"inject","z":"299a7d60.bd7df2","name":"@Launch","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":true,"onceDelay":"30","x":100,"y":480,"wires":[["b777281f.aac4e8"]]}]``
