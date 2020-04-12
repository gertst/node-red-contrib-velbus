
### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_REALTIME_CLOCK_STATUS (H’D8’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (H’D8’) 
- DATABYTE2 = Day Contents Day

### COMMAND_DATE_STATUS (H’B7’)
- DATABYTE1 = COMMAND_DATE_STATUS (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_DAYLIGHT_SAVING_STATUS (H’AF’)
- DATABYTE1 = COMMAND_DAYLIGHT_SAVING_STATUS (H’AF’) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Channel just pressed 
- DATABYTE3 = Channel just released 
- DATABYTE4 = Channel long pressed

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = VMBVP1 type (H’33’) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memory map version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week

### COMMAND_MODULE_STATUS (H’ED’)
- DATABYTE1 = COMMAND_MODULE_STATUS (H’ED’) 
- DATABYTE2 = channel status (1 = pressed / 0 = released)

### COMMAND_BUSERROR_COUNTER_STATUS (H’DA’)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (H’DA’) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_MEMORY_DATA (H’FE’)
- DATABYTE1 = COMMAND_MEMORY_DATA (H’FE’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (H’CC’)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (H’CC’) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (H’F7’) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Linked push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Linked push buttons just released (1 = just released) 
- DATABYTE4 = linked push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_SET_REALTIME_CLOCK (H’D8’)
- DATABYTE1 = COMMAND_SET_REALTIME_CLOCK (H’D8’) 
- DATABYTE2 = Day of week

### COMMAND_SET_REALTIME_DATE (H’B7’)
- DATABYTE1 = COMMAND_SET_REALTIME_DATE (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_SET_DAYLIGHT_SAVING (H’AF’)
- DATABYTE1 = COMMAND_SET_DAYLIGHT_SAVING (H’AF’) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’) 
- DATABYTE2 = Channel (FF) 
- DATABYTE3 = enable/disable flags

### COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’) 
- DATABYTE2 = Channel (FF) 
- DATABYTE3 = enable/disable flags

### COMMAND_SET_ALARM_CLOCK (H’C3’)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (H’C3’) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_SET_ALARM_CLOCK (H’C3’)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (H’C3’) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_MODULE_STATUS_REQUEST (H’FA’)
- DATABYTE1 = COMMAND_MODULE_STATUS_REQUEST (H’FA’) 
- DATABYTE2 = don’t care

### COMMAND_SET_CLR_LEARN_MODE (H’B5’)
- DATABYTE1 = COMMAND_SET_CLR_LEARN_MODE (H’B5’) 
- DATABYTE2 = Operating mode

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED of channel 1 to 8)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8)

### COMMAND_SLOW_BLINK_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINK_LED (H’F7’) 
- DATABYTE2 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)

### COMMAND_FAST_BLINK_LED (H’F8’)
- DATABYTE1 = COMMAND_FAST_BLINK_LED (H’F8’) 
- DATABYTE2 = LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)

### COMMAND_VERY_FAST_BLINK_LED (H’F9’)
- DATABYTE1 = COMMAND_VERY_FAST_BLINK_LED (H’F9’) 
- DATABYTE2 = LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_UPDATE_LED_STATUS (H’F4’)
- DATABYTE1 = COMMAND_UPDATE_LED_STATUS (H’F4’) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8) 
- DATABYTE3 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8) 
- DATABYTE4 = LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_READ_DATA_FROM_MEMORY (H’FD’)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (H’FD’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_MEMORY_DUMP_REQUEST (H’CB’)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (H’CB’)

### COMMAND_READ_MEMORY_BLOCK (H’C9’)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (H’C9’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_WRITE_DATA_TO_MEMORY (H’FC’)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (H’FC’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: H’0000’ to H’01FF’

### COMMAND_WRITE_MEMORY_BLOCK (H’CA’)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (H’CA’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)
- DATABYTE1 = COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)

### COMMAND_CANCEL_FORCED_OFF (H’13’)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (H’13’) 
- DATABYTE2 = Channel bit

### COMMAND_FORCED_OFF (H’12’)
- DATABYTE1 = COMMAND_FORCED_OFF (H’12’) 
- DATABYTE2 = Channel bit

### COMMAND_ENABLE_PROGRAM (H’B2’)
- DATABYTE1 = COMMAND_ENABLE_PROGRAM (H’B2’) 
- DATABYTE2 = Channel bit

### COMMAND_DISABLE_PROGRAM (H’B1’)
- DATABYTE1 = COMMAND_DISABLE_PROGRAM (H’B1’) 
- DATABYTE2 = Channel bit

### COMMAND_SELECT_PROGRAM (H’B3’)
- DATABYTE1 = COMMAND_SELECT_PROGRAM (H’B3’) 
- DATABYTE2 = Program mode

### COMMAND_POWER_UP (H’AB’)
- DATABYTE1 = COMMAND_POWER_UP (H’AB’) 
- DATABYTE2 = module address

### COMMAND_RX_BUFFER_FULL_STATUS (H’0B’)
- DATABYTE1 = COMMAND_RX_BUFFER_FULL_STATUS (H’0B’)

### COMMAND_RX_BUFFER_READY_STATUS (H’0C’)
- DATABYTE1 = COMMAND_RX_BUFFER_READY_STATUS (H’0C’)

### COMMAND_BUS_OFF (H’09’)
- DATABYTE1 = COMMAND_BUS_OFF (H’09’)

### COMMAND_BUS_ACTIVE STATUS (H’0A’)
- DATABYTE1 = COMMAND_BUS_ACTIVE STATUS (H’0A’)

### COMMAND_REALTIME_CLOCK_STATUS (H’D8’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (H’D8’) 
- DATABYTE2 = Day Contents Day

### COMMAND_DATE_STATUS (H’B7’)
- DATABYTE1 = COMMAND_DATE_STATUS (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year

### COMMAND_DAYLIGHT_SAVING_STATUS (H’AF’)
- DATABYTE1 = COMMAND_DAYLIGHT_SAVING_STATUS (H’AF’) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = VMBSIG type (H’39’) / VMBUSBIP type (H’40’) / VMCM3 type (H’3F’) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memorymap version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week 
- DATABYTE8 =

### COMMAND_MEMORY_DATA (H’FE’)
- DATABYTE1 = COMMAND_MEMORY_DATA (H’FE’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (H’CC’)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (H’CC’) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_SET_REALTIME_CLOCK (H’D8’)
- DATABYTE1 = COMMAND_SET_REALTIME_CLOCK (H’D8’) 
- DATABYTE2 = Day of week

### COMMAND_SET_REALTIME_DATE (H’B7’)
- DATABYTE1 = COMMAND_SET_REALTIME_DATE (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_SET_DAYLIGHT_SAVING (H’AF’)
- DATABYTE1 = COMMAND_SET_DAYLIGHT_SAVING (H’AF’) 
- DATABYTE2 = bit0: 0 = disabled / 1 = enabled

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_READ_DATA_FROM_MEMORY (H’FD’)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (H’FD’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_READ_MEMORY_BLOCK (H’C9’)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (H’C9’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_MEMORY_DUMP_REQUEST (H’CB’)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (H’CB’)

### COMMAND_WRITE_DATA_TO_MEMORY (H’FC’)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (H’FC’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data to write Remark: Wait for ‘data memory byte’ feedback before sending a next command on the velbus. Address range: H’0000’ to H’1A03’ Terminate always with a write command at the last memory location .

### COMMAND_WRITE_MEMORY_BLOCK (H’CA’)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (H’CA’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)

### COMMAND_REALTIME_CLOCK_STATUS (0xD8)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (0xD8) 
- DATABYTE2 = Day Contents Day

### COMMAND_DATE_STATUS (0xB7)
- DATABYTE1 = COMMAND_DATE_STATUS (0xB7) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)
- DATABYTE1 = COMMAND_DAYLIGHT_SAVING_STATUS (0xAF) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_PUSH_BUTTON_STATUS (0x00)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (0x00) 
- DATABYTE2 = Channel just pressed 
- DATABYTE3 = Channel just released 
- DATABYTE4 = Channel long pressed

### COMMAND_MODULE_TYPE (0xFF)
- DATABYTE1 = COMMAND_MODULE_TYPE (0xFF) 
- DATABYTE2 = VMBRFR8S type (0x30) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memory map version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week

### COMMAND_MODULE_STATUS (0xED)
- DATABYTE1 = COMMAND_MODULE_STATUS (0xED) 
- DATABYTE2 = channel 1 to 8 status (1 = pressed / 0 = released) 
- DATABYTE3 = enabled/disable channel status (1 = enabled / 0 = disabled) 
- DATABYTE4 = normal/inverted channel status (1 = normal / 0 = inverted) 
- DATABYTE5 = locked channel status (0 = unlocked / 1 = locked) 
- DATABYTE6 = disabled channel program status (0 = program enabled / 1 = program disabled) 
- DATABYTE7 = alarm & program selection

### COMMAND_BUSERROR_COUNTER_STATUS (0xDA)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (0xDA) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_MEMORY_DATA (0xFE)
- DATABYTE1 = COMMAND_MEMORY_DATA (0xFE) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (0xCC)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (0xCC) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_CHANNEL_NAME_PART1 (0xF0)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART1 (0xF0) 
- DATABYTE2 = channel bit

### COMMAND_CHANNEL_NAME_PART2 (0xF1)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART2 (0xF1) 
- DATABYTE2 = Channel bit

### COMMAND_CHANNEL_NAME_PART3 (0xF2)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART3 (0xF2) 
- DATABYTE2 = channel bit

### COMMAND_CLEAR_LED (0xF5)
- DATABYTE1 = COMMAND_CLEAR_LED (0xF5) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (0xF6)
- DATABYTE1 = COMMAND_SET_LED (0xF6) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (0xF7)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (0xF7) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_FAST_BLINKING_LED (0xF8)
- DATABYTE1 = COMMAND_FAST_BLINKING_LED (0xF8) 
- DATABYTE2 = LED bit numbers (1 = fast blink LED)

### COMMAND_PUSH_BUTTON_STATUS (0x00)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (0x00) 
- DATABYTE2 = Linked push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Linked push buttons just released (1 = just released) 
- DATABYTE4 = linked push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)

### COMMAND_SET_REALTIME_CLOCK (0xD8)
- DATABYTE1 = COMMAND_SET_REALTIME_CLOCK (0xD8) 
- DATABYTE2 = Day of week

### COMMAND_SET_REALTIME_DATE (0xB7)
- DATABYTE1 = COMMAND_SET_REALTIME_DATE (0xB7) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_SET_DAYLIGHT_SAVING (0xAF)
- DATABYTE1 = COMMAND_SET_DAYLIGHT_SAVING (0xAF) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE) 
- DATABYTE2 = Channel (0xFF) 
- DATABYTE3 = enable/disable flags

### COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE) 
- DATABYTE2 = Channel (0xFF) 
- DATABYTE3 = enable/disable flags

### COMMAND_SET_ALARM_CLOCK (0xC3)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (0xC3) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_SET_ALARM_CLOCK (0xC3)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (0xC3) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_MODULE_STATUS_REQUEST (0xFA)
- DATABYTE1 = COMMAND_MODULE_STATUS_REQUEST (0xFA) 
- DATABYTE2 = don’t care

### COMMAND_CHANNEL_NAME_REQUEST (0xEF)
- DATABYTE1 = COMMAND_CHANNEL_NAME_REQUEST (0xEF) 
- DATABYTE2 = channel bit

### COMMAND_CLEAR_LED (0xF5)
- DATABYTE1 = COMMAND_CLEAR_LED (0xF5) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED of channel 1 to 8)

### COMMAND_SET_LED (0xF6)
- DATABYTE1 = COMMAND_SET_LED (0xF6) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8)

### COMMAND_SLOW_BLINK_LED (0xF7)
- DATABYTE1 = COMMAND_SLOW_BLINK_LED (0xF7) 
- DATABYTE2 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)

### COMMAND_FAST_BLINK_LED (0xF8)
- DATABYTE1 = COMMAND_FAST_BLINK_LED (0xF8) 
- DATABYTE2 = LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)

### COMMAND_VERY_FAST_BLINK_LED (0xF9)
- DATABYTE1 = COMMAND_VERY_FAST_BLINK_LED (0xF9) 
- DATABYTE2 = LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_UPDATE_LED_STATUS (0xF4)
- DATABYTE1 = COMMAND_UPDATE_LED_STATUS (0xF4) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8) 
- DATABYTE3 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8) 
- DATABYTE4 = LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_READ_DATA_FROM_MEMORY (0xFD)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (0xFD) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_MEMORY_DUMP_REQUEST (0xCB)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (0xCB)

### COMMAND_READ_MEMORY_BLOCK (0xC9)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (0xC9) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_WRITE_DATA_TO_MEMORY (0xFC)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (0xFC) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address (0x00...0xFF) 
- DATABYTE4 = memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: 0x0000 to 0x03FF

### COMMAND_WRITE_MEMORY_BLOCK (0xCA)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (0xCA) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)
- DATABYTE1 = COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)

### COMMAND_CANCEL_FORCED_OFF (0x13)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (0x13) 
- DATABYTE2 = Channel bit

### COMMAND_FORCED_OFF (0x12)
- DATABYTE1 = COMMAND_FORCED_OFF (0x12) 
- DATABYTE2 = Channel bit

### COMMAND_ENABLE_PROGRAM (0xB2)
- DATABYTE1 = COMMAND_ENABLE_PROGRAM (0xB2) 
- DATABYTE2 = Channel bit

### COMMAND_DISABLE_PROGRAM (0xB1)
- DATABYTE1 = COMMAND_DISABLE_PROGRAM (0xB1) 
- DATABYTE2 = channel

### COMMAND_SELECT_PROGRAM (0xB3)
- DATABYTE1 = COMMAND_SELECT_PROGRAM (0xB3) 
- DATABYTE2 = Program mode

### COMMAND_SET_CLR_LEARN_MODE (H’B5’)
- DATABYTE1 = COMMAND_SET_CLR_LEARN_MODE (H’B5’) 
- DATABYTE2 = Operating mode

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_REALTIME_CLOCK_STATUS (H’D8’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (H’D8’) 
- DATABYTE2 = Day Contents Day

### COMMAND_DATE_STATUS (H’B7’)
- DATABYTE1 = COMMAND_DATE_STATUS (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_DAYLIGHT_SAVING_STATUS (H’AF’)
- DATABYTE1 = COMMAND_DAYLIGHT_SAVING_STATUS (H’AF’) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Channel just pressed 
- DATABYTE3 = Channel just released 
- DATABYTE4 = Channel long pressed

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = VMBPIRO type (H’2C’) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memory map version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week

### COMMAND_MODULE_STATUS (H’ED’)
- DATABYTE1 = COMMAND_MODULE_STATUS (H’ED’) 
- DATABYTE2 = channel status (1 = pressed / 0 = released)

### COMMAND_BUSERROR_COUNTER_STATUS (H’DA’)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (H’DA’) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_MEMORY_DATA (H’FE’)
- DATABYTE1 = COMMAND_MEMORY_DATA (H’FE’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (H’CC’)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (H’CC’) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (H’F7’) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_SENSOR_TEMPERATURE (H’E6’)
- DATABYTE1 = COMMAND_SENSOR_TEMPERATURE (H’E6’) 
- DATABYTE2 = High byte current sensor temperature 
- DATABYTE3 = Low byte current sensor temperature into two’s complement format (resolution 0.0625°) 
- DATABYTE4 = High byte minimum sensor temperature 
- DATABYTE5 = Low byte minimum sensor temperature into two’s complement format (resolution 0.0625°) 
- DATABYTE6 = High byte maximum sensor temperature 
- DATABYTE7 = Low byte maximum sensor temperature into two’s complement format (resolution 0.0625°)

### COMMAND_SENSOR_NAME_PART1 (H’F0’)
- DATABYTE1 = COMMAND_SENSOR_NAME_PART1 (H’F0’) 
- DATABYTE2 = Sensor bit number (‘00000001’ = Sensor 1) 
- DATABYTE3 = Character 1 of the sensor name 
- DATABYTE4 = Character 2 of the sensor name 
- DATABYTE5 = Character 3 of the sensor name 
- DATABYTE6 = Character 4 of the sensor name 
- DATABYTE7 = Character 5 of the sensor name 
- DATABYTE8 = Character 6 of the sensor name

### COMMAND_SENSOR_NAME_PART2 (H’F1’)
- DATABYTE1 = COMMAND_SENSOR_NAME_PART2 (H’F1’) 
- DATABYTE2 = Sensor bit number (‘00000001’ = Sensor 1) 
- DATABYTE3 = Character 7 of the sensor name 
- DATABYTE4 = Character 8 of the sensor name 
- DATABYTE5 = Character 9 of the sensor name 
- DATABYTE6 = Character 10 of the sensor name 
- DATABYTE7 = Character 11 of the sensor name 
- DATABYTE8 = Character 12 of the sensor name

### COMMAND_SENSOR_NAME_PART3 (H’F2’)
- DATABYTE1 = COMMAND_SENSOR_NAME_PART3 (H’F2’) 
- DATABYTE2 = Sensor bit number (‘00000001’ = Sensor 1) 
- DATABYTE3 = Character 13 of the sensor name 
- DATABYTE4 = Character 14 of the sensor name 
- DATABYTE5 = Character 15 of the sensor name 
- DATABYTE6 = Character 16 of the sensor name

### COMMAND_TEMP_SENSOR_SETTINGS_PART1 (H’E8’)
- DATABYTE1 = COMMAND_TEMP_SENSOR_SETTINGS_PART1 (H’E8’) 
- DATABYTE2 = Calibration offset factor (resolution 0.5°)

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Linked push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Linked push buttons just released (1 = just released) 
- DATABYTE4 = linked push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_SET_REALTIME_CLOCK (H’D8’)
- DATABYTE1 = COMMAND_SET_REALTIME_CLOCK (H’D8’) 
- DATABYTE2 = Day of week

### COMMAND_SET_REALTIME_DATE (H’B7’)
- DATABYTE1 = COMMAND_SET_REALTIME_DATE (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_SET_DAYLIGHT_SAVING (H’AF’)
- DATABYTE1 = COMMAND_SET_DAYLIGHT_SAVING (H’AF’) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’) 
- DATABYTE2 = Channel (FF) 
- DATABYTE3 = enable/disable flags

### COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (H’AE’) 
- DATABYTE2 = Channel (FF) 
- DATABYTE3 = enable/disable flags

### COMMAND_SET_ALARM_CLOCK (H’C3’)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (H’C3’) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_SET_ALARM_CLOCK (H’C3’)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (H’C3’) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_MODULE_STATUS_REQUEST (H’FA’)
- DATABYTE1 = COMMAND_MODULE_STATUS_REQUEST (H’FA’) 
- DATABYTE2 = don’t care

### COMMAND_LIGHT_VALUE_REQUEST (H’AA’)
- DATABYTE1 = COMMAND_LIGHT_VALUE_REQUEST (H’AA’) 
- DATABYTE2 = Auto send interval time into seconds

### COMMAND_SET_CLR_LEARN_MODE (H’B5’)
- DATABYTE1 = COMMAND_SET_CLR_LEARN_MODE (H’B5’) 
- DATABYTE2 = Operating mode

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED of channel 1 to 8)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8)

### COMMAND_SLOW_BLINK_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINK_LED (H’F7’) 
- DATABYTE2 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)

### COMMAND_FAST_BLINK_LED (H’F8’)
- DATABYTE1 = COMMAND_FAST_BLINK_LED (H’F8’) 
- DATABYTE2 = LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)

### COMMAND_VERY_FAST_BLINK_LED (H’F9’)
- DATABYTE1 = COMMAND_VERY_FAST_BLINK_LED (H’F9’) 
- DATABYTE2 = LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_UPDATE_LED_STATUS (H’F4’)
- DATABYTE1 = COMMAND_UPDATE_LED_STATUS (H’F4’) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8) 
- DATABYTE3 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8) 
- DATABYTE4 = LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_READ_DATA_FROM_MEMORY (H’FD’)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (H’FD’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_MEMORY_DUMP_REQUEST (H’CB’)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (H’CB’)

### COMMAND_READ_MEMORY_BLOCK (H’C9’)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (H’C9’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_WRITE_DATA_TO_MEMORY (H’FC’)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (H’FC’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: H’0000’ to H’01FF’

### COMMAND_WRITE_MEMORY_BLOCK (H’CA’)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (H’CA’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)
- DATABYTE1 = COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)

### COMMAND_CANCEL_FORCED_OFF (H’13’)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (H’13’) 
- DATABYTE2 = Channel bit

### COMMAND_FORCED_OFF (H’12’)
- DATABYTE1 = COMMAND_FORCED_OFF (H’12’) 
- DATABYTE2 = Channel bit

### COMMAND_ENABLE_PROGRAM (H’B2’)
- DATABYTE1 = COMMAND_ENABLE_PROGRAM (H’B2’) 
- DATABYTE2 = Channel bit

### COMMAND_DISABLE_PROGRAM (H’B1’)
- DATABYTE1 = COMMAND_DISABLE_PROGRAM (H’B1’) 
- DATABYTE2 = channel

### COMMAND_SELECT_PROGRAM (H’B3’)
- DATABYTE1 = COMMAND_SELECT_PROGRAM (H’B3’) 
- DATABYTE2 = Program mode

### COMMAND_CHANNEL_NAME_REQUEST (H’EF’)
- DATABYTE1 = COMMAND_CHANNEL_NAME_REQUEST (H’EF’) 
- DATABYTE2 = don’t care

### COMMAND_SENSOR_TEMP_REQUEST (H’E5’)
- DATABYTE1 = COMMAND_SENSOR_TEMP_REQUEST (H’E5’) 
- DATABYTE2 = Auto send time interval into seconds

### COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (H’E7’)
- DATABYTE1 = COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (H’E7’) 
- DATABYTE2 = don’t care

### COMMAND_SET_SENSOR_ZONE_NUMBER (H’C5’)
- DATABYTE1 = COMMAND_SET_SENSOR_ZONE_NUMBER (H’C5’) 
- DATABYTE2 = Zone number (0= no zone)

### COMMAND_SET_TEMP (H’E4’)
- DATABYTE1 = COMMAND_SET_TEMP (H’E4’) 
- DATABYTE2 = Pointer to temperature variable (0...20)

### COMMAND_POWER_UP (0xAB)
- DATABYTE1 = COMMAND_POWER_UP (0xAB) 
- DATABYTE2 = module address

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)

### COMMAND_REALTIME_CLOCK_STATUS (0xD8)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (0xD8) 
- DATABYTE2 = Day Contents Day

### COMMAND_DATE_STATUS (0xB7)
- DATABYTE1 = COMMAND_DATE_STATUS (0xB7) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_DAYLIGHT_SAVING_STATUS (0xAF)
- DATABYTE1 = COMMAND_DAYLIGHT_SAVING_STATUS (0xAF) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_PUSH_BUTTON_STATUS (0x00)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (0x00) 
- DATABYTE2 = Channel just pressed 
- DATABYTE3 = Channel just released 
- DATABYTE4 = Channel long pressed

### COMMAND_OUTPUT_STATUS (0x00)
- DATABYTE1 = COMMAND_OUTPUT_STATUS (0x00) 
- DATABYTE2 = Output channel just activated (1 = just activated)

### COMMAND_MODULE_TYPE (0xFF)
- DATABYTE1 = COMMAND_MODULE_TYPE (0xFF) 
- DATABYTE2 = type (0x34 = VMBEL1 / 0x35 = VMBEL2 / 0x36 = VMBEL4) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memory map version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week 
- DATABYTE8 = Terminator (0 = open / 1 = closed)

### COMMAND_SUBTYPE (0xB0)
- DATABYTE1 = COMMAND_SUBTYPE (0xB0) 
- DATABYTE2 = type (0x34 = VMBEL1 / 0x35 = VMBEL2 / 0x36 = VMBEL4) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Subaddress1 (H’FF’ sub-address disabled) 
- DATABYTE6 = Subaddress2 (H’FF’ sub-address disabled) 
- DATABYTE7 = Subaddress3 (H’FF’ sub-address disabled) 
- DATABYTE8 = Subaddress4 (H’FF’ sub-address disabled)

### COMMAND_BUSERROR_COUNTER_STATUS (0xDA)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (0xDA) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_MEMORY_DATA (0xFE)
- DATABYTE1 = COMMAND_MEMORY_DATA (0xFE) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (0xCC)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (0xCC) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_CHANNEL_NAME_PART1 (0xF0)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART1 (0xF0) 
- DATABYTE2 = channel number 1...9 or 18 (channel 9 = temperature sensor, channel 18 = output) 
- DATABYTE3 = Character 1 of the channel name 
- DATABYTE4 = Character 2 of the channel name 
- DATABYTE5 = Character 3 of the channel name 
- DATABYTE6 = Character 4 of the channel name 
- DATABYTE7 = Character 5 of the channel name 
- DATABYTE8 = Character 6 of the channel name

### COMMAND_CHANNEL_NAME_PART2 (0xF1)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART2 (0xF1) 
- DATABYTE2 = Channel number 1...9 or 18 (channel 9 = temperature sensor, channel 18 = output) 
- DATABYTE3 = Character 7 of the channel name 
- DATABYTE4 = Character 8 of the channel name 
- DATABYTE5 = Character 9 of the channel name 
- DATABYTE6 = Character 10 of the channel name 
- DATABYTE7 = Character 11 of the channel name 
- DATABYTE8 = Character 12 of the channel name

### COMMAND_CHANNEL_NAME_PART3 (0xF2)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART3 (0xF2) 
- DATABYTE2 = channel number 1...9 or 18 (channel 9 = temperature sensor, channel 18 = output) 
- DATABYTE3 = Character 13 of the channel name 
- DATABYTE4 = Character 14 of the channel name 
- DATABYTE5 = Character 15 of the channel name 
- DATABYTE6 = Character 16 of the channel name

### COMMAND_MODULE_STATUS (0xED)
- DATABYTE1 = COMMAND_MODULE_STATUS (0xED) 
- DATABYTE2 = channel 1 to 8 status (1 = pressed / 0 = released) 
- DATABYTE3 = enabled/disable channel status (1 = enabled / 0 = disabled) 
- DATABYTE4 = open collector locked & temperature sensor

### COMMAND_TEMP_SENSOR_STATUS (0xEA)
- DATABYTE1 = COMMAND_TEMP_SENSOR_STATUS (0xEA) 
- DATABYTE2 = Operating mode

### COMMAND_SENSOR_TEMPERATURE (0xE6)
- DATABYTE1 = COMMAND_SENSOR_TEMPERATURE (0xE6) 
- DATABYTE2 = High byte current sensor temperature 
- DATABYTE3 = Low byte current sensor temperature into two’s complement format (resolution 0.0625°) 
- DATABYTE4 = High byte minimum sensor temperature 
- DATABYTE5 = Low byte minimum sensor temperature into two’s complement format (resolution 0.0625°) 
- DATABYTE6 = High byte maximum sensor temperature 
- DATABYTE7 = Low byte maximum sensor temperature into two’s complement format (resolution 0.0625°)

### COMMAND_TEMP_SENSOR_SETTINGS_PART1 (0xE8)
- DATABYTE1 = COMMAND_TEMP_SENSOR_SETTINGS_PART1 (0xE8) 
- DATABYTE2 = Current temperature set (resolution 0.5°) 
- DATABYTE3 = Comfort temperature set for heating mode (resolution 0.5°) 
- DATABYTE4 = Day temperature set for heating mode (resolution 0.5°) 
- DATABYTE5 = Night temperature set for heating mode (resolution 0.5°) 
- DATABYTE6 = Anti frost temperature set for heating mode (resolution 0.5°) 
- DATABYTE7 = Boost temperature difference set (resolution 0.5°) 
- DATABYTE8 = Hysteresis temperature set

### COMMAND_TEMP_SENSOR_SETTINGS_PART2 (0xE9)
- DATABYTE1 = COMMAND_TEMP_SENSOR_SETTINGS_PART2 (0xE9) 
- DATABYTE2 = Comfort temperature set for cooling mode (resolution 0.5°) 
- DATABYTE3 = Day temperature set for cooling mode (resolution 0.5°) 
- DATABYTE4 = Night temperature set for cooling mode (resolution 0.5°) 
- DATABYTE5 = Safe temperature set for cooling mode (resolution 0.5°) 
- DATABYTE6 = High byte of the default sleep timer 
- DATABYTE7 = Low byte of the default sleep timer into minutes (1 to 65.279min) 
- DATABYTE8 = Default auto send temperature time interval into seconds

### COMMAND_TEMP_SENSOR_SETTINGS_PART3 (0xC6)
- DATABYTE1 = COMMAND_TEMP_SENSOR_SETTINGS_PART3 (0xC6) 
- DATABYTE2 = Temperature alarm 1 setting (resolution 0.5°) 
- DATABYTE3 = Temperature alarm 4 setting (resolution 0.5°) 
- DATABYTE4 = Lower temperature range cool mode (resolution 0.5°) 
- DATABYTE5 = Upper temperature range heat mode (resolution 0.5°) 
- DATABYTE6 = Calibration offset factor (resolution 0.5°)

### COMMAND_TEMP_SENSOR_SETTINGS_PART4 (0xB9)
- DATABYTE1 = COMMAND_TEMP_SENSOR_SETTINGS_PART4 (0xB9) 
- DATABYTE2 = Minimum switching time (0...255s) 
- DATABYTE3 = Pump delayed on time (0...255s) 
- DATABYTE4 = Pump delayed off time (0...255s) 
- DATABYTE5 = Temperature alarm 2 setting (resolution 0.5°) 
- DATABYTE6 = Temperature alarm 3 setting (resolution 0.5°) 
- DATABYTE7 = Lower temperature range heat mode (resolution 0.5°) 
- DATABYTE8 = Upper temperature range cool mode (resolution 0.5°)

### COMMAND_CLEAR_LED (0xF5)
- DATABYTE1 = COMMAND_CLEAR_LED (0xF5) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (0xF6)
- DATABYTE1 = COMMAND_SET_LED (0xF6) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (0xF7)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (0xF7) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_FAST_BLINKING_LED (0xF8)
- DATABYTE1 = COMMAND_FAST_BLINKING_LED (0xF8) 
- DATABYTE2 = LED bit numbers (1 = fast blink LED)

### COMMAND_PROGRAM_STEP_INFO (0xC1)
- DATABYTE1 = COMMAND_PROGRAM_STEP_INFO (0xC1) 
- DATABYTE2 = Program step number (1...66 / 255 step not found) 
- DATABYTE3 = Program reference

### COMMAND_PUSH_BUTTON_STATUS (0x00)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (0x00) 
- DATABYTE2 = Linked push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Linked push buttons just released (1 = just released) 
- DATABYTE4 = linked push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_POWER_UP (0xAB)
- DATABYTE1 = COMMAND_POWER_UP (0xAB) 
- DATABYTE2 = module address

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (0xD7)

### COMMAND_SET_REALTIME_CLOCK (0xD8)
- DATABYTE1 = COMMAND_SET_REALTIME_CLOCK (0xD8) 
- DATABYTE2 = Day of week

### COMMAND_SET_REALTIME_DATE (0xB7)
- DATABYTE1 = COMMAND_SET_REALTIME_DATE (0xB7) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_SET_DAYLIGHT_SAVING (0xAF)
- DATABYTE1 = COMMAND_SET_DAYLIGHT_SAVING (0xAF) 
- DATABYTE2 = 0 =disabled / 1 = enabled

### COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE) 
- DATABYTE2 = Channel (0xFF) 
- DATABYTE3 = enable/disable flags

### COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE)
- DATABYTE1 = COMMAND_ENA_DIS_SUNRISE_SUNSET (0xAE) 
- DATABYTE2 = Channel (0xFF) 
- DATABYTE3 = enable/disable flags

### COMMAND_SET_ALARM_CLOCK (0xC3)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (0xC3) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_SET_ALARM_CLOCK (0xC3)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (0xC3) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_MODULE_STATUS_REQUEST (0xFA)
- DATABYTE1 = COMMAND_MODULE_STATUS_REQUEST (0xFA) 
- DATABYTE2 = don’t care

### COMMAND_CHANNEL_NAME_REQUEST (0xEF)
- DATABYTE1 = COMMAND_CHANNEL_NAME_REQUEST (0xEF) 
- DATABYTE2 = channel number 1...9 or 18 (9 for temperature sensor name, 18 for output name)

### COMMAND_CLEAR_LED (0xF5)
- DATABYTE1 = COMMAND_CLEAR_LED (0xF5) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED of channel 1 to 8)

### COMMAND_SET_LED (0xF6)
- DATABYTE1 = COMMAND_SET_LED (0xF6) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8)

### COMMAND_SLOW_BLINK_LED (0xF7)
- DATABYTE1 = COMMAND_SLOW_BLINK_LED (0xF7) 
- DATABYTE2 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8)

### COMMAND_FAST_BLINK_LED (0xF8)
- DATABYTE1 = COMMAND_FAST_BLINK_LED (0xF8) 
- DATABYTE2 = LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 8)

### COMMAND_VERY_FAST_BLINK_LED (0xF9)
- DATABYTE1 = COMMAND_VERY_FAST_BLINK_LED (0xF9) 
- DATABYTE2 = LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_UPDATE_LED_STATUS (0xF4)
- DATABYTE1 = COMMAND_UPDATE_LED_STATUS (0xF4) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 8) 
- DATABYTE3 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 8) 
- DATABYTE4 = LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 8)

### COMMAND_READ_DATA_FROM_MEMORY (0xFD)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (0xFD) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_READ_MEMORY_BLOCK (0xC9)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (0xC9) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_MEMORY_DUMP_REQUEST (0xCB)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (0xCB)

### COMMAND_WRITE_DATA_TO_MEMORY (0xFC)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (0xFC) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: 0x0000 to 0x0703 Terminate always with a write command at the last memory location.

### COMMAND_WRITE_MEMORY_BLOCK (0xCA)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (0xCA) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (H’D9’)
- DATABYTE1 = COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (H’D9’)

### COMMAND_CANCEL_FORCED_OFF (0x13)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (0x13) 
- DATABYTE2 = Channel number 1...8, 9 or 18 (9 for temperature sensor, 18 for open collector output)

### COMMAND_FORCED_OFF (0x12)
- DATABYTE1 = COMMAND_FORCED_OFF (0x12) 
- DATABYTE2 = Channel number 1...8, 9 or 18 (9 for temperature sensor, 18 for open collector output) 
- DATABYTE3 = high byte of delay time 
- DATABYTE4 = mid byte of delay time 
- DATABYTE5 = low byte of delay time

### COMMAND_ENABLE_PROGRAM (0xB2)
- DATABYTE1 = COMMAND_ENABLE_PROGRAM (0xB2) 
- DATABYTE2 = Channel number 1...8, 9 or 18 (9 for temperature sensor name, 18 for open collector output)

### COMMAND_DISABLE_PROGRAM (0xB1)
- DATABYTE1 = COMMAND_DISABLE_PROGRAM (0xB1) 
- DATABYTE2 = Channel number1...8, 9 or 18 (9 for temperature sensor name, 18 for open collector output) 
- DATABYTE3 = high byte of delay time 
- DATABYTE4 = mid byte of delay time 
- DATABYTE5 = low byte of delay time

### COMMAND_SELECT_PROGRAM (0xB3)
- DATABYTE1 = COMMAND_SELECT_PROGRAM (0xB3) 
- DATABYTE2 = Program mode

### COMMAND_SENSOR_TEMP_REQUEST (0xE5)
- DATABYTE1 = COMMAND_SENSOR_TEMP_REQUEST (0xE5) 
- DATABYTE2 = Auto send time interval into seconds

### COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (0xE7)
- DATABYTE1 = COMMAND_TEMP_SENSOR_SETTINGS_REQUEST (0xE7) 
- DATABYTE2 = don’t care

### COMMAND_SET_HEATING_MODE (0xE0)
- DATABYTE1 = COMMAND_SET_HEATING_MODE (0xE0) 
- DATABYTE2 = don’t care

### COMMAND_SET_COOLING_MODE (0xDF)
- DATABYTE1 = COMMAND_SET_COOLING_MODE (0xDF) 
- DATABYTE2 = don’t care

### COMMAND_SET_SENSOR_ZONE_NUMBER (0xC5)
- DATABYTE1 = COMMAND_SET_SENSOR_ZONE_NUMBER (0xC5) 
- DATABYTE2 = Zone number (0= no zone / 1...7 = valid zone)

### COMMAND_SET_DEFAULT_SLEEP_TIME (0xE3)
- DATABYTE1 = COMMAND_SET_DEFAULT_SLEEP_TIME (0xE3) 
- DATABYTE2 = High byte of the default sleep time 
- DATABYTE3 = Low byte of the default sleep time into minutes

### COMMAND_SET_TEMP (0xE4)
- DATABYTE1 = COMMAND_SET_TEMP (0xE4) 
- DATABYTE2 = Pointer to temperature variable (0...20)

### COMMAND_SWITCH_TO_COMFORT_MODE (0xDB)
- DATABYTE1 = COMMAND_SWITCH_TO_COMFORT_MODE (0xDB) 
- DATABYTE2 = High byte of the sleep time 
- DATABYTE3 = Low byte of the sleep time into minutes

### COMMAND_SWITCH_TO_DAY_MODE (0xDC)
- DATABYTE1 = COMMAND_SWITCH_TO_DAY_MODE (0xDC) 
- DATABYTE2 = High byte of the sleep time 
- DATABYTE3 = Low byte of the sleep time into minutes

### COMMAND_SWITCH_TO_NIGHT_MODE (0xDD)
- DATABYTE1 = COMMAND_SWITCH_TO_NIGHT_MODE (0xDD) 
- DATABYTE2 = High byte of the sleep time 
- DATABYTE3 = Low byte of the sleep time into minutes

### COMMAND_SWITCH_TO_SAFE_MODE (0xDE)
- DATABYTE1 = COMMAND_SWITCH_TO_SAFE_MODE (0xDE) 
- DATABYTE7 = High byte of the sleep time 
- DATABYTE8 = Low byte of the sleep time into minutes

### COMMAND_SWITCH_RELAY_OFF (0x01)
- DATABYTE1 = COMMAND_SWITCH_RELAY_OFF (0x01) 
- DATABYTE2 = channel bit = don’t care

### COMMAND_SWITCH_RELAY_ON (0x02)
- DATABYTE1 = COMMAND_SWITCH_RELAY_ON (0x02) 
- DATABYTE2 = channel bit = don’t care

### COMMAND_START_RELAY_TIMER (0x03)
- DATABYTE1 = COMMAND_START_RELAY_TIMER (0x03) 
- DATABYTE2 = channel bit = don’t care 
- DATABYTE3 = high byte of delay time 
- DATABYTE4 = mid byte of delay time 
- DATABYTE5 = low byte of delay time

### COMMAND_SET_PB_BACKLIGHT (0xD4)
- DATABYTE1 = COMMAND_SET_PB_BACKLIGHT (0xD4) 
- DATABYTE2 = custom palette index (0...31) 
- DATABYTE3 = white/saturation

### COMMAND_SET_PB_BACKLIGHT (0xD4)
- DATABYTE1 = COMMAND_SET_PB_BACKLIGHT (0xD4) 
- DATABYTE2 = background/feedback color

### COMMAND_READ_PROGRAM_STEP (0xC0)
- DATABYTE1 = COMMAND_READ_PROGRAM_STEP (0xC0) 
- DATABYTE2 = Start program step number (1...66) 
- DATABYTE3 = Program group number (1...3) 
- DATABYTE4 = Channel number1...8, 9 or 18 (9 for temperature sensor name, 18 for open collector output) 
- DATABYTE5 = Search direction (1 = search for next matched step / 0 = search for previous matched program step)

### COMMAND_WRITE_PROGRAM_STEP (0xC2)
- DATABYTE1 = COMMAND_WRITE_PROGRAM_STEP (0xC2) 
- DATABYTE2 = Program step number (1...66) 
- DATABYTE3 = Program reference

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Dimmer channel just switched on (1 = just pressed / switched on) 
- DATABYTE3 = Dimmer channel just switched off (1 = just released / switched off) 
- DATABYTE4 = 0

### COMMAND_SLIDER_STATUS (H’0F’)
- DATABYTE1 = COMMAND_SLIDER_STATUS (H’0F’) 
- DATABYTE2 = Dimmer slider channel (H’01’) 
- DATABYTE3 = Dimmer value 0...100% (slider status) 
- DATABYTE4 = H’00’

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (H’F7’) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_FAST_BLINKING_LED (H’F8’)
- DATABYTE1 = COMMAND_FAST_BLINKING_LED (H’F8’) 
- DATABYTE2 = LED bit numbers (1 = fast blink LED)

### COMMAND_DIMMERCONTROLLER_STATUS (H’B8’)
- DATABYTE1 = COMMAND_DIMMERCONTROLLER_STATUS (H’B8’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Dimmer status

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = VMBDMI type (H’15’) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memorymap version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week

### COMMAND_BUSERROR_COUNTER_STATUS (H’DA’)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (H’DA’) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_DIMMER_NAME_PART1 (H’F0’)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART1 (H’F0’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Character 1 of the dimmer name 
- DATABYTE4 = Character 2 of the dimmer name 
- DATABYTE5 = Character 3 of the dimmer name 
- DATABYTE6 = Character 4 of the dimmer name 
- DATABYTE7 = Character 5 of the dimmer name 
- DATABYTE8 = Character 6 of the dimmer name

### COMMAND_DIMMER_NAME_PART2 (H’F1’)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART2 (H’F1’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Character 7 of the dimmer name 
- DATABYTE4 = Character 8 of the dimmer name 
- DATABYTE5 = Character 9 of the dimmer name 
- DATABYTE6 = Character 10 of the dimmer name 
- DATABYTE7 = Character 11 of the dimmer name 
- DATABYTE8 = Character 12 of the dimmer name

### COMMAND_DIMMER_NAME_PART3 (H’F2’)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART3 (H’F2’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Character 13 of the dimmer name 
- DATABYTE4 = Character 14 of the dimmer name 
- DATABYTE5 = Character 15 of the dimmer name 
- DATABYTE6 = Character 16 of the dimmer name

### COMMAND_MEMORY_DATA (H’FE’)
- DATABYTE1 = COMMAND_MEMORY_DATA (H’FE’) 
- DATABYTE2 = High memory address (H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (H’CC’)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (H’CC’) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Push buttons just released (1 = just released) 
- DATABYTE4 = Push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_SLIDER_STATUS (H’0F’)
- DATABYTE1 = COMMAND_SLIDER_STATUS (H’0F’) 
- DATABYTE2 = Slider channel 
- DATABYTE3 = Slider status (0...100%) 
- DATABYTE4 = don’t care

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED)

### COMMAND_SET_DIMVALUE (H’07’)
- DATABYTE1 = COMMAND_SET_DIMVALUE (H’07’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Dimvalue (0 to 100%) 
- DATABYTE4 = high byte of dimspeed 
- DATABYTE5 = low byte of dimspeed

### COMMAND_RESTORE_LAST_DIMVALUE (H’11’)
- DATABYTE1 = COMMAND_RESTORE_LAST_DIMVALUE (H’11’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Don’t care 
- DATABYTE4 = high byte of dimspeed 
- DATABYTE5 = low byte of dimspeed

### COMMAND_STOP_DIMMING (H’10’)
- DATABYTE1 = COMMAND_STOP_DIMMING (H’10’) 
- DATABYTE2 = Dimmer channel (H’01’)

### COMMAND_START_DIMMER_TIMER (H’08’)
- DATABYTE1 = COMMAND_START_DIMMER_TIMER (H’08’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = high byte of time-out time 
- DATABYTE4 = mid byte of time-out time 
- DATABYTE5 = low byte of time-out time

### COMMAND_FORCED_OFF (H’12’)
- DATABYTE1 = COMMAND_FORCED_OFF (H’12’) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_FORCED_OFF (H’13’)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (H’13’) 
- DATABYTE2 = Dimmer channel

### COMMAND_FORCED_ON (H’14’)
- DATABYTE1 = COMMAND_FORCED_ON (H’14’) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_FORCED_ON (H’15’)
- DATABYTE1 = COMMAND_CANCEL_FORCED_ON (H’15’) 
- DATABYTE2 = Dimmer channel

### COMMAND_INHIBIT (H’16’)
- DATABYTE1 = COMMAND_INHIBIT (H’16’) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_INHIBIT (H’17’)
- DATABYTE1 = COMMAND_CANCEL_INHIBIT (H’17’) 
- DATABYTE2 = Dimmer channel

### COMMAND_DIMMER_STATUS_REQUEST (H’FA’)
- DATABYTE1 = COMMAND_DIMMER_STATUS_REQUEST (H’FA’) 
- DATABYTE2 = Dimmer channel (H’01’)

### COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)
- DATABYTE1 = COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)

### COMMAND_DIMMER_NAME_REQUEST (H’EF’)
- DATABYTE1 = COMMAND_DIMMER_NAME_REQUEST (H’EF’) 
- DATABYTE2 = Dimmer channel (H’01’)

### COMMAND_READ_DATA_FROM_MEMORY (H’FD’)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (H’FD’) 
- DATABYTE2 = High memory address (H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’)

### COMMAND_MEMORY_DUMP_REQUEST (H’CB’)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (H’CB’)

### COMMAND_READ_MEMORY_BLOCK (H’C9’)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (H’C9’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_WRITE_DATA_TO_MEMORY (H’FC’)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (H’FC’) 
- DATABYTE2 = High memory address (H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data to write Remark: Wait at least 10ms for sending a next command on the velbus.

### COMMAND_WRITE_MEMORY_BLOCK (H’CA’)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (H’CA’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Dimmer channel just switched on (1 = just pressed / switched on) 
- DATABYTE3 = Dimmer channel just switched off (1 = just released / switched off) 
- DATABYTE4 = 0

### COMMAND_SLIDER_STATUS (H’0F’)
- DATABYTE1 = COMMAND_SLIDER_STATUS (H’0F’) 
- DATABYTE2 = Dimmer slider channel (H’01’) 
- DATABYTE3 = Dimmer value 0...100% (slider status) 
- DATABYTE4 = H’00’

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (H’F7’) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_FAST_BLINKING_LED (H’F8’)
- DATABYTE1 = COMMAND_FAST_BLINKING_LED (H’F8’) 
- DATABYTE2 = LED bit numbers (1 = fast blink LED)

### COMMAND_DIMMERCONTROLLER_STATUS (H’B8’)
- DATABYTE1 = COMMAND_DIMMERCONTROLLER_STATUS (H’B8’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Dimmer status

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = VMBDMI type (H’2F’) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memorymap version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week

### COMMAND_BUSERROR_COUNTER_STATUS (H’DA’)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (H’DA’) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_DIMMER_NAME_PART1 (H’F0’)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART1 (H’F0’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Character 1 of the dimmer name 
- DATABYTE4 = Character 2 of the dimmer name 
- DATABYTE5 = Character 3 of the dimmer name 
- DATABYTE6 = Character 4 of the dimmer name 
- DATABYTE7 = Character 5 of the dimmer name 
- DATABYTE8 = Character 6 of the dimmer name

### COMMAND_DIMMER_NAME_PART2 (H’F1’)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART2 (H’F1’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Character 7 of the dimmer name 
- DATABYTE4 = Character 8 of the dimmer name 
- DATABYTE5 = Character 9 of the dimmer name 
- DATABYTE6 = Character 10 of the dimmer name 
- DATABYTE7 = Character 11 of the dimmer name 
- DATABYTE8 = Character 12 of the dimmer name

### COMMAND_DIMMER_NAME_PART3 (H’F2’)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART3 (H’F2’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Character 13 of the dimmer name 
- DATABYTE4 = Character 14 of the dimmer name 
- DATABYTE5 = Character 15 of the dimmer name 
- DATABYTE6 = Character 16 of the dimmer name

### COMMAND_MEMORY_DATA (H’FE’)
- DATABYTE1 = COMMAND_MEMORY_DATA (H’FE’) 
- DATABYTE2 = High memory address (H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (H’CC’)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (H’CC’) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Push buttons just released (1 = just released) 
- DATABYTE4 = Push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_SLIDER_STATUS (H’0F’)
- DATABYTE1 = COMMAND_SLIDER_STATUS (H’0F’) 
- DATABYTE2 = Slider channel 
- DATABYTE3 = Slider status (0...100%) 
- DATABYTE4 = don’t care

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED)

### COMMAND_SET_DIMVALUE (H’07’)
- DATABYTE1 = COMMAND_SET_DIMVALUE (H’07’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Dimvalue (0 to 100%) 
- DATABYTE4 = high byte of dimspeed 
- DATABYTE5 = low byte of dimspeed

### COMMAND_RESTORE_LAST_DIMVALUE (H’11’)
- DATABYTE1 = COMMAND_RESTORE_LAST_DIMVALUE (H’11’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = Don’t care 
- DATABYTE4 = high byte of dimspeed 
- DATABYTE5 = low byte of dimspeed

### COMMAND_STOP_DIMMING (H’10’)
- DATABYTE1 = COMMAND_STOP_DIMMING (H’10’) 
- DATABYTE2 = Dimmer channel (H’01’)

### COMMAND_START_DIMMER_TIMER (H’08’)
- DATABYTE1 = COMMAND_START_DIMMER_TIMER (H’08’) 
- DATABYTE2 = Dimmer channel (H’01’) 
- DATABYTE3 = high byte of time-out time 
- DATABYTE4 = mid byte of time-out time 
- DATABYTE5 = low byte of time-out time

### COMMAND_FORCED_OFF (H’12’)
- DATABYTE1 = COMMAND_FORCED_OFF (H’12’) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_FORCED_OFF (H’13’)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (H’13’) 
- DATABYTE2 = Dimmer channel

### COMMAND_FORCED_ON (H’14’)
- DATABYTE1 = COMMAND_FORCED_ON (H’14’) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_FORCED_ON (H’15’)
- DATABYTE1 = COMMAND_CANCEL_FORCED_ON (H’15’) 
- DATABYTE2 = Dimmer channel

### COMMAND_INHIBIT (H’16’)
- DATABYTE1 = COMMAND_INHIBIT (H’16’) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_INHIBIT (H’17’)
- DATABYTE1 = COMMAND_CANCEL_INHIBIT (H’17’) 
- DATABYTE2 = Dimmer channel

### COMMAND_DIMMER_STATUS_REQUEST (H’FA’)
- DATABYTE1 = COMMAND_DIMMER_STATUS_REQUEST (H’FA’) 
- DATABYTE2 = Dimmer channel (H’01’)

### COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)
- DATABYTE1 = COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (H’D9’)

### COMMAND_DIMMER_NAME_REQUEST (H’EF’)
- DATABYTE1 = COMMAND_DIMMER_NAME_REQUEST (H’EF’) 
- DATABYTE2 = Dimmer channel (H’01’)

### COMMAND_READ_DATA_FROM_MEMORY (H’FD’)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (H’FD’) 
- DATABYTE2 = High memory address (H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’)

### COMMAND_MEMORY_DUMP_REQUEST (H’CB’)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (H’CB’)

### COMMAND_READ_MEMORY_BLOCK (H’C9’)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (H’C9’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_WRITE_DATA_TO_MEMORY (H’FC’)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (H’FC’) 
- DATABYTE2 = High memory address (H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data to write Remark: Wait at least 10ms for sending a next command on the velbus.

### COMMAND_WRITE_MEMORY_BLOCK (H’CA’)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (H’CA’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Local dim push buttons just pressed / dimmer just switched on (1 = just pressed / switched on) 
- DATABYTE3 = Local dim push buttons just released / dimmer just switched off (1 = just released / switched off) 
- DATABYTE4 = Local dim push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_SLIDER_STATUS (H’0F’)
- DATABYTE1 = COMMAND_SLIDER_STATUS (H’0F’) 
- DATABYTE2 = Dimmer slider channel (H’01’) 
- DATABYTE3 = Dimmer value 0...100% (slider status) 
- DATABYTE4 = H’00’ (Slider channel not long pressed)

### COMMAND_UPDATE_LED (H’F4’)
- DATABYTE1 = COMMAND_UPDATE_LED (H’F4’) 
- DATABYTE2 = LED continuous on status (1 = LED on) 
- DATABYTE3 = LED slow blinking status (1 = LED slow blinking) 
- DATABYTE4 = LED fast blinking status (1 = LED fast blinking)

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (H’F7’) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_FAST_BLINKING_LED (H’F8’)
- DATABYTE1 = COMMAND_FAST_BLINKING_LED (H’F8’) 
- DATABYTE2 = LED bit numbers (1 = fast blink LED)

### COMMAND_VERYFAST_BLINKING_LED (H’F9’)
- DATABYTE1 = COMMAND_VERYFAST_BLINKING_LED (H’F9’) 
- DATABYTE2 = LED bit numbers (1 = very fast blink LED)

### COMMAND_DIMMER_STATUS (H’EE’)
- DATABYTE1 = COMMAND_DIMMER_STATUS (H’EE’) 
- DATABYTE2 = Mode setting

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = DIMMER_MODULE_FOR_ELECTRONIC_TRANSFORMER_TYPE (H’14’) 
- DATABYTE3 = Mode setting

### COMMAND_BUSERROR_COUNTER_STATUS (H’DA’)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (H’DA’) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_REALTIME_CLOCK_STATUS (H’D8’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (H’D8’) 
- DATABYTE2 = Day Contents Day

### COMMAND_DATE_STATUS (H’B7’)
- DATABYTE1 = COMMAND_DATE_STATUS (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = channel just pressed 
- DATABYTE3 = channel just released 
- DATABYTE4 = channel long pressed

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = VMB4RF type (H’1A’) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memorymap version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week

### COMMAND_MODULE_STATUS (H’B4’)
- DATABYTE1 = COMMAND_MODULE_STATUS (H’B4’) 
- DATABYTE2 = channel 1 to 4 status (1 = pressed / 0 = released) 
- DATABYTE3 = enabled/disable channel status (1 = enabled / 0 = disabled) 
- DATABYTE4 = learn transmiter mode (1 = learn / 0 = normal) 
- DATABYTE5 = locked channel status (0 = unlocked / 1 = locked) 
- DATABYTE6 = disabled channel program status (0 = program enabled / 1 = program disabled) 
- DATABYTE7 = alarm & program selection

### COMMAND_BUSERROR_COUNTER_STATUS (H’DA’)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (H’DA’) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_MEMORY_DATA (H’FE’)
- DATABYTE1 = COMMAND_MEMORY_DATA (H’FE’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (H’CC’)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (H’CC’) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_CHANNEL_NAME_PART1 (H’F0’)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART1 (H’F0’) 
- DATABYTE2 = Channel

### COMMAND_CHANNEL_NAME_PART2 (H’F1’)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART2 (H’F1’) 
- DATABYTE2 = Channel

### COMMAND_CHANNEL_NAME_PART3 (H’F2’)
- DATABYTE1 = COMMAND_CHANNEL_NAME_PART3 (H’F2’) 
- DATABYTE2 = Channel

### COMMAND_RF_CODE_STATUS (H’B6’)
- DATABYTE1 = COMMAND_RF_CODE_STATUS (H’B6’) 
- DATABYTE2 = Code info

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (H’F7’) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Linked push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Linked push buttons just released (1 = just released) 
- DATABYTE4 = linked push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_SET_REALTIME_CLOCK (H’D8’)
- DATABYTE1 = COMMAND_SET_REALTIME_CLOCK (H’D8’) 
- DATABYTE2 = Day of week

### COMMAND_SET_REALTIME_DATE (H’B7’)
- DATABYTE1 = COMMAND_SET_REALTIME_DATE (H’B7’) 
- DATABYTE2 = Day (1...31) 
- DATABYTE3 = Month (1...12) 
- DATABYTE4 = High byte of Year 
- DATABYTE5 = Low byte of Year

### COMMAND_SET_ALARM_CLOCK (H’C3’)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (H’C3’) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_SET_ALARM_CLOCK (H’C3’)
- DATABYTE1 = COMMAND_SET_ALARM_CLOCK (H’C3’) 
- DATABYTE2 = Alarm number (1 or 2) 
- DATABYTE3 = Wake up hour (0...23) 
- DATABYTE4 = Wake up minute (0...59) 
- DATABYTE5 = Go to bed hour (0...23) 
- DATABYTE6 = Go to bed minute (0...59) 
- DATABYTE7 = Clock alarm enable flag (0 = disabled / 1 = enabled)

### COMMAND_MODULE_STATUS_REQUEST (H’FA’)
- DATABYTE1 = COMMAND_MODULE_STATUS_REQUEST (H’FA’) 
- DATABYTE2 = don’t care

### COMMAND_CHANNEL_NAME_REQUEST (H’EF’)
- DATABYTE1 = COMMAND_CHANNEL_NAME_REQUEST (H’EF’) 
- DATABYTE2 = Channel

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED of channel 1 to 4)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 4)

### COMMAND_SLOW_BLINK_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINK_LED (H’F7’) 
- DATABYTE2 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 4)

### COMMAND_FAST_BLINK_LED (H’F8’)
- DATABYTE1 = COMMAND_FAST_BLINK_LED (H’F8’) 
- DATABYTE2 = LEDs to blink fast (a one blinks fast the corresponding LED of channel 1 to 4)

### COMMAND_VERY_FAST_BLINK_LED (H’F9’)
- DATABYTE1 = COMMAND_VERY_FAST_BLINK_LED (H’F9’) 
- DATABYTE2 = LEDs to blink very fast (a one blinks very fast the corresponding LED of channel 1 to 4)

### COMMAND_UPDATE_LED_STATUS (H’F4’)
- DATABYTE1 = COMMAND_UPDATE_LED_STATUS (H’F4’) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED of channel 1 to 4) 
- DATABYTE3 = LEDs to blink slow (a one blinks slow the corresponding LED of channel 1 to 4) 
- DATABYTE4 = LEDs to blink fast (a one blinks very fast the corresponding LED of channel 1 to 4)

### COMMAND_READ_DATA_FROM_MEMORY (H’FD’)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (H’FD’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_MEMORY_DUMP_REQUEST (H’CB’)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (H’CB’)

### COMMAND_READ_MEMORY_BLOCK (H’C9’)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (H’C9’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_WRITE_DATA_TO_MEMORY (H’FC’)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (H’FC’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory data to write Remark: Wait at least 10ms for sending a next command on the velbus. Address range: H’0000’ to H’02FF’

### COMMAND_WRITE_MEMORY_BLOCK (H’CA’)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (H’CA’) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (H’D9’)
- DATABYTE1 = COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (H’D9’)

### COMMAND_SET_CLR_LEARN_CODE (H’B5’)
- DATABYTE1 = COMMAND_SET_CLR_LEARN_CODE (H’B5’) 
- DATABYTE2 = Operating mode

### COMMAND_CANCEL_FORCED_OFF (H’13’)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (H’13’) 
- DATABYTE2 = Channel bit

### COMMAND_FORCED_OFF (H’12’)
- DATABYTE1 = COMMAND_FORCED_OFF (H’12’) 
- DATABYTE2 = Channel bit

### COMMAND_ENABLE_PROGRAM (H’B2’)
- DATABYTE1 = COMMAND_ENABLE_PROGRAM (H’B2’) 
- DATABYTE2 = Channel bit

### COMMAND_DISABLE_PROGRAM (H’B1’)
- DATABYTE1 = COMMAND_DISABLE_PROGRAM (H’B1’) 
- DATABYTE2 = channel

### COMMAND_SELECT_PROGRAM (H’B3’)
- DATABYTE1 = COMMAND_SELECT_PROGRAM (H’B3’) 
- DATABYTE2 = Program mode

### COMMAND_PUSH_BUTTON_STATUS (H’00’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (H’00’) 
- DATABYTE2 = Push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Push buttons just released (1 = just released) 
- DATABYTE4 = Push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_MODULE_STATUS (H’ED’)
- DATABYTE1 = COMMAND_MODULE_STATUS (H’ED’) 
- DATABYTE2 = Input switches status (1 = closed) 
- DATABYTE3 = LEDs continuous on status (1 = LED on) 
- DATABYTE4 = LEDs slow blinking status (1 = LED slow blinking) 
- DATABYTE5 = LEDs fast blinking status (1 = LED fast blinking) 
- DATABYTE6 = push button timer enable bits (1 = timer enabled)

### COMMAND_MODULE_TYPE (H’FF’)
- DATABYTE1 = COMMAND_MODULE_TYPE (H’FF’) 
- DATABYTE2 = PUSHBUTTON_TIMER_MODULE (H’0B’) 
- DATABYTE3 = LEDs continuous on status (1 = LED on) 
- DATABYTE4 = LEDs slow blinking status (1 = LED slow blinking) 
- DATABYTE5 = LEDs fast blinking status (1 = LED fast blinking) 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week 
- DATABYTE8 = Operating mode (bit0 = timer on/off - bit1 = 4/8 channel - bit3 = display labels/ clock)

### COMMAND_PUSH_BUTTON_NAME_PART1 (H’F0’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_NAME_PART1 (H’F0’) 
- DATABYTE2 = Push button bit number (‘00000001’ = Push button 1 ... ‘10000000’ = Push button 8) 
- DATABYTE3 = Character 1 of the push button name 
- DATABYTE4 = Character 2 of the push button name 
- DATABYTE5 = Character 3 of the push button name 
- DATABYTE6 = Character 4 of the push button name 
- DATABYTE7 = Character 5 of the push button name 
- DATABYTE8 = Character 6 of the push button name

### COMMAND_PUSH_BUTTON_NAME_PART2 (H’F1’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_NAME_PART2 (H’F1’) 
- DATABYTE2 = Push button bit number (‘00000001’ = Push button 1 ... ‘10000000’ = Push button 8) 
- DATABYTE3 = Character 7 of the push button name 
- DATABYTE4 = Character 8 of the push button name 
- DATABYTE5 = Character 9 of the push button name 
- DATABYTE6 = Character 10 of the push button name 
- DATABYTE7 = Character 11 of the push button name 
- DATABYTE8 = Character 12 of the push button name

### COMMAND_PUSH_BUTTON_NAME_PART3 (H’F2’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_NAME_PART3 (H’F2’) 
- DATABYTE2 = Push button bit number (‘00000001’ = Push button 1 / ‘10000000’ = Push button 8) 
- DATABYTE3 = Character 13 of the push button name 
- DATABYTE4 = Character 14 of the push button name 
- DATABYTE5 = Character 15 of the push button name 
- DATABYTE6 = H’FF’

### COMMAND_LCD_LINE_TEXT_PART1 (H’CD’)
- DATABYTE1 = COMMAND_LCD_LINE_TEXT_PART1 (H’CD’) 
- DATABYTE2 = lcd line bit number (‘00000001’ = line 1 ... ‘00001000’ = line 4) 
- DATABYTE3 = Character 1 of the lcd line text 
- DATABYTE4 = Character 2 of the lcd line text 
- DATABYTE5 = Character 3 of the lcd line text 
- DATABYTE6 = Character 4 of the lcd line text 
- DATABYTE7 = Character 5 of the lcd line text 
- DATABYTE8 = Character 6 of the lcd line text

### COMMAND_LCD_LINE_TEXT_PART2 (H’CE’)
- DATABYTE1 = COMMAND_LCD_LINE_TEXT_PART2 (H’CE’) 
- DATABYTE2 = lcd line bit number (‘00000001’ = line 1 ... ‘00001000’ = line 4) 
- DATABYTE3 = Character 7 of the lcd line text 
- DATABYTE4 = Character 8 of the lcd line text 
- DATABYTE5 = Character 9 of the lcd line text 
- DATABYTE6 = Character 10 of the lcd line text 
- DATABYTE7 = Character 11 of the lcd line text 
- DATABYTE8 = Character 12 of the lcd line text

### COMMAND_LCD_LINE_TEXT_PART3 (H’CF’)
- DATABYTE1 = COMMAND_LCD_LINE_TEXT_PART3 (H’CF’) 
- DATABYTE2 = lcd line bit number (‘00000001’ = line 1 ... ‘00001000’ = line 4) 
- DATABYTE3 = Character 13 of the lcd line text 
- DATABYTE4 = Character 14 of the lcd line text 
- DATABYTE5 = Character 15 of the lcd line text 
- DATABYTE6 = Character 15 of the lcd line text

### COMMAND_BACKLIGHT_STATUS (H’D6’)
- DATABYTE1 = COMMAND_BACKLIGHT_STATUS (H’D6’) 
- DATABYTE2 = Backlight/contrast status (bit7&6: lcd backlight - bit5&4: button backlight - bit3...0: lcd contrast)

### COMMAND_MEMORY_DATA (H’FE’)
- DATABYTE1 = COMMAND_MEMORY_DATA (H’FE’) 
- DATABYTE2 = High memory address (must be H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data

### COMMAND_MEMORY_DATA_BLOCK (H’CC’)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (H’CC’) 
- DATABYTE2 = High start address of memory block (must be H’00’) 
- DATABYTE3 = LOW start address of memory block (H’00’...H’FC’) 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_BUSERROR_COUNTER_STATUS (H’DA’)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (H’DA’) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_REALTIME_CLOCK_STATUS (H’D8’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (H’D8’) 
- DATABYTE2 = Day of week

### COMMAND_UPDATE_LED_STATUS (H’F4’)
- DATABYTE1 = COMMAND_UPDATE_LED_STATUS (H’F4’) 
- DATABYTE2 = LED continuous on status (1 = LED on) 
- DATABYTE3 = LED slow blinking status (1 = LED slow blinking) 
- DATABYTE4 = LED fast blinking status (1 = LED fast blinking)

### COMMAND_CLEAR_LED (H’F5’)
- DATABYTE1 = COMMAND_CLEAR_LED (H’F5’) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED)

### COMMAND_SET_LED (H’F6’)
- DATABYTE1 = COMMAND_SET_LED (H’F6’) 
- DATABYTE2 = LEDs to set (a one sets the corresponding LED)

### COMMAND_SLOW_BLINKING_LED (H’F7’)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (H’F7’) 
- DATABYTE2 = LEDs to blink slow (1 = slow blinking)

### COMMAND_FAST_BLINKING_LED (H’F8’)
- DATABYTE1 = COMMAND_FAST_BLINKING_LED (H’F8’) 
- DATABYTE2 = LEDs to blink fast (1 = fast blinking)

### COMMAND_VERYFAST_BLINKING_LED (H’F9’)
- DATABYTE1 = COMMAND_VERYFAST_BLINKING_LED (H’F9’) 
- DATABYTE2 = LEDs to clear (1 = very fast blinking)

### COMMAND_MODULE_STATUS_REQUEST (H’FA’)
- DATABYTE1 = COMMAND_MODULE_STATUS_REQUEST (H’FA’) 
- DATABYTE2 = Input channel bit numbers (B‘11111111’)

### COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (H’D9’)
- DATABYTE1 = COMMAND_BUS_ERROR_COUNTER_STATUS_REQUEST (H’D9’)

### COMMAND_PUSH_BUTTON_NAME_REQUEST (H’EF’)
- DATABYTE1 = COMMAND_PUSH_BUTTON_NAME_REQUEST (H’EF’) 
- DATABYTE2 = Push button number (B‘00000001’ = Push button 1 ... B‘10000000’ = Push button 8)

### COMMAND_LCD_LINE_TEXT_REQUEST (H’D0’)
- DATABYTE1 = COMMAND_LCD_LINE_TEXT_REQUEST (H’D0’) 
- DATABYTE2 = Push button number (B‘00000001’ = line 1 ... B‘00001000’ = line 4)

### COMMAND_BACKLIGHT_CONTRAST_STATUS_REQUEST (H’D5’)
- DATABYTE1 = COMMAND_BACKLIGHT_CONTRAST_STATUS_REQUEST (H’D5’)

### COMMAND_SET_LCD_BACKLIGHT (H’F3’)
- DATABYTE1 = COMMAND_SET_LCD_BACKLIGHT (H’F3’) 
- DATABYTE2 = Backlight value (H’00’ = off, H’01’ = dim low, H’02’ = dim high, H’03’ = max)

### COMMAND_RETURN_TO_DEFAULT_LCD_BACKLIGHT (H’D2’)
- DATABYTE1 = COMMAND_RETURN_TO_DEFAULT_LCD_BACKLIGHT (H’D2’)

### COMMAND_SET_PUSH_BUTTON_BACKLIGHT (H’D4’)
- DATABYTE1 = COMMAND_SET_PUSH_BUTTON_BACKLIGHT (H’D4’) 
- DATABYTE2 = Backlight value (H’00’ = off, H’01’ = dim low, H’02’ = dim high, H’03’ = max)

### COMMAND_RETURN_TO_DEFAULT_PUSH_BUTTON_BACKLIGHT (H’D3’)
- DATABYTE1 = COMMAND_RETURN_TO_DEFAULT_PUSH_BUTTON_BACKLIGHT (H’D3’)

### COMMAND_READ_DATA_FROM_MEMORY (H’FD’)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (H’FD’) 
- DATABYTE2 = High memory address (must be H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’)

### COMMAND_MEMORY_DUMP_REQUEST (H’CB’)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (H’CB’)

### COMMAND_WRITE_DATA_TO_MEMORY (H’FC’)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (H’FC’) 
- DATABYTE2 = High memory address (must be H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FF’) 
- DATABYTE4 = memory data to write

### COMMAND_WRITE_MEMORY_BLOCK (H’CA’)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (H’CA’) 
- DATABYTE2 = High memory address (must be H’00’) 
- DATABYTE3 = LOW memory address (H’00’...H’FC’) 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write

### COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS_REQUEST (H’D7’)

### COMMAND_REALTIME_CLOCK_STATUS (H’D8’)
- DATABYTE1 = COMMAND_REALTIME_CLOCK_STATUS (H’D8’) 
- DATABYTE2 = Day of week

### COMMAND_ENABLE_TIMER_CHANNELS (H’D1’)
- DATABYTE1 = COMMAND_ENABLE_TIMER_CHANNELS (H’D1’) 
- DATABYTE2 = Push button channels ( a one enables and a zero disables the timer for a push button)

### COMMAND_PUSH_BUTTON_STATUS (0x00)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (0x00) 
- DATABYTE2 = Dimmer channel just switched on (1 = just pressed / switched on) 
- DATABYTE3 = Dimmer channel just switched off (1 = just released / switched off) 
- DATABYTE4 = 0

### COMMAND_SLIDER_STATUS (0x0F)
- DATABYTE1 = COMMAND_SLIDER_STATUS (0x0F) 
- DATABYTE2 = Dimmer slider channel

### COMMAND_CLEAR_LED (0xF5)
- DATABYTE1 = COMMAND_CLEAR_LED (0xF5) 
- DATABYTE2 = LED bit numbers (1 = clear LED)

### COMMAND_SET_LED (0xF6)
- DATABYTE1 = COMMAND_SET_LED (0xF6) 
- DATABYTE2 = LED bit numbers (1 = set LED)

### COMMAND_SLOW_BLINKING_LED (0xF7)
- DATABYTE1 = COMMAND_SLOW_BLINKING_LED (0xF7) 
- DATABYTE2 = LED bit numbers (1 = slow blink LED)

### COMMAND_FAST_BLINKING_LED (0xF8)
- DATABYTE1 = COMMAND_FAST_BLINKING_LED (0xF8) 
- DATABYTE2 = LED bit numbers (1 = fast blink LED)

### COMMAND_DIMMERCONTROLLER_STATUS (0xB8)
- DATABYTE1 = COMMAND_DIMMERCONTROLLER_STATUS (0xB8) 
- DATABYTE2 = Dimmer channel

### COMMAND_MODULE_TYPE (0xFF)
- DATABYTE1 = COMMAND_MODULE_TYPE (0xFF) 
- DATABYTE2 = VMB4DC type (0x12) 
- DATABYTE3 = High byte of serial number 
- DATABYTE4 = Low byte of serial number 
- DATABYTE5 = Memory map version 
- DATABYTE6 = Build year 
- DATABYTE7 = Build week

### COMMAND_BUSERROR_COUNTER_STATUS (0xDA)
- DATABYTE1 = COMMAND_BUSERROR_COUNTER_STATUS (0xDA) 
- DATABYTE2 = Transmit error counter 
- DATABYTE3 = Receive error counter 
- DATABYTE4 = Bus off counter

### COMMAND_DIMMER_NAME_PART1 (0xF0)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART1 (0xF0) 
- DATABYTE2 = Dimmer channel

### COMMAND_DIMMER_NAME_PART2 (0xF1)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART2 (0xF1) 
- DATABYTE2 = Dimmer channel

### COMMAND_DIMMER_NAME_PART3 (0xF2)
- DATABYTE1 = COMMAND_DIMMER_NAME_PART3 (0xF2) 
- DATABYTE2 = Dimmer channel

### COMMAND_MEMORY_DATA (0xFE)
- DATABYTE1 = COMMAND_MEMORY_DATA (0xFE) 
- DATABYTE2 = High memory address

### COMMAND_MEMORY_DATA_BLOCK (0xCC)
- DATABYTE1 = COMMAND_MEMORY_DATA_BLOCK (0xCC) 
- DATABYTE2 = High start address of memory block 
- DATABYTE3 = LOW start address of memory block 
- DATABYTE4 = memory data1 
- DATABYTE5 = memory data2 
- DATABYTE6 = memory data3 
- DATABYTE7 = memory data4

### COMMAND_PUSH_BUTTON_STATUS (0x00)
- DATABYTE1 = COMMAND_PUSH_BUTTON_STATUS (0x00) 
- DATABYTE2 = Push buttons just pressed (1 = just pressed) 
- DATABYTE3 = Push buttons just released (1 = just released) 
- DATABYTE4 = Push buttons long pressed (1 = longer than 0.85s pressed)

### COMMAND_SLIDER_STATUS (0x0F)
- DATABYTE1 = COMMAND_SLIDER_STATUS (0x0F) 
- DATABYTE2 = Slider channel 
- DATABYTE3 = Slider status (0...100%) 
- DATABYTE4 = don’t care

### COMMAND_CLEAR_LED (0xF5)
- DATABYTE1 = COMMAND_CLEAR_LED (0xF5) 
- DATABYTE2 = LEDs to clear (a one clears the corresponding LED)

### COMMAND_SET_DIMVALUE (0x07)
- DATABYTE1 = COMMAND_SET_DIMVALUE (0x07) 
- DATABYTE2 = Dimmer channel

### COMMAND_RESTORE_LAST_DIMVALUE (0x11)
- DATABYTE1 = COMMAND_RESTORE_LAST_DIMVALUE (0x11) 
- DATABYTE2 = Dimmer channel

### COMMAND_STOP_DIMMING (0x10)
- DATABYTE1 = COMMAND_STOP_DIMMING (0x10) 
- DATABYTE2 = Dimmer channel

### COMMAND_START_DIMMER_TIMER (0x08)
- DATABYTE1 = COMMAND_START_DIMMER_TIMER (0x08) 
- DATABYTE2 = Dimmer channel

### COMMAND_FORCED_OFF (0x12)
- DATABYTE1 = COMMAND_FORCED_OFF (0x12) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_FORCED_OFF (0x13)
- DATABYTE1 = COMMAND_CANCEL_FORCED_OFF (0x13) 
- DATABYTE2 = Dimmer channel

### COMMAND_FORCED_ON (0x14)
- DATABYTE1 = COMMAND_FORCED_ON (0x14) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_FORCED_ON (0x15)
- DATABYTE1 = COMMAND_CANCEL_FORCED_ON (0x15) 
- DATABYTE2 = Dimmer channel

### COMMAND_INHIBIT (0x16)
- DATABYTE1 = COMMAND_INHIBIT (0x16) 
- DATABYTE2 = Dimmer channel

### COMMAND_CANCEL_INHIBIT (017)
- DATABYTE1 = COMMAND_CANCEL_INHIBIT (017) 
- DATABYTE2 = Dimmer channel

### COMMAND_DIMMER_STATUS_REQUEST (0xFA)
- DATABYTE1 = COMMAND_DIMMER_STATUS_REQUEST (0xFA) 
- DATABYTE2 = Dimmer channel

### COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)
- DATABYTE1 = COMMAND_BUS_ERROR_CONTER_STATUS_REQUEST (0xD9)

### COMMAND_DIMMER_NAME_REQUEST (0xEF)
- DATABYTE1 = COMMAND_DIMMER_NAME_REQUEST (0xEF) 
- DATABYTE2 = Dimmer channel

### COMMAND_READ_DATA_FROM_MEMORY (0xFD)
- DATABYTE1 = COMMAND_READ_DATA_FROM_MEMORY (0xFD) 
- DATABYTE2 = High memory address

### COMMAND_MEMORY_DUMP_REQUEST (0xCB)
- DATABYTE1 = COMMAND_MEMORY_DUMP_REQUEST (0xCB)

### COMMAND_READ_MEMORY_BLOCK (0xC9)
- DATABYTE1 = COMMAND_READ_MEMORY_BLOCK (0xC9) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address

### COMMAND_WRITE_DATA_TO_MEMORY (0xFC)
- DATABYTE1 = COMMAND_WRITE_DATA_TO_MEMORY (0xFC) 
- DATABYTE2 = High memory address

### COMMAND_WRITE_MEMORY_BLOCK (0xCA)
- DATABYTE1 = COMMAND_WRITE_MEMORY_BLOCK (0xCA) 
- DATABYTE2 = High memory address 
- DATABYTE3 = LOW memory address 
- DATABYTE4 = memory databyte1 to write 
- DATABYTE5 = memory databyte2 to write 
- DATABYTE6 = memory databyte3 to write 
- DATABYTE7 = memory databyte4 to write