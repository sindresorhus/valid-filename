'use strict';
const filenameReservedRegex = require('filename-reserved-regex');

const validFilename = string => {
	if (!string || string.length > 255) {
		return false;
	}

	if (filenameReservedRegex().test(string) || filenameReservedRegex.windowsNames().test(string)) {
		return false;
	}

	if (/^\.\.?$/.test(string)) {
		return false;
	}

	return true;
};

module.exports = validFilename;
// TODO: Remove this for the next major release
module.exports.default = validFilename;
