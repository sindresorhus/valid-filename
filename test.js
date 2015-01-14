'use strict';
var test = require('ava');
var validFilename = require('./');

test(function (t) {
	t.assert(validFilename('foo-bar'));
	t.assert(!validFilename('foo/bar'));
	t.assert(!validFilename('<foo|bar>'));
	t.end();
});
