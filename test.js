import test from 'ava';
import m from './';

test(t => {
	t.true(m('foo-bar'));
	t.false(m('foo/bar'));
	t.false(m(''));
	t.false(m('<foo|bar>'));
	t.false(m('con'));
	t.false(m('aux'));
	t.false(m('com1'));
	t.false(m('lpt1'));
	t.true(m('nul1'));
	t.true(m('aux1'));
	t.true(m('a'.repeat(255)));
	t.false(m('a'.repeat(256)));
});
