/**
 * Loosely inspired by https://github.com/openhab/openhab2-addons/blob/3268618aaa53812835140d2bde5fc10f57d6d743/addons/binding/org.openhab.binding.velbus/src/main/java/org/openhab/binding/velbus/internal/VelbusBindingConstants.java
 */
class Packet {

	static get COMMAND_BUTTON() {
		return 0x00
	};

	static get PRIORITY_HIGH() {
		return 0xF8
	};

	static get PRIORITY_LOW() {
		return 0xFB
	};

	static get MAX_PACKET_SIZE() {
		return 14
	};

	static get STX() {
		return 0x0F
	};

	static get ETX() {
		return 0x04
	};


	constructor(address, packetPriority = Packet.PRIORITY_HIGH, dataBytes = null, rtr = false) {

		this.rawPacket = [];

		this.address = address;
		this.priority = packetPriority;
		this.rtr = rtr;
		if (dataBytes) {
			this.setDataBytes(dataBytes);
			this.pack();
		}
		return this;
	}


	/// Gets or sets the address of the packet.
	get address() {
		return this.rawPacket[2];
	}

	set address(value) {
		if ((value < 0) || (value > 0xFF)) {
			throw "Valid address range between 0 and 255.";
		}
		this.rawPacket[2] = value;

	}


	/// Gets or sets the datasize of the packet. - Not to be mistaken with size!
	get dataSize() {
		//trace( ">get dataSize : " + (this.rawPacket[3] & 0x0F) % 256);
		return this.rtr ? 0 : this.rawPacket[3];
	}

	set dataSize(value) {
		this.rawPacket[3] = value;
	}

	/// Gets the total size of the packet in its raw form.
	get size() {
		return (this.dataSize + 6);
	}

	/// Gets or sets the priority of the packet.
	get priority() {
		return (this.rawPacket[1]);
	}

	set priority(value) {
		this.rawPacket[1] = value;
	}

	/// Gets or sets the request to reply state of the packet.
	set rtr(value) {
		var tmp = this.rawPacket[3];
		if (value) {
			this.rawPacket[3] = (tmp | 0x40);
		} else {
			this.rawPacket[3] = (tmp | 0x0F);
		}
	}

	get rtr() {
		return ((this.rawPacket[3] & 0x40) === 0x40);
	}

	/// Gets the databyte at the specified position idx.
	getDataByte(idx) {
		return this.rawPacket[4 + idx];
	}

	//sets the databyte at the specified position idx.
	setDataByte(idx, value) {
		this.rawPacket[4 + idx] = value;
	}

	setDataBytes(ba) {
		for (let i = 0; i < ba.length; i++) {
			this.setDataByte(i, ba[i]);
		}
		this.dataSize = ba.length;
		return this;
	}

	//sets the raw byte at the specified position idx.
	setRawByte(idx, value) {
		this.rawPacket[idx] = (value);
	}

	setRawBytes(ba) {
		for (let i = 0; i < ba.length; i++) {
			this.setRawByte(i, ba[i]);
		}
		this.dataSize = this.rtr ? 0x40 : ba.length - 6;
		return this;
	}

	setRawBytesAndPack(ba) {
		this.setRawBytes(ba);
		this.pack();
		return this;
	}

	/**
	 * Gets or sets the command byte of the packet. Since the command
	 * byte is the first databyte, the datasize needs to be greater or equal to one.
	 */
	get command() {
		if (this.dataSize === 0) {
			return 0
		} else {
			return this.getDataByte(0);
		}
	}

	set command(value) {
		this.setDataByte(0, value);
	}

	/// Checks if the packet has a command byte (eg. if DataSize >= 1).
	get hasCommand() {
		return (this.dataSize >= 1);
	}

	/**
	 * Packs the byte so it is ready for sending. Packing involves adding a checksum and the frame delimiters.
	 * Returns a raw representation of the packet.
	 */
	pack() {
		this.rawPacket[0] = (Packet.STX);
		this.rawPacket[this.size - 1] = (Packet.ETX); //order is important
		this.rawPacket[this.size - 2] = (this.checksum_Crc8());

		return this.rawPacket;
	}

	/// Calculates the 2's complement checksum of a specified buffer.
	checksum_Crc8() {

		let crc = 0;

		for (let i = 0; i < this.rawPacket.length - 2; i++) {
			crc = (crc + (this.rawPacket[i] & 0xFF)) & 0xFF;
		}

		return (0x100 - crc);

	}

	/// Clones this packet.
	clone() {
		let packet = new Packet(this.address);
		for (var i = 0; i < this.size; i++) {
			packet.setDataByte(i, this.rawPacket[i]);
		}
		return packet;
	}

	toString() {
		return `adress: ${this.dec2hex(this.address)} - priority: ${this.dec2hex(this.priority)} - rtr: ${this.rtr} - command: ${this.dec2hex(this.command)} - data: ${this.getDataBytesAsString()} - raw: ${this.getRawDataAsString()}`;
	}

	getRawDataAsString() {
		let s = "";
		for (let i = 0; i < this.size; i++) {
			s += this.dec2hex(this.rawPacket[i]) + " ";
		}
		return s;
	}

	getRawBuffer() {
		let b = new Buffer(this.size);
		for (let i = 0; i < this.size; i++) {
			b[i] = this.rawPacket[i];
		}
		return b;
	}

	getDataBytes() {
		var ba = [];
		for (let i = 0; i < this.dataSize; i++) {
			ba.push(this.rawPacket[i + 4]);
		}
		return ba;
	}

	getDataBytesAsString() {
		let s = "";
		for (let i = 4; i < this.dataSize; i++) {
			s += this.dec2hex(this.getDataByte(i)) + " ";
		}
		return s;
	}

	getRawPacket() {
		return this.rawPacket;
	}

	dec2hex(d) {
		if (isNaN(d)) {
			return "NaN"
		}
		let s = d.toString(16).toUpperCase();
		if (s.length === 1) s = "0" + s;
		return s
	}

	static getRealChannel(channel) {
		//modules like VMBEL0 have more than one address, so we have to find the right one depending on the address
		//there are only 8 channels per address
		let realChannel = channel;
		while (realChannel > 8) {
			realChannel = realChannel - 8;
		}
		return realChannel;
	}

	static getRealAddress(address, channel) {
		//modules like VMBEL0 have more than one address, so we have to find the right one depending on the address
		//there are only 8 channels per address
		let realChannel = channel;
		let realAddress = address;
		let cnt = 0;
		const moduleMetaData = global.velbus.modules.find(i => i.address === address);
		while (realChannel > 8) {
			realChannel = realChannel - 8;
			realAddress = moduleMetaData.extraAddresses[cnt];
			cnt++;
		}
		return realAddress;
	}

}

module.exports = Packet;
