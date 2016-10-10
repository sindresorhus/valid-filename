'use strict';
var reserved = require('filename-reserved-regex');

module.exports = (str) => {
	if (!str || str.length > 255) {
		return false;
	}

	if (reserved().test(str) || reserved.windowsNames().test(str)) {
		return false;
	}

	return true;
};
