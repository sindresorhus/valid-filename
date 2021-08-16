import test from 'ava';
import validFilename from './index.js';

test('main', t => {
	t.true(validFilename('foo-bar'));
	t.false(validFilename('foo/bar'));
	t.false(validFilename(''));
	t.false(validFilename('<foo|bar>'));
	t.false(validFilename('con'));
	t.false(validFilename('aux'));
	t.false(validFilename('com1'));
	t.false(validFilename('lpt1'));
	t.true(validFilename('nul1'));
	t.true(validFilename('aux1'));
	t.true(validFilename('a'.repeat(255)));
	t.false(validFilename('a'.repeat(256)));
	t.false(validFilename('.'));
	t.false(validFilename('..'));
	t.true(validFilename('...'));
});
