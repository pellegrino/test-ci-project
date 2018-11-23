var test = require('tap').test,
  Foobar = require('../lib/foobar');

test('setup', function(t) {
  foobar = new Foobar('foobar');
  t.ok(foobar);
  t.end();
});

test('foobar', function(t) {
  t.equal('foobar', foobar.foobar());
  t.end();
});

test('teardown', function(t) {
  t.ok(true);
  t.end();
});


