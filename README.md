# node-red-contrib-velbus

WORK IN PROGRESS - This is a custom Node Red plugin to connect the Velleman 
Velbus home automation system to Node Red. IT'S STILL AN UNFINISHED VERSION, but
runs non stop and flawless on my PI since Jan 19, 2019.

It requires a serial (USB) connection from Velbus to the computer where
Node Red is running. 

Tested (and working) on a Macbook Pro and a Raspberry Pi.

Once installed, Velbus nodes like Buttons, Relays and Dimmers can be added to the flow.
First select the serial port: this should be automatically found.
Then deploy to save and connect to Velbus.
From then on you are able to scan for Velbus modules. 

__If you are using this module, please let me know! Curious about your findings/remarks/...__

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
- VMBEL0 (WIP)
- Other button modules can be easily added just by filling in the decimal address nr manually, but I don't have them, so I cannot test.
  However, for now, just select them by filling in their Address manually in stead of using the search button.

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
- For more, see [this](https://forum.velbus.eu/t/node-red-integration/15632) Velbus Forum thread.

- I was able to send memo text to my new VBBELO module: When a Google Home timer is 
 running, I can see the remaining time on the display. How cool is that!? ;-)
 For now I have a quick and dirty way of doing it with the "Raw bytes" node I've made, but I hope to find some time soon
 to do this properly with a new node type.
 Here are the nodes: 
`[{"id":"14ff119a.8a784e","type":"inject","z":"b6182f53.5ad4f","name":"","topic":"","payload":"","payloadType":"date","repeat":"5","crontab":"","once":false,"onceDelay":"","x":110,"y":80,"wires":[["c26a696c.1dd9e8"]]},{"id":"c26a696c.1dd9e8","type":"http request","z":"b6182f53.5ad4f","name":"Assistant Timers","method":"GET","ret":"obj","url":"http://192.168.0.100:8008/setup/assistant/alarms","tls":"","x":280,"y":80,"wires":[["f32030e9.51deb"]]},{"id":"45e86527.b504ec","type":"debug","z":"b6182f53.5ad4f","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":610,"y":60,"wires":[]},{"id":"f32030e9.51deb","type":"function","z":"b6182f53.5ad4f","name":"Memo Text","func":"\nif (msg.payload.timer.length > 0) {\n    msg.payload.times = [];\n    msg.payload.timer.forEach((timer => {\n        \n        const now = new Date().getTime();\n        let msLeft;\n        let status;\n        if (timer.status === 1) { //running\n            status = \"running\";\n            msLeft =  timer.fire_time - now;\n            msLeft = Math.max(0, msLeft);\n        } else if (timer.status === 0) { //pause\n            status = \"paused\";\n            msLeft= timer.remaining_duration;\n        } else {\n            status = \"triggered\";\n            msLeft =  O;\n        }\n        let formattedTime = new Date(msLeft).toISOString()\n        formattedTime = formattedTime.substr(15,4)\n        \n        msg.payload.times.push({timeLeft: formattedTime, status: status})\n        msg.payload.nrOfDataBytes = 8;\n        let bytes = stringToDataBytes(formattedTime);\n        msg.payload.dataBytes = \"0xAC 0xFF 0 \" + bytes + \" 0\";\n    }));\n}\nif (!msg.payload.times) {\n    msg.payload.nrOfDataBytes = 8;\n    msg.payload.dataBytes = \"0xAC 0xFF 0 0 0 0 0 0\";\n} else {\n    \n}\nreturn msg\n\n\n\nfunction stringToDataBytes(s) {\n    let r = [];\n    for (let i=0; i<s.length; i++) {\n        r.push(s.charCodeAt(i))\n    }\n    return r.join(\" \");\n}","outputs":1,"noerr":0,"x":450,"y":80,"wires":[["45e86527.b504ec","f084e48c.a94f48"]]},{"id":"f084e48c.a94f48","type":"velbus-raw-bytes","z":"b6182f53.5ad4f","name":"Memo Text","bytes":"0x0F 0xFB 0x11 {{nrOfDataBytes}} {{dataBytes}} FF 0x04","x":610,"y":100,"wires":[]}]` 