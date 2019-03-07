'use strict';
const filenameReservedRegex = require('filename-reserved-regex');

const validFilename = str => {
	if (!str || str.length > 255) {
		return false;
	}

	if (filenameReservedRegex().test(str) || filenameReservedRegex.windowsNames().test(str)) {
		return false;
	}

	if (/^\.\.?$/.test(str)) {
		return false;
	}

	return true;
};

module.exports = validFilename;
module.exports.default = validFilename;
