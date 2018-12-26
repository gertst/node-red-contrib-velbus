# node-red-contrib-velbus

This is a custom Node Red plugin to connect the Velleman 
Velbus home automation system to Node Red.

It requires a serial (USB) connection to the computer where
Node Red is running. For now only tested on a Macbook,
but the aim is to get it running on a Raspberry Pi.

Once installed, Velbus nodes can be added to out flow.
First select the serial port: this should be automatically found.
Then deploy to save and connect to Velbus.
From then on you are able to scan for Velbus modules. 


## Status

Alpha phase: loading modules, no real workflow yet!


## Todo

- ☑ auto scan for Velbus serial port
- ☐ show real names of found modules
- ☐ auto-reconnect serial port
