import test from 'ava';
import fn from './';

test(t => {
	t.true(fn('foo-bar'));
	t.false(fn('foo/bar'));
	t.false(fn(''));
	t.false(fn('<foo|bar>'));
	t.false(fn('con'));
	t.false(fn('aux'));
	t.false(fn('com1'));
	t.false(fn('lpt1'));
	t.true(fn('nul1'));
	t.true(fn('aux1'));
	t.true(fn('a'.repeat(255)));
	t.false(fn('a'.repeat(256)));
});
