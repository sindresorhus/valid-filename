'use strict';
const filenameReservedRegex = require('filename-reserved-regex');

module.exports = str => {
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
