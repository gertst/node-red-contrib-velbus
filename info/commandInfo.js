let commandInfo = [
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day Contents Day"
	},
	{
		name: "COMMAND_DATE_STATUS (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_DATE_STATUS (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Channel just pressed",
		databyte3: "Channel just released",
		databyte4: "Channel long pressed"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMBVP1 type (0x33)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memory map version",
		databyte6: "Build year",
		databyte7: "Build week"
	},
	{
		name: "COMMAND_MODULE_STATUS (0xED)",
		id: 0xED,
		databyte1: "COMMAND_MODULE_STATUS (0xED)",
		databyte2: "channel status (1 = pressed / 0 = released)",
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Linked push buttons just pressed (1 = just pressed)",
		databyte3: "Linked push buttons just released (1 = just released)",
		databyte4: "linked push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_SET_REALTIME_DATE (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_SET_REALTIME_DATE (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (FF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (FF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_SET_CLR_LEARN_MODE (0xB5)",
		id: 0xB5,
		databyte1: "COMMAND_SET_CLR_LEARN_MODE (0xB5)",
		databyte2: "Operating mode"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SLOW_BLINK_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINK_LED (0xF7)",
		databyte2: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_FAST_BLINK_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINK_LED (0xF8)",
		databyte2: "LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		id: 0xF9,
		databyte1: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		databyte2: "LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		id: 0xF4,
		databyte1: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
		databyte3: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
		databyte4: "LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: 0x0000’ to 0x01FF’"
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_ENABLE_PROGRAM (0xB2)",
		id: 0xB2,
		databyte1: "COMMAND_ENABLE_PROGRAM (0xB2)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_DISABLE_PROGRAM (0xB1)",
		id: 0xB1,
		databyte1: "COMMAND_DISABLE_PROGRAM (0xB1)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_SELECT_PROGRAM (0xB3)",
		id: 0xB3,
		databyte1: "COMMAND_SELECT_PROGRAM (0xB3)",
		databyte2: "Program mode"
	},
	{
		name: "COMMAND_POWER_UP (0xAB)",
		id: 0xAB,
		databyte1: "COMMAND_POWER_UP (0xAB)",
		databyte2: "module address"
	},
	{
		name: "COMMAND_RX_BUFFER_FULL_STATUS (0x0B)",
		id: 0x0B,
		databyte1: "COMMAND_RX_BUFFER_FULL_STATUS (0x0B)",
	},
	{
		name: "COMMAND_RX_BUFFER_READY_STATUS (0x0C)",
		id: 0x0C,
		databyte1: "COMMAND_RX_BUFFER_READY_STATUS (0x0C)",
	},
	{
		name: "COMMAND_BUS_OFF (0x09)",
		id: 0x09,
		databyte1: "COMMAND_BUS_OFF (0x09)",
	},
	{
		name: "COMMAND_BUS_ACTIVE STATUS (0x0A)",
		id: 0x0A,
		databyte1: "COMMAND_BUS_ACTIVE STATUS (0x0A)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day Contents Day"
	},
	{
		name: "COMMAND_DATE_STATUS (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_DATE_STATUS (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year"
	},
	{
		name: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMBSIG type (0x39) / VMBUSBIP type (0x40) / VMCM3 type (0x3F)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memorymap version",
		databyte6: "Build year",
		databyte7: "Build week",
		databyte8: "Operating mode (bit0 = timer on/off - bit1 = 4/8 channel - bit3 = display labels/ clock)"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_SET_REALTIME_DATE (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_SET_REALTIME_DATE (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		databyte2: "bit0: 0 = disabled / 1 = enabled"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data to write Remark: Wait for ‘data memory byte’ feedback before sending a next command on the velbus. Address range: 0x0000’ to 0x1A03’ Terminate always with a write command at the last memory location ."
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day Contents Day"
	},
	{
		name: "COMMAND_DATE_STATUS (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_DATE_STATUS (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Channel just pressed",
		databyte3: "Channel just released",
		databyte4: "Channel long pressed"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMBRFR8S type (0x30)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memory map version",
		databyte6: "Build year",
		databyte7: "Build week"
	},
	{
		name: "COMMAND_MODULE_STATUS (0xED)",
		id: 0xED,
		databyte1: "COMMAND_MODULE_STATUS (0xED)",
		databyte2: "channel 1 to 8 status (1 = pressed / 0 = released)",
		databyte3: "enabled/disable channel status (1 = enabled / 0 = disabled)",
		databyte4: "normal/inverted channel status (1 = normal / 0 = inverted)",
		databyte5: "locked channel status (0 = unlocked / 1 = locked)",
		databyte6: "disabled channel program status (0 = program enabled / 1 = program disabled)",
		databyte7: "alarm & program selection"
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_CHANNEL_NAME_PART1 (0xF0)",
		databyte2: "channel bit"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_CHANNEL_NAME_PART2 (0xF1)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_CHANNEL_NAME_PART3 (0xF2)",
		databyte2: "channel bit"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_FAST_BLINKING_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINKING_LED (0xF8)",
		databyte2: "LED bit numbers (1 = fast blink LED)",
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Linked push buttons just pressed (1 = just pressed)",
		databyte3: "Linked push buttons just released (1 = just released)",
		databyte4: "linked push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_SET_REALTIME_DATE (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_SET_REALTIME_DATE (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (0xFF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (0xFF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		databyte2: "channel bit"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SLOW_BLINK_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINK_LED (0xF7)",
		databyte2: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_FAST_BLINK_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINK_LED (0xF8)",
		databyte2: "LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		id: 0xF9,
		databyte1: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		databyte2: "LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		id: 0xF4,
		databyte1: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
		databyte3: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
		databyte4: "LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address",
		databyte3: "LOW memory address (0x00...0xFF)",
		databyte4: "memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: 0x0000 to 0x03FF"
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_ENABLE_PROGRAM (0xB2)",
		id: 0xB2,
		databyte1: "COMMAND_ENABLE_PROGRAM (0xB2)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_DISABLE_PROGRAM (0xB1)",
		id: 0xB1,
		databyte1: "COMMAND_DISABLE_PROGRAM (0xB1)",
		databyte2: "channel"
	},
	{
		name: "COMMAND_SELECT_PROGRAM (0xB3)",
		id: 0xB3,
		databyte1: "COMMAND_SELECT_PROGRAM (0xB3)",
		databyte2: "Program mode"
	},
	{
		name: "COMMAND_SET_CLR_LEARN_MODE (0xB5)",
		id: 0xB5,
		databyte1: "COMMAND_SET_CLR_LEARN_MODE (0xB5)",
		databyte2: "Operating mode"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day Contents Day"
	},
	{
		name: "COMMAND_DATE_STATUS (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_DATE_STATUS (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Channel just pressed",
		databyte3: "Channel just released",
		databyte4: "Channel long pressed"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMBPIRO type (0x2C)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memory map version",
		databyte6: "Build year",
		databyte7: "Build week"
	},
	{
		name: "COMMAND_MODULE_STATUS (0xED)",
		id: 0xED,
		databyte1: "COMMAND_MODULE_STATUS (0xED)",
		databyte2: "channel status (1 = pressed / 0 = released)",
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_SENSOR_TEMPERATURE (0xE6)",
		id: 0xE6,
		databyte1: "COMMAND_SENSOR_TEMPERATURE (0xE6)",
		databyte2: "High byte current sensor temperature",
		databyte3: "Low byte current sensor temperature into two’s complement format (resolution 0.0625°)",
		databyte4: "High byte minimum sensor temperature",
		databyte5: "Low byte minimum sensor temperature into two’s complement format (resolution 0.0625°)",
		databyte6: "High byte maximum sensor temperature",
		databyte7: "Low byte maximum sensor temperature into two’s complement format (resolution 0.0625°)",
	},
	{
		name: "COMMAND_SENSOR_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_SENSOR_NAME_PART1 (0xF0)",
		databyte2: "Sensor bit number (‘00000001’ = Sensor 1)",
		databyte3: "Character 1 of the sensor name",
		databyte4: "Character 2 of the sensor name",
		databyte5: "Character 3 of the sensor name",
		databyte6: "Character 4 of the sensor name",
		databyte7: "Character 5 of the sensor name",
		databyte8: "Character 6 of the sensor name"
	},
	{
		name: "COMMAND_SENSOR_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_SENSOR_NAME_PART2 (0xF1)",
		databyte2: "Sensor bit number (‘00000001’ = Sensor 1)",
		databyte3: "Character 7 of the sensor name",
		databyte4: "Character 8 of the sensor name",
		databyte5: "Character 9 of the sensor name",
		databyte6: "Character 10 of the sensor name",
		databyte7: "Character 11 of the sensor name",
		databyte8: "Character 12 of the sensor name"
	},
	{
		name: "COMMAND_SENSOR_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_SENSOR_NAME_PART3 (0xF2)",
		databyte2: "Sensor bit number (‘00000001’ = Sensor 1)",
		databyte3: "Character 13 of the sensor name",
		databyte4: "Character 14 of the sensor name",
		databyte5: "Character 15 of the sensor name",
		databyte6: "Character 16 of the sensor name"
	},
	{
		name: "COMMAND_TEMP_SENSOR_SETTINGS_PART1 (0xE8)",
		id: 0xE8,
		databyte1: "COMMAND_TEMP_SENSOR_SETTINGS_PART1 (0xE8)",
		databyte2: "Calibration offset factor (resolution 0.5°)",
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Linked push buttons just pressed (1 = just pressed)",
		databyte3: "Linked push buttons just released (1 = just released)",
		databyte4: "linked push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_SET_REALTIME_DATE (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_SET_REALTIME_DATE (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (FF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (FF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_LIGHT_VALUE_REQUEST (0xAA)",
		id: 0xAA,
		databyte1: "COMMAND_LIGHT_VALUE_REQUEST (0xAA)",
		databyte2: "Auto send interval time into seconds"
	},
	{
		name: "COMMAND_SET_CLR_LEARN_MODE (0xB5)",
		id: 0xB5,
		databyte1: "COMMAND_SET_CLR_LEARN_MODE (0xB5)",
		databyte2: "Operating mode"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SLOW_BLINK_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINK_LED (0xF7)",
		databyte2: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_FAST_BLINK_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINK_LED (0xF8)",
		databyte2: "LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		id: 0xF9,
		databyte1: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		databyte2: "LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		id: 0xF4,
		databyte1: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
		databyte3: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
		databyte4: "LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: 0x0000’ to 0x01FF’"
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_ENABLE_PROGRAM (0xB2)",
		id: 0xB2,
		databyte1: "COMMAND_ENABLE_PROGRAM (0xB2)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_DISABLE_PROGRAM (0xB1)",
		id: 0xB1,
		databyte1: "COMMAND_DISABLE_PROGRAM (0xB1)",
		databyte2: "channel"
	},
	{
		name: "COMMAND_SELECT_PROGRAM (0xB3)",
		id: 0xB3,
		databyte1: "COMMAND_SELECT_PROGRAM (0xB3)",
		databyte2: "Program mode"
	},
	{
		name: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_SENSOR_TEMP_REQUEST (0xE5)",
		id: 0xE5,
		databyte1: "COMMAND_SENSOR_TEMP_REQUEST (0xE5)",
		databyte2: "Auto send time interval into seconds"
	},
	{
		name: "COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (0xE7)",
		id: 0xE7,
		databyte1: "COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (0xE7)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_SET_SENSOR_ZONE_NUMBER (0xC5)",
		id: 0xC5,
		databyte1: "COMMAND_SET_SENSOR_ZONE_NUMBER (0xC5)",
		databyte2: "Zone number (0= no zone)",
	},
	{
		name: "COMMAND_SET_TEMP (0xE4)",
		id: 0xE4,
		databyte1: "COMMAND_SET_TEMP (0xE4)",
		databyte2: "Pointer to temperature variable (0...20)",
	},
	{
		name: "COMMAND_POWER_UP (0xAB)",
		id: 0xAB,
		databyte1: "COMMAND_POWER_UP (0xAB)",
		databyte2: "module address"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day Contents Day"
	},
	{
		name: "COMMAND_DATE_STATUS (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_DATE_STATUS (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Channel just pressed",
		databyte3: "Channel just released",
		databyte4: "Channel long pressed"
	},
	{
		name: "COMMAND_OUTPUT_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_OUTPUT_STATUS (0x00)",
		databyte2: "Output channel just activated (1 = just activated)",
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "type (0x34 = VMBEL1 / 0x35 = VMBEL2 / 0x36 = VMBEL4)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memory map version",
		databyte6: "Build year",
		databyte7: "Build week",
		databyte8: "Terminator (0 = open / 1 = closed)",
	},
	{
		name: "COMMAND_SUBTYPE (0xB0)",
		id: 0xB0,
		databyte1: "COMMAND_SUBTYPE (0xB0)",
		databyte2: "type (0x34 = VMBEL1 / 0x35 = VMBEL2 / 0x36 = VMBEL4)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Subaddress1 (0xFF’ sub-address disabled)",
		databyte6: "Subaddress2 (0xFF’ sub-address disabled)",
		databyte7: "Subaddress3 (0xFF’ sub-address disabled)",
		databyte8: "Subaddress4 (0xFF’ sub-address disabled)",
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_CHANNEL_NAME_PART1 (0xF0)",
		databyte2: "channel number 1...9 or 18 (channel 9 = temperature sensor, channel 18 = output)",
		databyte3: "Character 1 of the channel name",
		databyte4: "Character 2 of the channel name",
		databyte5: "Character 3 of the channel name",
		databyte6: "Character 4 of the channel name",
		databyte7: "Character 5 of the channel name",
		databyte8: "Character 6 of the channel name"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_CHANNEL_NAME_PART2 (0xF1)",
		databyte2: "Channel number 1...9 or 18 (channel 9 = temperature sensor, channel 18 = output)",
		databyte3: "Character 7 of the channel name",
		databyte4: "Character 8 of the channel name",
		databyte5: "Character 9 of the channel name",
		databyte6: "Character 10 of the channel name",
		databyte7: "Character 11 of the channel name",
		databyte8: "Character 12 of the channel name"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_CHANNEL_NAME_PART3 (0xF2)",
		databyte2: "channel number 1...9 or 18 (channel 9 = temperature sensor, channel 18 = output)",
		databyte3: "Character 13 of the channel name",
		databyte4: "Character 14 of the channel name",
		databyte5: "Character 15 of the channel name",
		databyte6: "Character 16 of the channel name"
	},
	{
		name: "COMMAND_MODULE_STATUS (0xED)",
		id: 0xED,
		databyte1: "COMMAND_MODULE_STATUS (0xED)",
		databyte2: "channel 1 to 8 status (1 = pressed / 0 = released)",
		databyte3: "enabled/disable channel status (1 = enabled / 0 = disabled)",
		databyte4: "open collector locked & temperature sensor"
	},
	{
		name: "COMMAND_TEMP_SENSOR_STATUS (0xEA)",
		id: 0xEA,
		databyte1: "COMMAND_TEMP_SENSOR_STATUS (0xEA)",
		databyte2: "Operating mode"
	},
	{
		name: "COMMAND_SENSOR_TEMPERATURE (0xE6)",
		id: 0xE6,
		databyte1: "COMMAND_SENSOR_TEMPERATURE (0xE6)",
		databyte2: "High byte current sensor temperature",
		databyte3: "Low byte current sensor temperature into two’s complement format (resolution 0.0625°)",
		databyte4: "High byte minimum sensor temperature",
		databyte5: "Low byte minimum sensor temperature into two’s complement format (resolution 0.0625°)",
		databyte6: "High byte maximum sensor temperature",
		databyte7: "Low byte maximum sensor temperature into two’s complement format (resolution 0.0625°)",
	},
	{
		name: "COMMAND_TEMP_SENSOR_SETTINGS_PART1 (0xE8)",
		id: 0xE8,
		databyte1: "COMMAND_TEMP_SENSOR_SETTINGS_PART1 (0xE8)",
		databyte2: "Current temperature set (resolution 0.5°)",
		databyte3: "Comfort temperature set for heating mode (resolution 0.5°)",
		databyte4: "Day temperature set for heating mode (resolution 0.5°)",
		databyte5: "Night temperature set for heating mode (resolution 0.5°)",
		databyte6: "Anti frost temperature set for heating mode (resolution 0.5°)",
		databyte7: "Boost temperature difference set (resolution 0.5°)",
		databyte8: "Hysteresis temperature set"
	},
	{
		name: "COMMAND_TEMP_SENSOR_SETTINGS_PART2 (0xE9)",
		id: 0xE9,
		databyte1: "COMMAND_TEMP_SENSOR_SETTINGS_PART2 (0xE9)",
		databyte2: "Comfort temperature set for cooling mode (resolution 0.5°)",
		databyte3: "Day temperature set for cooling mode (resolution 0.5°)",
		databyte4: "Night temperature set for cooling mode (resolution 0.5°)",
		databyte5: "Safe temperature set for cooling mode (resolution 0.5°)",
		databyte6: "High byte of the default sleep timer",
		databyte7: "Low byte of the default sleep timer into minutes (1 to 65.279min)",
		databyte8: "Default auto send temperature time interval into seconds"
	},
	{
		name: "COMMAND_TEMP_SENSOR_SETTINGS_PART3 (0xC6)",
		id: 0xC6,
		databyte1: "COMMAND_TEMP_SENSOR_SETTINGS_PART3 (0xC6)",
		databyte2: "Temperature alarm 1 setting (resolution 0.5°)",
		databyte3: "Temperature alarm 4 setting (resolution 0.5°)",
		databyte4: "Lower temperature range cool mode (resolution 0.5°)",
		databyte5: "Upper temperature range heat mode (resolution 0.5°)",
		databyte6: "Calibration offset factor (resolution 0.5°)",
	},
	{
		name: "COMMAND_TEMP_SENSOR_SETTINGS_PART4 (0xB9)",
		id: 0xB9,
		databyte1: "COMMAND_TEMP_SENSOR_SETTINGS_PART4 (0xB9)",
		databyte2: "Minimum switching time (0...255s)",
		databyte3: "Pump delayed on time (0...255s)",
		databyte4: "Pump delayed off time (0...255s)",
		databyte5: "Temperature alarm 2 setting (resolution 0.5°)",
		databyte6: "Temperature alarm 3 setting (resolution 0.5°)",
		databyte7: "Lower temperature range heat mode (resolution 0.5°)",
		databyte8: "Upper temperature range cool mode (resolution 0.5°)",
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_FAST_BLINKING_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINKING_LED (0xF8)",
		databyte2: "LED bit numbers (1 = fast blink LED)",
	},
	{
		name: "COMMAND_PROGRAM_STEP_INFO (0xC1)",
		id: 0xC1,
		databyte1: "COMMAND_PROGRAM_STEP_INFO (0xC1)",
		databyte2: "Program step number (1...66 / 255 step not found)",
		databyte3: "Program reference"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Linked push buttons just pressed (1 = just pressed)",
		databyte3: "Linked push buttons just released (1 = just released)",
		databyte4: "linked push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_POWER_UP (0xAB)",
		id: 0xAB,
		databyte1: "COMMAND_POWER_UP (0xAB)",
		databyte2: "module address"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_SET_REALTIME_DATE (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_SET_REALTIME_DATE (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		id: 0xAF,
		databyte1: "COMMAND_SET_DAYLIGHT_SAVING (0xAF)",
		databyte2: "0 =disabled / 1 = enabled"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (0xFF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		id: 0xAE,
		databyte1: "COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)",
		databyte2: "Channel (0xFF)",
		databyte3: "enable/disable flags"
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		databyte2: "channel number 1...9 or 18 (9 for temperature sensor name, 18 for output name)",
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_SLOW_BLINK_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINK_LED (0xF7)",
		databyte2: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_FAST_BLINK_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINK_LED (0xF8)",
		databyte2: "LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		id: 0xF9,
		databyte1: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		databyte2: "LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		id: 0xF4,
		databyte1: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 8)",
		databyte3: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)",
		databyte4: "LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: 0x0000 to 0x0703 Terminate always with a write command at the last memory location."
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Channel number 1...8, 9 or 18 (9 for temperature sensor, 18 for open collector output)",
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Channel number 1...8, 9 or 18 (9 for temperature sensor, 18 for open collector output)",
		databyte3: "high byte of delay time",
		databyte4: "mid byte of delay time",
		databyte5: "low byte of delay time"
	},
	{
		name: "COMMAND_ENABLE_PROGRAM (0xB2)",
		id: 0xB2,
		databyte1: "COMMAND_ENABLE_PROGRAM (0xB2)",
		databyte2: "Channel number 1...8, 9 or 18 (9 for temperature sensor name, 18 for open collector output)",
	},
	{
		name: "COMMAND_DISABLE_PROGRAM (0xB1)",
		id: 0xB1,
		databyte1: "COMMAND_DISABLE_PROGRAM (0xB1)",
		databyte2: "Channel number1...8, 9 or 18 (9 for temperature sensor name, 18 for open collector output)",
		databyte3: "high byte of delay time",
		databyte4: "mid byte of delay time",
		databyte5: "low byte of delay time"
	},
	{
		name: "COMMAND_SELECT_PROGRAM (0xB3)",
		id: 0xB3,
		databyte1: "COMMAND_SELECT_PROGRAM (0xB3)",
		databyte2: "Program mode"
	},
	{
		name: "COMMAND_SENSOR_TEMP_REQUEST (0xE5)",
		id: 0xE5,
		databyte1: "COMMAND_SENSOR_TEMP_REQUEST (0xE5)",
		databyte2: "Auto send time interval into seconds"
	},
	{
		name: "COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (0xE7)",
		id: 0xE7,
		databyte1: "COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (0xE7)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_SET_HEATING_MODE (0xE0)",
		id: 0xE0,
		databyte1: "COMMAND_SET_HEATING_MODE (0xE0)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_SET_COOLING_MODE (0xDF)",
		id: 0xDF,
		databyte1: "COMMAND_SET_COOLING_MODE (0xDF)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_SET_SENSOR_ZONE_NUMBER (0xC5)",
		id: 0xC5,
		databyte1: "COMMAND_SET_SENSOR_ZONE_NUMBER (0xC5)",
		databyte2: "Zone number (0= no zone / 1...7 = valid zone)",
	},
	{
		name: "COMMAND_SET_DEFAULT_SLEEP_TIME (0xE3)",
		id: 0xE3,
		databyte1: "COMMAND_SET_DEFAULT_SLEEP_TIME (0xE3)",
		databyte2: "High byte of the default sleep time",
		databyte3: "Low byte of the default sleep time into minutes"
	},
	{
		name: "COMMAND_SET_TEMP (0xE4)",
		id: 0xE4,
		databyte1: "COMMAND_SET_TEMP (0xE4)",
		databyte2: "Pointer to temperature variable (0...20)",
	},
	{
		name: "COMMAND_SWITCH_TO_COMFORT_MODE (0xDB)",
		id: 0xDB,
		databyte1: "COMMAND_SWITCH_TO_COMFORT_MODE (0xDB)",
		databyte2: "High byte of the sleep time",
		databyte3: "Low byte of the sleep time into minutes"
	},
	{
		name: "COMMAND_SWITCH_TO_DAY_MODE (0xDC)",
		id: 0xDC,
		databyte1: "COMMAND_SWITCH_TO_DAY_MODE (0xDC)",
		databyte2: "High byte of the sleep time",
		databyte3: "Low byte of the sleep time into minutes"
	},
	{
		name: "COMMAND_SWITCH_TO_NIGHT_MODE (0xDD)",
		id: 0xDD,
		databyte1: "COMMAND_SWITCH_TO_NIGHT_MODE (0xDD)",
		databyte2: "High byte of the sleep time",
		databyte3: "Low byte of the sleep time into minutes"
	},
	{
		name: "COMMAND_SWITCH_TO_SAFE_MODE (0xDE)",
		id: 0xDE,
		databyte1: "COMMAND_SWITCH_TO_SAFE_MODE (0xDE)",
		databyte7: "High byte of the sleep time",
		databyte8: "Low byte of the sleep time into minutes"
	},
	{
		name: "COMMAND_SWITCH_RELAY_OFF (0x01)",
		id: 0x01,
		databyte1: "COMMAND_SWITCH_RELAY_OFF (0x01)",
		databyte2: "channel bit = don’t care"
	},
	{
		name: "COMMAND_SWITCH_RELAY_ON (0x02)",
		id: 0x02,
		databyte1: "COMMAND_SWITCH_RELAY_ON (0x02)",
		databyte2: "channel bit = don’t care"
	},
	{
		name: "COMMAND_START_RELAY_TIMER (0x03)",
		id: 0x03,
		databyte1: "COMMAND_START_RELAY_TIMER (0x03)",
		databyte2: "channel bit = don’t care",
		databyte3: "high byte of delay time",
		databyte4: "mid byte of delay time",
		databyte5: "low byte of delay time"
	},
	{
		name: "COMMAND_SET_PB_BACKLIGHT (0xD4)",
		id: 0xD4,
		databyte1: "COMMAND_SET_PB_BACKLIGHT (0xD4)",
		databyte2: "custom palette index (0...31)",
		databyte3: "white/saturation"
	},
	{
		name: "COMMAND_SET_PB_BACKLIGHT (0xD4)",
		id: 0xD4,
		databyte1: "COMMAND_SET_PB_BACKLIGHT (0xD4)",
		databyte2: "background/feedback color"
	},
	{
		name: "COMMAND_READ_PROGRAM_STEP (0xC0)",
		id: 0xC0,
		databyte1: "COMMAND_READ_PROGRAM_STEP (0xC0)",
		databyte2: "Start program step number (1...66)",
		databyte3: "Program group number (1...3)",
		databyte4: "Channel number1...8, 9 or 18 (9 for temperature sensor name, 18 for open collector output)",
		databyte5: "Search direction (1 = search for next matched step / 0 = search for previous matched program step)",
	},
	{
		name: "COMMAND_WRITE_PROGRAM_STEP (0xC2)",
		id: 0xC2,
		databyte1: "COMMAND_WRITE_PROGRAM_STEP (0xC2)",
		databyte2: "Program step number (1...66)",
		databyte3: "Program reference"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Dimmer channel just switched on (1 = just pressed / switched on)",
		databyte3: "Dimmer channel just switched off (1 = just released / switched off)",
		databyte4: "0"
	},
	{
		name: "COMMAND_SLIDER_STATUS (0x0F)",
		id: 0x0F,
		databyte1: "COMMAND_SLIDER_STATUS (0x0F)",
		databyte2: "Dimmer slider channel (0x01)",
		databyte3: "Dimmer value 0...100% (slider status)",
		databyte4: "0x00’"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_FAST_BLINKING_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINKING_LED (0xF8)",
		databyte2: "LED bit numbers (1 = fast blink LED)",
	},
	{
		name: "COMMAND_DIMMERCONTROLLER_STATUS (0xB8)",
		id: 0xB8,
		databyte1: "COMMAND_DIMMERCONTROLLER_STATUS (0xB8)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Dimmer status"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMBDMI type (0x15)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memorymap version",
		databyte6: "Build year",
		databyte7: "Build week"
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_DIMMER_NAME_PART1 (0xF0)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Character 1 of the dimmer name",
		databyte4: "Character 2 of the dimmer name",
		databyte5: "Character 3 of the dimmer name",
		databyte6: "Character 4 of the dimmer name",
		databyte7: "Character 5 of the dimmer name",
		databyte8: "Character 6 of the dimmer name"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_DIMMER_NAME_PART2 (0xF1)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Character 7 of the dimmer name",
		databyte4: "Character 8 of the dimmer name",
		databyte5: "Character 9 of the dimmer name",
		databyte6: "Character 10 of the dimmer name",
		databyte7: "Character 11 of the dimmer name",
		databyte8: "Character 12 of the dimmer name"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_DIMMER_NAME_PART3 (0xF2)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Character 13 of the dimmer name",
		databyte4: "Character 14 of the dimmer name",
		databyte5: "Character 15 of the dimmer name",
		databyte6: "Character 16 of the dimmer name"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address (0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Push buttons just pressed (1 = just pressed)",
		databyte3: "Push buttons just released (1 = just released)",
		databyte4: "Push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_SLIDER_STATUS (0x0F)",
		id: 0x0F,
		databyte1: "COMMAND_SLIDER_STATUS (0x0F)",
		databyte2: "Slider channel",
		databyte3: "Slider status (0...100%)",
		databyte4: "don’t care"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED)",
	},
	{
		name: "COMMAND_SET_DIMVALUE (0x07)",
		id: 0x07,
		databyte1: "COMMAND_SET_DIMVALUE (0x07)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Dimvalue (0 to 100%)",
		databyte4: "high byte of dimspeed",
		databyte5: "low byte of dimspeed"
	},
	{
		name: "COMMAND_RESTORE_LAST_DIMVALUE (0x11)",
		id: 0x11,
		databyte1: "COMMAND_RESTORE_LAST_DIMVALUE (0x11)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Don’t care",
		databyte4: "high byte of dimspeed",
		databyte5: "low byte of dimspeed"
	},
	{
		name: "COMMAND_STOP_DIMMING (0x10)",
		id: 0x10,
		databyte1: "COMMAND_STOP_DIMMING (0x10)",
		databyte2: "Dimmer channel (0x01)",
	},
	{
		name: "COMMAND_START_DIMMER_TIMER (0x08)",
		id: 0x08,
		databyte1: "COMMAND_START_DIMMER_TIMER (0x08)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "high byte of time-out time",
		databyte4: "mid byte of time-out time",
		databyte5: "low byte of time-out time"
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_FORCED_ON (0x14)",
		id: 0x14,
		databyte1: "COMMAND_FORCED_ON (0x14)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_FORCED_ON (0x15)",
		id: 0x15,
		databyte1: "COMMAND_CANCEL_FORCED_ON (0x15)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_INHIBIT (0x16)",
		id: 0x16,
		databyte1: "COMMAND_INHIBIT (0x16)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_INHIBIT (0x17)",
		id: 0x17,
		databyte1: "COMMAND_CANCEL_INHIBIT (0x17)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_DIMMER_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_DIMMER_STATUS_REQUEST (0xFA)",
		databyte2: "Dimmer channel (0x01)",
	},
	{
		name: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_DIMMER_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_DIMMER_NAME_REQUEST (0xEF)",
		databyte2: "Dimmer channel (0x01)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address (0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address (0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data to write Remark: Wait at least 10ms for sending a next command on the velbus."
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Dimmer channel just switched on (1 = just pressed / switched on)",
		databyte3: "Dimmer channel just switched off (1 = just released / switched off)",
		databyte4: "0"
	},
	{
		name: "COMMAND_SLIDER_STATUS (0x0F)",
		id: 0x0F,
		databyte1: "COMMAND_SLIDER_STATUS (0x0F)",
		databyte2: "Dimmer slider channel (0x01)",
		databyte3: "Dimmer value 0...100% (slider status)",
		databyte4: "0x00’"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_FAST_BLINKING_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINKING_LED (0xF8)",
		databyte2: "LED bit numbers (1 = fast blink LED)",
	},
	{
		name: "COMMAND_DIMMERCONTROLLER_STATUS (0xB8)",
		id: 0xB8,
		databyte1: "COMMAND_DIMMERCONTROLLER_STATUS (0xB8)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Dimmer status"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMBDMI type (0x2F)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memorymap version",
		databyte6: "Build year",
		databyte7: "Build week"
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_DIMMER_NAME_PART1 (0xF0)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Character 1 of the dimmer name",
		databyte4: "Character 2 of the dimmer name",
		databyte5: "Character 3 of the dimmer name",
		databyte6: "Character 4 of the dimmer name",
		databyte7: "Character 5 of the dimmer name",
		databyte8: "Character 6 of the dimmer name"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_DIMMER_NAME_PART2 (0xF1)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Character 7 of the dimmer name",
		databyte4: "Character 8 of the dimmer name",
		databyte5: "Character 9 of the dimmer name",
		databyte6: "Character 10 of the dimmer name",
		databyte7: "Character 11 of the dimmer name",
		databyte8: "Character 12 of the dimmer name"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_DIMMER_NAME_PART3 (0xF2)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Character 13 of the dimmer name",
		databyte4: "Character 14 of the dimmer name",
		databyte5: "Character 15 of the dimmer name",
		databyte6: "Character 16 of the dimmer name"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address (0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Push buttons just pressed (1 = just pressed)",
		databyte3: "Push buttons just released (1 = just released)",
		databyte4: "Push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_SLIDER_STATUS (0x0F)",
		id: 0x0F,
		databyte1: "COMMAND_SLIDER_STATUS (0x0F)",
		databyte2: "Slider channel",
		databyte3: "Slider status (0...100%)",
		databyte4: "don’t care"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED)",
	},
	{
		name: "COMMAND_SET_DIMVALUE (0x07)",
		id: 0x07,
		databyte1: "COMMAND_SET_DIMVALUE (0x07)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Dimvalue (0 to 100%)",
		databyte4: "high byte of dimspeed",
		databyte5: "low byte of dimspeed"
	},
	{
		name: "COMMAND_RESTORE_LAST_DIMVALUE (0x11)",
		id: 0x11,
		databyte1: "COMMAND_RESTORE_LAST_DIMVALUE (0x11)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "Don’t care",
		databyte4: "high byte of dimspeed",
		databyte5: "low byte of dimspeed"
	},
	{
		name: "COMMAND_STOP_DIMMING (0x10)",
		id: 0x10,
		databyte1: "COMMAND_STOP_DIMMING (0x10)",
		databyte2: "Dimmer channel (0x01)",
	},
	{
		name: "COMMAND_START_DIMMER_TIMER (0x08)",
		id: 0x08,
		databyte1: "COMMAND_START_DIMMER_TIMER (0x08)",
		databyte2: "Dimmer channel (0x01)",
		databyte3: "high byte of time-out time",
		databyte4: "mid byte of time-out time",
		databyte5: "low byte of time-out time"
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_FORCED_ON (0x14)",
		id: 0x14,
		databyte1: "COMMAND_FORCED_ON (0x14)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_FORCED_ON (0x15)",
		id: 0x15,
		databyte1: "COMMAND_CANCEL_FORCED_ON (0x15)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_INHIBIT (0x16)",
		id: 0x16,
		databyte1: "COMMAND_INHIBIT (0x16)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_INHIBIT (0x17)",
		id: 0x17,
		databyte1: "COMMAND_CANCEL_INHIBIT (0x17)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_DIMMER_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_DIMMER_STATUS_REQUEST (0xFA)",
		databyte2: "Dimmer channel (0x01)",
	},
	{
		name: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_DIMMER_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_DIMMER_NAME_REQUEST (0xEF)",
		databyte2: "Dimmer channel (0x01)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address (0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address (0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data to write Remark: Wait at least 10ms for sending a next command on the velbus."
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Local dim push buttons just pressed / dimmer just switched on (1 = just pressed / switched on)",
		databyte3: "Local dim push buttons just released / dimmer just switched off (1 = just released / switched off)",
		databyte4: "Local dim push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_SLIDER_STATUS (0x0F)",
		id: 0x0F,
		databyte1: "COMMAND_SLIDER_STATUS (0x0F)",
		databyte2: "Dimmer slider channel (0x01)",
		databyte3: "Dimmer value 0...100% (slider status)",
		databyte4: "0x00’ (Slider channel not long pressed)",
	},
	{
		name: "COMMAND_UPDATE_LED (0xF4)",
		id: 0xF4,
		databyte1: "COMMAND_UPDATE_LED (0xF4)",
		databyte2: "LED continuous on status (1 = LED on)",
		databyte3: "LED slow blinking status (1 = LED slow blinking)",
		databyte4: "LED fast blinking status (1 = LED fast blinking)",
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_FAST_BLINKING_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINKING_LED (0xF8)",
		databyte2: "LED bit numbers (1 = fast blink LED)",
	},
	{
		name: "COMMAND_VERYFAST_BLINKING_LED (0xF9)",
		id: 0xF9,
		databyte1: "COMMAND_VERYFAST_BLINKING_LED (0xF9)",
		databyte2: "LED bit numbers (1 = very fast blink LED)",
	},
	{
		name: "COMMAND_DIMMER_STATUS (0xEE)",
		id: 0xEE,
		databyte1: "COMMAND_DIMMER_STATUS (0xEE)",
		databyte2: "Mode setting"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "DIMMER_MODULE_FOR_ELECTRONIC_TRANSFORMER_TYPE (0x14)",
		databyte3: "Mode setting"
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day Contents Day"
	},
	{
		name: "COMMAND_DATE_STATUS (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_DATE_STATUS (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "channel just pressed",
		databyte3: "channel just released",
		databyte4: "channel long pressed"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMB4RF type (0x1A)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memorymap version",
		databyte6: "Build year",
		databyte7: "Build week"
	},
	{
		name: "COMMAND_MODULE_STATUS (0xB4)",
		id: 0xB4,
		databyte1: "COMMAND_MODULE_STATUS (0xB4)",
		databyte2: "channel 1 to 4 status (1 = pressed / 0 = released)",
		databyte3: "enabled/disable channel status (1 = enabled / 0 = disabled)",
		databyte4: "learn transmiter mode (1 = learn / 0 = normal)",
		databyte5: "locked channel status (0 = unlocked / 1 = locked)",
		databyte6: "disabled channel program status (0 = program enabled / 1 = program disabled)",
		databyte7: "alarm & program selection"
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_CHANNEL_NAME_PART1 (0xF0)",
		databyte2: "Channel"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_CHANNEL_NAME_PART2 (0xF1)",
		databyte2: "Channel"
	},
	{
		name: "COMMAND_CHANNEL_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_CHANNEL_NAME_PART3 (0xF2)",
		databyte2: "Channel"
	},
	{
		name: "COMMAND_RF_CODE_STATUS (0xB6)",
		id: 0xB6,
		databyte1: "COMMAND_RF_CODE_STATUS (0xB6)",
		databyte2: "Code info"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Linked push buttons just pressed (1 = just pressed)",
		databyte3: "Linked push buttons just released (1 = just released)",
		databyte4: "linked push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_SET_REALTIME_CLOCK (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_SET_REALTIME_DATE (0xB7)",
		id: 0xB7,
		databyte1: "COMMAND_SET_REALTIME_DATE (0xB7)",
		databyte2: "Day (1...31)",
		databyte3: "Month (1...12)",
		databyte4: "High byte of Year",
		databyte5: "Low byte of Year"
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		id: 0xC3,
		databyte1: "COMMAND_SET_ALARM_CLOCK (0xC3)",
		databyte2: "Alarm number (1 or 2)",
		databyte3: "Wake up hour (0...23)",
		databyte4: "Wake up minute (0...59)",
		databyte5: "Go to bed hour (0...23)",
		databyte6: "Go to bed minute (0...59)",
		databyte7: "Clock alarm enable flag (0 = disabled / 1 = enabled)",
	},
	{
		name: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		databyte2: "don’t care"
	},
	{
		name: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_CHANNEL_NAME_REQUEST (0xEF)",
		databyte2: "Channel"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED of channel 1 to 4)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 4)",
	},
	{
		name: "COMMAND_SLOW_BLINK_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINK_LED (0xF7)",
		databyte2: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 4)",
	},
	{
		name: "COMMAND_FAST_BLINK_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINK_LED (0xF8)",
		databyte2: "LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 4)",
	},
	{
		name: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		id: 0xF9,
		databyte1: "COMMAND_VERY_FAST_BLINK_LED (0xF9)",
		databyte2: "LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 4)",
	},
	{
		name: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		id: 0xF4,
		databyte1: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		databyte2: "LEDs to set (a one sets the corresponding LED of channel 1 to 4)",
		databyte3: "LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 4)",
		databyte4: "LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 4)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: 0x0000’ to 0x02FF’"
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_SET_CLR_LEARN_CODE (0xB5)",
		id: 0xB5,
		databyte1: "COMMAND_SET_CLR_LEARN_CODE (0xB5)",
		databyte2: "Operating mode"
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_ENABLE_PROGRAM (0xB2)",
		id: 0xB2,
		databyte1: "COMMAND_ENABLE_PROGRAM (0xB2)",
		databyte2: "Channel bit"
	},
	{
		name: "COMMAND_DISABLE_PROGRAM (0xB1)",
		id: 0xB1,
		databyte1: "COMMAND_DISABLE_PROGRAM (0xB1)",
		databyte2: "channel"
	},
	{
		name: "COMMAND_SELECT_PROGRAM (0xB3)",
		id: 0xB3,
		databyte1: "COMMAND_SELECT_PROGRAM (0xB3)",
		databyte2: "Program mode"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Push buttons just pressed (1 = just pressed)",
		databyte3: "Push buttons just released (1 = just released)",
		databyte4: "Push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_MODULE_STATUS (0xED)",
		id: 0xED,
		databyte1: "COMMAND_MODULE_STATUS (0xED)",
		databyte2: "Input switches status (1 = closed)",
		databyte3: "LEDs continuous on status (1 = LED on)",
		databyte4: "LEDs slow blinking status (1 = LED slow blinking)",
		databyte5: "LEDs fast blinking status (1 = LED fast blinking)",
		databyte6: "push button timer enable bits (1 = timer enabled)",
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "PUSHBUTTON_TIMER_MODULE (0x0B)",
		databyte3: "LEDs continuous on status (1 = LED on)",
		databyte4: "LEDs slow blinking status (1 = LED slow blinking)",
		databyte5: "LEDs fast blinking status (1 = LED fast blinking)",
		databyte6: "Build year",
		databyte7: "Build week",
		databyte8: "Operating mode (bit0 = timer on/off - bit1 = 4/8 channel - bit3 = display labels/ clock)",
	},
	{
		name: "COMMAND_PUSH_BUTTON_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_PUSH_BUTTON_NAME_PART1 (0xF0)",
		databyte2: "Push button bit number (‘00000001’ = Push button 1 ... ‘10000000’ = Push button 8)",
		databyte3: "Character 1 of the push button name",
		databyte4: "Character 2 of the push button name",
		databyte5: "Character 3 of the push button name",
		databyte6: "Character 4 of the push button name",
		databyte7: "Character 5 of the push button name",
		databyte8: "Character 6 of the push button name"
	},
	{
		name: "COMMAND_PUSH_BUTTON_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_PUSH_BUTTON_NAME_PART2 (0xF1)",
		databyte2: "Push button bit number (‘00000001’ = Push button 1 ... ‘10000000’ = Push button 8)",
		databyte3: "Character 7 of the push button name",
		databyte4: "Character 8 of the push button name",
		databyte5: "Character 9 of the push button name",
		databyte6: "Character 10 of the push button name",
		databyte7: "Character 11 of the push button name",
		databyte8: "Character 12 of the push button name"
	},
	{
		name: "COMMAND_PUSH_BUTTON_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_PUSH_BUTTON_NAME_PART3 (0xF2)",
		databyte2: "Push button bit number (‘00000001’ = Push button 1 / ‘10000000’ = Push button 8)",
		databyte3: "Character 13 of the push button name",
		databyte4: "Character 14 of the push button name",
		databyte5: "Character 15 of the push button name",
		databyte6: "0xFF’"
	},
	{
		name: "COMMAND_LCD_LINE_TEXT_PART1 (0xCD)",
		id: 0xCD,
		databyte1: "COMMAND_LCD_LINE_TEXT_PART1 (0xCD)",
		databyte2: "lcd line bit number (‘00000001’ = line 1 ... ‘00001000’ = line 4)",
		databyte3: "Character 1 of the lcd line text",
		databyte4: "Character 2 of the lcd line text",
		databyte5: "Character 3 of the lcd line text",
		databyte6: "Character 4 of the lcd line text",
		databyte7: "Character 5 of the lcd line text",
		databyte8: "Character 6 of the lcd line text"
	},
	{
		name: "COMMAND_LCD_LINE_TEXT_PART2 (0xCE)",
		id: 0xCE,
		databyte1: "COMMAND_LCD_LINE_TEXT_PART2 (0xCE)",
		databyte2: "lcd line bit number (‘00000001’ = line 1 ... ‘00001000’ = line 4)",
		databyte3: "Character 7 of the lcd line text",
		databyte4: "Character 8 of the lcd line text",
		databyte5: "Character 9 of the lcd line text",
		databyte6: "Character 10 of the lcd line text",
		databyte7: "Character 11 of the lcd line text",
		databyte8: "Character 12 of the lcd line text"
	},
	{
		name: "COMMAND_LCD_LINE_TEXT_PART3 (0xCF)",
		id: 0xCF,
		databyte1: "COMMAND_LCD_LINE_TEXT_PART3 (0xCF)",
		databyte2: "lcd line bit number (‘00000001’ = line 1 ... ‘00001000’ = line 4)",
		databyte3: "Character 13 of the lcd line text",
		databyte4: "Character 14 of the lcd line text",
		databyte5: "Character 15 of the lcd line text",
		databyte6: "Character 15 of the lcd line text"
	},
	{
		name: "COMMAND_BACKLIGHT_STATUS (0xD6)",
		id: 0xD6,
		databyte1: "COMMAND_BACKLIGHT_STATUS (0xD6)",
		databyte2: "Backlight/contrast status (bit7&6: lcd backlight - bit5&4: button backlight - bit3...0: lcd contrast)",
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address (must be 0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block (must be 0x00)",
		databyte3: "LOW start address of memory block (0x00’...0xFC)",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		id: 0xF4,
		databyte1: "COMMAND_UPDATE_LED_STATUS (0xF4)",
		databyte2: "LED continuous on status (1 = LED on)",
		databyte3: "LED slow blinking status (1 = LED slow blinking)",
		databyte4: "LED fast blinking status (1 = LED fast blinking)",
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LEDs to set (a one sets the corresponding LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LEDs to blink slow (1 = slow blinking)",
	},
	{
		name: "COMMAND_FAST_BLINKING_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINKING_LED (0xF8)",
		databyte2: "LEDs to blink fast (1 = fast blinking)",
	},
	{
		name: "COMMAND_VERYFAST_BLINKING_LED (0xF9)",
		id: 0xF9,
		databyte1: "COMMAND_VERYFAST_BLINKING_LED (0xF9)",
		databyte2: "LEDs to clear (1 = very fast blinking)",
	},
	{
		name: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_MODULE_STATUS_REQUEST (0xFA)",
		databyte2: "Input channel bit numbers (B‘11111111)",
	},
	{
		name: "COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_PUSH_BUTTON_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_PUSH_BUTTON_NAME_REQUEST (0xEF)",
		databyte2: "Push button number (B‘00000001’ = Push button 1 ... B‘10000000’ = Push button 8)",
	},
	{
		name: "COMMAND_LCD_LINE_TEXT_REQUEST (0xD0)",
		id: 0xD0,
		databyte1: "COMMAND_LCD_LINE_TEXT_REQUEST (0xD0)",
		databyte2: "Push button number (B‘00000001’ = line 1 ... B‘00001000’ = line 4)",
	},
	{
		name: "COMMAND_BACKLIGHT_CONTRAST_STATUS_REQUEST (0xD5)",
		id: 0xD5,
		databyte1: "COMMAND_BACKLIGHT_CONTRAST_STATUS_REQUEST (0xD5)",
	},
	{
		name: "COMMAND_SET_LCD_BACKLIGHT (0xF3)",
		id: 0xF3,
		databyte1: "COMMAND_SET_LCD_BACKLIGHT (0xF3)",
		databyte2: "Backlight value (0x00’ = off, 0x01’ = dim low, 0x02’ = dim high, 0x03’ = max)",
	},
	{
		name: "COMMAND_RETURN_TO_DEFAULT_LCD_BACKLIGHT (0xD2)",
		id: 0xD2,
		databyte1: "COMMAND_RETURN_TO_DEFAULT_LCD_BACKLIGHT (0xD2)",
	},
	{
		name: "COMMAND_SET_PUSH_BUTTON_BACKLIGHT (0xD4)",
		id: 0xD4,
		databyte1: "COMMAND_SET_PUSH_BUTTON_BACKLIGHT (0xD4)",
		databyte2: "Backlight value (0x00’ = off, 0x01’ = dim low, 0x02’ = dim high, 0x03’ = max)",
	},
	{
		name: "COMMAND_RETURN_TO_DEFAULT_PUSH_BUTTON_BACKLIGHT (0xD3)",
		id: 0xD3,
		databyte1: "COMMAND_RETURN_TO_DEFAULT_PUSH_BUTTON_BACKLIGHT (0xD3)",
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address (must be 0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address (must be 0x00)",
		databyte3: "LOW memory address (0x00’...0xFF)",
		databyte4: "memory data to write"
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address (must be 0x00)",
		databyte3: "LOW memory address (0x00’...0xFC)",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
		id: 0xD7,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)",
	},
	{
		name: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		id: 0xD8,
		databyte1: "COMMAND_REALTIME_CLOCK_STATUS (0xD8)",
		databyte2: "Day of week"
	},
	{
		name: "COMMAND_ENABLE_TIMER_CHANNELS (0xD1)",
		id: 0xD1,
		databyte1: "COMMAND_ENABLE_TIMER_CHANNELS (0xD1)",
		databyte2: "Push button channels ( a one enables and a zero disables the timer for a push button)",
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Dimmer channel just switched on (1 = just pressed / switched on)",
		databyte3: "Dimmer channel just switched off (1 = just released / switched off)",
		databyte4: "0"
	},
	{
		name: "COMMAND_SLIDER_STATUS (0x0F)",
		id: 0x0F,
		databyte1: "COMMAND_SLIDER_STATUS (0x0F)",
		databyte2: "Dimmer slider channel"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LED bit numbers (1 = clear LED)",
	},
	{
		name: "COMMAND_SET_LED (0xF6)",
		id: 0xF6,
		databyte1: "COMMAND_SET_LED (0xF6)",
		databyte2: "LED bit numbers (1 = set LED)",
	},
	{
		name: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		id: 0xF7,
		databyte1: "COMMAND_SLOW_BLINKING_LED (0xF7)",
		databyte2: "LED bit numbers (1 = slow blink LED)",
	},
	{
		name: "COMMAND_FAST_BLINKING_LED (0xF8)",
		id: 0xF8,
		databyte1: "COMMAND_FAST_BLINKING_LED (0xF8)",
		databyte2: "LED bit numbers (1 = fast blink LED)",
	},
	{
		name: "COMMAND_DIMMERCONTROLLER_STATUS (0xB8)",
		id: 0xB8,
		databyte1: "COMMAND_DIMMERCONTROLLER_STATUS (0xB8)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_MODULE_TYPE (0xFF)",
		id: 0xFF,
		databyte1: "COMMAND_MODULE_TYPE (0xFF)",
		databyte2: "VMB4DC type (0x12)",
		databyte3: "High byte of serial number",
		databyte4: "Low byte of serial number",
		databyte5: "Memory map version",
		databyte6: "Build year",
		databyte7: "Build week"
	},
	{
		name: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		id: 0xDA,
		databyte1: "COMMAND_BUSERROR_COUNTER_STATUS (0xDA)",
		databyte2: "Transmit error counter",
		databyte3: "Receive error counter",
		databyte4: "Bus off counter"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART1 (0xF0)",
		id: 0xF0,
		databyte1: "COMMAND_DIMMER_NAME_PART1 (0xF0)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART2 (0xF1)",
		id: 0xF1,
		databyte1: "COMMAND_DIMMER_NAME_PART2 (0xF1)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_DIMMER_NAME_PART3 (0xF2)",
		id: 0xF2,
		databyte1: "COMMAND_DIMMER_NAME_PART3 (0xF2)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_MEMORY_DATA (0xFE)",
		id: 0xFE,
		databyte1: "COMMAND_MEMORY_DATA (0xFE)",
		databyte2: "High memory address"
	},
	{
		name: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		id: 0xCC,
		databyte1: "COMMAND_MEMORY_DATA_BLOCK (0xCC)",
		databyte2: "High start address of memory block",
		databyte3: "LOW start address of memory block",
		databyte4: "memory data1",
		databyte5: "memory data2",
		databyte6: "memory data3",
		databyte7: "memory data4"
	},
	{
		name: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		id: 0x00,
		databyte1: "COMMAND_PUSH_BUTTON_STATUS (0x00)",
		databyte2: "Push buttons just pressed (1 = just pressed)",
		databyte3: "Push buttons just released (1 = just released)",
		databyte4: "Push buttons long pressed (1 = longer than 0.85s pressed)",
	},
	{
		name: "COMMAND_SLIDER_STATUS (0x0F)",
		id: 0x0F,
		databyte1: "COMMAND_SLIDER_STATUS (0x0F)",
		databyte2: "Slider channel",
		databyte3: "Slider status (0...100%)",
		databyte4: "don’t care"
	},
	{
		name: "COMMAND_CLEAR_LED (0xF5)",
		id: 0xF5,
		databyte1: "COMMAND_CLEAR_LED (0xF5)",
		databyte2: "LEDs to clear (a one clears the corresponding LED)",
	},
	{
		name: "COMMAND_SET_DIMVALUE (0x07)",
		id: 0x07,
		databyte1: "COMMAND_SET_DIMVALUE (0x07)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_RESTORE_LAST_DIMVALUE (0x11)",
		id: 0x11,
		databyte1: "COMMAND_RESTORE_LAST_DIMVALUE (0x11)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_STOP_DIMMING (0x10)",
		id: 0x10,
		databyte1: "COMMAND_STOP_DIMMING (0x10)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_START_DIMMER_TIMER (0x08)",
		id: 0x08,
		databyte1: "COMMAND_START_DIMMER_TIMER (0x08)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_FORCED_OFF (0x12)",
		id: 0x12,
		databyte1: "COMMAND_FORCED_OFF (0x12)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		id: 0x13,
		databyte1: "COMMAND_CANCEL_FORCED_OFF (0x13)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_FORCED_ON (0x14)",
		id: 0x14,
		databyte1: "COMMAND_FORCED_ON (0x14)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_FORCED_ON (0x15)",
		id: 0x15,
		databyte1: "COMMAND_CANCEL_FORCED_ON (0x15)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_INHIBIT (0x16)",
		id: 0x16,
		databyte1: "COMMAND_INHIBIT (0x16)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_CANCEL_INHIBIT (017)",
		id: 017,
		databyte1: "COMMAND_CANCEL_INHIBIT (017)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_DIMMER_STATUS_REQUEST (0xFA)",
		id: 0xFA,
		databyte1: "COMMAND_DIMMER_STATUS_REQUEST (0xFA)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
		id: 0xD9,
		databyte1: "COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)",
	},
	{
		name: "COMMAND_DIMMER_NAME_REQUEST (0xEF)",
		id: 0xEF,
		databyte1: "COMMAND_DIMMER_NAME_REQUEST (0xEF)",
		databyte2: "Dimmer channel"
	},
	{
		name: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		id: 0xFD,
		databyte1: "COMMAND_READ_DATA_FROM_MEMORY (0xFD)",
		databyte2: "High memory address"
	},
	{
		name: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
		id: 0xCB,
		databyte1: "COMMAND_MEMORY_DUMP_REQUEST (0xCB)",
	},
	{
		name: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		id: 0xC9,
		databyte1: "COMMAND_READ_MEMORY_BLOCK (0xC9)",
		databyte2: "High memory address",
		databyte3: "LOW memory address"
	},
	{
		name: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		id: 0xFC,
		databyte1: "COMMAND_WRITE_DATA_TO_MEMORY (0xFC)",
		databyte2: "High memory address"
	},
	{
		name: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		id: 0xCA,
		databyte1: "COMMAND_WRITE_MEMORY_BLOCK (0xCA)",
		databyte2: "High memory address",
		databyte3: "LOW memory address",
		databyte4: "memory databyte1 to write",
		databyte5: "memory databyte2 to write",
		databyte6: "memory databyte3 to write",
		databyte7: "memory databyte4 to write"
	}
];

module.exports = Object.freeze(commandInfo); // freeze prevents changes by users