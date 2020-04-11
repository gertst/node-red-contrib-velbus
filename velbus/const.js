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
		{type: 0x1E, name: "VMBGP1", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x1F, name: "VMBGP2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x20, name: "VMBGP4", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x21, name: "VMBGPO", nrOfChannels: 33, hasInput: true, requestNameBinary: false},
		{type: 0x22, name: "VMB7IN", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x28, name: "VMBGPOD", nrOfChannels: 33, hasInput: true, requestNameBinary: false},
		{type: 0x29, name: "VMB1RYNOS", nrOfChannels: 5, hasInput: false, requestNameBinary: false},
		{type: 0x2A, name: "VMBPIRM", nrOfChannels: 7, hasInput: true, requestNameBinary: false},
		{type: 0x2B, name: "VMBPIRC", nrOfChannels: 7, hasInput: true, requestNameBinary: false},
		{type: 0x2C, name: "VMBPIRO", nrOfChannels: 7, hasInput: true, requestNameBinary: false},
		{type: 0x2D, name: "VMBGP4PIR", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x2E, name: "VMB1BLS", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x2F, name: "VMBDMIR", nrOfChannels: 1, hasInput: false, requestNameBinary: false},
		{type: 0x30, name: "VMBRFR8S", nrOfChannels: 8, hasInput: true, requestNameBinary: false}, //
		{type: 0x31, name: "VMBMETEO", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x32, name: "VMB4AN", nrOfChannels: 4, hasInput: true, requestNameBinary: false},
		{type: 0x33, name: "VMBVP01", nrOfChannels: 8, hasInput: true, requestNameBinary: false},
		{type: 0x34, name: "VMBEL1", nrOfChannels: 16, hasInput: true, requestNameBinary: true},
		{type: 0x35, name: "VMBEL2", nrOfChannels: 16, hasInput: true, requestNameBinary: true},
		{type: 0x36, name: "VMBEL4", nrOfChannels: 24, hasInput: true, requestNameBinary: true},
		{type: 0x37, name: "VMBELO", nrOfChannels: 24, hasInput: true, requestNameBinary: true},
		// {type: 0x39, name: "VMBSIG", nrOfChannels: 0, hasInput: false, requestNameBinary: false}, //signum
		{type: 0x3A, name: "VMBGP1_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3B, name: "VMBGP2_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3C, name: "VMBGP4_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3D, name: "VMBGPOD_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3E, name: "VMBGP4PIR_2", nrOfChannels: 9, hasInput: true, requestNameBinary: false},
		{type: 0x3F, name: "VMCM3", nrOfChannels: 0, hasInput: false, requestNameBinary: false},
		{type: 0x40, name: "VMBUSBIP", nrOfChannels: 0, hasInput: false, requestNameBinary: false},
	],


	//priority
	PRIO_HI: 0xF8,
	PRIO_LOW: 0xFB,

	// Velbus commands
	commands: {
		COMMAND_SWITCH_STATUS: 0x00,
		COMMAND_SWITCH_RELAY_OFF: 0x01,
		COMMAND_SWITCH_RELAY_ON: 0x02,
		COMMAND_START_RELAY_TIMER: 0x03,
		COMMAND_BLIND_OFF: 0x04,
		COMMAND_BLIND_UP: 0x05,
		COMMAND_BLIND_DOWN: 0x06,
		COMMAND_SET_DIMMER_VALUE: 0x07,
		COMMAND_START_DIMMER_TIMER: 0x08,
		COMMAND_BUS_OFF: 0x09,
		COMMAND_BUS_ACTIVE: 0x0A,
		COMMAND_RS232_BUFFER_FULL: 0x0B,
		COMMAND_RS232_BUFFER_EMPTY: 0x0C,
		COMMAND_START_BLINK_RELAY_TIMER: 0x0D,
		COMMAND_INTERFACE_STATUS_REQUEST: 0x0E,
		COMMAND_SLIDER_STATUS: 0x0F,
		COMMAND_FIRMWARE_UPDATE_REQUEST: 0x60,
		COMMAND_FIRMWARE_INFO: 0x61,
		COMMAND_ENTER_FIRMWARE_UPGRADE: 0x62,
		COMMAND_ABORT_FIRMWARE_UPGRADE: 0x63,
		COMMAND_EXIT_FIRMWARE_UPGRADE: 0x64,
		COMMAND_FIRMWARE_UPGRADE_STARTED: 0x65,
		COMMAND_WRITE_FIRMWARE_MEMORY: 0x66,
		COMMAND_FIRMWARE_MEMORY: 0x67,
		COMMAND_FIRMWARE_MEMORY_WRITE_CONFIRMED: 0x68,
		COMMAND_READ_FIRMWARE_MEMORY: 0x69,
		COMMAND_MODULE_SUBTYPE: 0xB0,
		COMMAND_SET_REALTIME_DATE: 0xB7,
		COMMAND_VARIABLE_DIMMER_STATUS: 0xB8,
		COMMAND_TEMPERATURE_SETTINGS_PART3: 0xC6,
		COMMAND_STATISTICS_REQUEST: 0xC7,
		COMMAND_STATISTICS: 0xC8,
		COMMAND_READ_MEMORY_BLOCK: 0xC9,
		COMMAND_WRITE_MEMORY_BLOCK: 0xCA,
		COMMAND_MEMORY_DUMP_REQUEST: 0xCB,
		COMMAND_MEMORY_BLOCK: 0xCC,
		COMMAND_LCD_LINE_TEXT_PART1: 0xCD,
		COMMAND_LCD_LINE_TEXT_PART2: 0xCE,
		COMMAND_LCD_LINE_TEXT_PART3: 0xCF,
		COMMAND_LCD_LINE_TEXT_REQUEST: 0xD0,
		COMMAND_ENABLE_TIMER_CHANNELS: 0xD1,
		COMMAND_RESET_BACKLIGHT: 0xD2,
		COMMAND_RESET_PUSHBUTTON_BACKLIGHT: 0xD3,
		COMMAND_SET_PUSHBUTTON_BACKLIGHT: 0xD4,
		COMMAND_BACKLIGHT_STATUS_REQUEST: 0xD5,
		COMMAND_BACKLIGHT: 0xD6,
		COMMAND_REAL_TIME_CLOCK_REQUEST: 0xD7,
		COMMAND_REAL_TIME_CLOCK: 0xD8,
		COMMAND_ERROR_COUNT_REQUEST: 0xD9,
		COMMAND_ERROR_COUNT: 0xDA,
		COMMAND_TEMPERATURE_SENSOR_COMFORT_MODE: 0xDB,
		COMMAND_TEMPERATURE_SENSOR_DAY_MODE: 0xDC,
		COMMAND_TEMPERATURE_SENSOR_NIGHT_MODE: 0xDD,
		COMMAND_TEMPERATURE_SENSOR_SAFE_MODE: 0xDE,
		COMMAND_TEMPERATURE_SENSOR_COOLING_MODE: 0xDF,
		COMMAND_TEMPERATURE_SENSOR_HEATING_MODE: 0xE0,
		COMMAND_TEMPERATURE_SENSOR_LOCK: 0xE1,
		COMMAND_TEMPERATURE_SENSOR_UNLOCK: 0xE2,
		COMMAND_SET_DEFAULT_SLEEP_TIMER: 0xE3,
		COMMAND_TEMPERATURE_SENSOR_SET_TEMPERATURE: 0xE4,
		COMMAND_TEMPERATURE_SENSOR_TEMPERATURE_REQUEST: 0xE5,
		COMMAND_TEMPERATURE_SENSOR_TEMPERATURE: 0xE6,
		COMMAND_TEMPERATURE_SENSOR_REQUEST_SETTINGS: 0xE7,
		COMMAND_TEMPERATURE_SENSOR_SETTINGS_PART1: 0xE8,
		COMMAND_TEMPERATURE_SENSOR_SETTINGS_PART2: 0xE9,
		COMMAND_TEMPERATURE_SENSOR_STATUS: 0xEA,
		COMMAND_IR_RECIEVER_STATUS: 0xEB,
		COMMAND_BLIND_SWITCH_STATUS: 0xEC,
		COMMAND_INPUT_SWITCH_STATUS: 0xED,
		COMMAND_DIMMER_STATUS: 0xEE,
		COMMAND_MODULE_NAME_REQUEST: 0xEF,
		COMMAND_MODULE_NAME_PART1: 0xF0,
		COMMAND_MODULE_NAME_PART2: 0xF1,
		COMMAND_MODULE_NAME_PART3: 0xF2,
		COMMAND_SET_BACKLIGHT: 0xF3,
		COMMAND_UPDATE_LED_STATUS: 0xF4,
		COMMAND_CLEAR_LED: 0xF5,
		COMMAND_SET_LED: 0xF6,
		COMMAND_SLOW_BLINKING_LED: 0xF7,
		COMMAND_FAST_BLINKING_LED: 0xF8,
		COMMAND_VERY_FAST_BLINKING_LED: 0xF9,
		COMMAND_MODULE_STATUS_REQUEST: 0xFA,
		COMMAND_RELAY_SWITCH_STATUS: 0xFB,
		COMMAND_WRITE_EEPROM_DATA: 0xFC,
		COMMAND_READ_EEPROM_DATA: 0xFD,
		COMMAND_EEPROM_DATA_STATUS: 0xFE,
		COMMAND_MODULE_TYPE: 0xFF,
	},




	getCommandKeyByValue(value) {
		return Object.keys(this.commands).find(key => this.commands[key] === value);
	},

	numberToHexString(value) {
		if (isNaN(value)) {
			return "NaN"
		} else {
			let hex = value.toString(16).toUpperCase();
			if (hex.length < 2) {
				hex = "0" + hex;
			}
			hex = "0x" + hex;
			return hex;
		}
	}

};


module.exports = Object.freeze(constants); // freeze prevents changes by users