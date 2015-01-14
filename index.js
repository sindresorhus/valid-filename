'use strict';
var filenameReservedRegex = require('filename-reserved-regex');

module.exports = function (str) {
	return !filenameReservedRegex().test(str);
};
