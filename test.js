import test from 'ava';
import fn from './';

test(t => {
	t.true(fn('foo-bar'));
	t.false(fn('foo/bar'));
	t.false(fn('<foo|bar>'));
});
