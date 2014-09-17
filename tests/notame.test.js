var assert = require('assert');

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

suite('sync');

test("timeout", function(){
    ok(true);
});

suite('String');

test('#length', function(){
    ok('foo'.length == 3);
});
