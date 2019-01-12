# node-red-contrib-velbus

This is a custom Node Red plugin to connect the Velleman 
Velbus home automation system to Node Red. IT'S STILL UN UNFINISHED VERSION!

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
	- Button node proof of concept works
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
