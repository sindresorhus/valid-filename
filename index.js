'use strict';
var filenameReservedRegex = require('filename-reserved-regex');

module.exports = function (str) {
	return str && (str.length <= 255 && !filenameReservedRegex().test(str));
};
