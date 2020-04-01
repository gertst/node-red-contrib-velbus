'use strict';

let constants = {


	moduleMetaData: [
		{type: 0x01, name: "VMB8PD", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x02, name: "VMB1RY", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x05, name: "VMB6IN", nrOfChannels: 6, hasInput: true, requestNameBinary: false},
		{type: 0x07, name: "VMB1DM", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x08, name: "VMB4RY", nrOfChannels: 4, hasInput: false, requestNameBinary: false},
		{type: 0x0A, name: "VMB8IR", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x0B, name: "VMB4PD", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x0F, name: "VMB1LED", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x10, name: "VMB4RYLD", nrOfChannels: 5, hasInput: false, requestNameBinary: false},
		{type: 0x11, name: "VMB4RYNO", nrOfChannels: 5, hasInput: false, requestNameBinary: false},
		{type: 0x12, name: "VMB4DC", nrOfChannels: 4, hasInput: false, requestNameBinary: false},
		{type: 0x14, name: "VMBDME", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x15, name: "VMBDMI", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x16, name: "VMB8PBU", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x17, name: "VMB6PBN", nrOfChannels: 6, hasInput: true, requestNameBinary: false},
		{type: 0x18, name: "VMB2PBN", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x1B, name: "VMB1RYNO", nrOfChannels: 5, hasInput: false, requestNameBinary: false},
		{type: 0x1D, name: "VMB2BLE", nrOfChannels: 2, hasInput: false, requestNameBinary: false},
		{type: 0x1E, name: "VMBGP1", nrOfChannels: 9, hasInput: false, requestNameBinary: false},
		{type: 0x1F, name: "VMBGP2", nrOfChannels: 9, hasInput: false, requestNameBinary: false},
		{type: 0x20, name: "VMBGP4", nrOfChannels: 9, hasInput: false, requestNameBinary: false},
		{type: 0x21, name: "VMBGPO", nrOfChannels: 33, hasInput: false, requestNameBinary: false},
		{type: 0x22, name: "VMB7IN", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x28, name: "VMBGPOD", nrOfChannels: 33, hasInput: false, requestNameBinary: false},
		{type: 0x29, name: "VMB1RYNOS", nrOfChannels: 5, hasInput: false, requestNameBinary: false},
		{type: 0x2A, name: "VMBPIRM", nrOfChannels: 7, hasInput: true, requestNameBinary: false},
		{type: 0x2B, name: "VMBPIRC", nrOfChannels: 7, hasInput: true, requestNameBinary: false},
		{type: 0x2C, name: "VMBPIRO", nrOfChannels: 7, hasInput: false, requestNameBinary: false},
		{type: 0x2D, name: "VMBGP4PIR", nrOfChannels: 9, hasInput: false, requestNameBinary: false},
		{type: 0x2E, name: "VMB1BLS", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x2F, name: "VMBDMIR", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		// {type: 0x30, name: "VMBRFR8S", nrOfChannels: 0, hasInput: false, requestNameBinary: false}, //
		{type: 0x31, name: "VMBMETEO", nrOfChannels: 0, hasInput: false, requestNameBinary: false},
		{type: 0x32, name: "VMB4AN", nrOfChannels: 0, hasInput: false, requestNameBinary: false},
		{type: 0x33, name: "VMBVP01", nrOfChannels: 0, hasInput: false, requestNameBinary: false},
		{type: 0x34, name: "VMBEL1", nrOfChannels: 16, hasInput: true, requestNameBinary: true},
		{type: 0x35, name: "VMBEL2", nrOfChannels: 16, hasInput: true, requestNameBinary: true},
		{type: 0x36, name: "VMBEL4", nrOfChannels: 24, hasInput: true, requestNameBinary: true},
		{type: 0x37, name: "VMBELO", nrOfChannels: 24, hasInput: true, requestNameBinary: true},
		// {type: 0x39, name: "VMBSIG", nrOfChannels: 0, hasInput: false, requestNameBinary: false}, //signum
		{type: 0x3A, name: "VMBGP1_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3B, name: "VMBGP2_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3C, name: "VMBGP4_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3D, name: "VMBGPOD_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3E, name: "VMBGP4PIR_2", nrOfChannels: 9, hasInput: false, requestNameBinary: false},
		{type: 0x3F, name: "VMCM3", nrOfChannels: 0, hasInput: false, requestNameBinary: false},
		{type: 0x40, name: "VMBUSBIP", nrOfChannels: 0, hasInput: false, requestNameBinary: false},
	],



	//priority
	PRIO_HI: 0xF8,
	PRIO_LOW: 0xFB,

	// Velbus commands
	COMMAND_PUSH_BUTTON_STATUS: 0x00,
	COMMAND_SWITCH_RELAY_OFF: 0x01,
	COMMAND_SWITCH_RELAY_ON: 0x02,
	COMMAND_SWITCH_BLIND_OFF: 0x04,
	COMMAND_BLIND_UP: 0x05,
	COMMAND_BLIND_DOWN: 0x06,
	COMMAND_SET_DIMVALUE: 0x07,
	COMMAND_RESTORE_LAST_DIMVALUE: 0x11,
	COMMAND_BLIND_POS: 0x1C,
	COMMAND_GET_MODULE: 0x40,
	COMMAND_SUBTYPE: 0xB0,
	COMMAND_DIMMERCONTROLLER_STATUS: 0xB8,
	COMMAND_BLIND_STATUS: 0xEC,
	COMMAND_SENSOR_TEMP_REQUEST: 0xE5,
	COMMAND_SENSOR_TEMPERATURE: 0xE6,
	COMMAND_DIMMER_STATUS: 0xEE,
	COMMAND_MODULE_NAME_REQUEST: 0xEF,
	COMMAND_MODULE_NAME_PART1: 0xF0,
	COMMAND_MODULE_NAME_PART2: 0xF1,
	COMMAND_MODULE_NAME_PART3: 0xF2,
	COMMAND_STATUS_REQUEST: 0xFA,
	COMMAND_RELAY_STATUS: 0xFB,
	COMMAND_MODULE_TYPE: 0xFF,
	COMMAND_MODULE_SUBTYPE: 0xB0,
};

module.exports = Object.freeze(constants); // freeze prevents changes by users

