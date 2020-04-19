'use strict';

let Utils = {
	bitAtGivenPosSetOrUnset(binary, position) {
		const new_num = binary >> (position - 1);
		//console.log("set bin pos:", new_num, binary, position);
		// if it results to true then bit is set,
		// else it results to false bit is unset
		//console.log("1/0:", new_num & 1);
		return (new_num & 1) === 1;
	}
};

module.exports = Utils;