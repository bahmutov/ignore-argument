(function (ignoreArgument) {

  function assert(ok) {
    if (!ok) {
      throw new Error(Array.prototype.slice.call(arguments, 1).join(' '));
    }
  }

  assert(typeof ignoreArgument === 'function');
  var ia = ignoreArgument;

  (function testIgnoreFirst() {
    function foo(a, b) {
      assert(a === 'a', 'a should be a, not', a);
      assert(b === 'b', 'b should be b, not', b);
    }

    foo('a', 'b');

    function bar(cb) {
      assert(typeof cb === 'function', 'callback is a function', cb);
      // calls cb with 3 arguments!
      cb('foo', 'a', 'b');
    }

    // bar(foo);
    // throws an error

    // ignore first argument
    bar(ia(foo, true));
  }());

  (function testIgnoreFirstAndThird() {
    function foo(a, b) {
      assert(a === 'a', 'a should be a, not', a);
      assert(b === 'b', 'b should be b, not', b);
    }

    foo('a', 'b');

    function bar(cb) {
      assert(typeof cb === 'function', 'callback is a function', cb);
      // calls cb with 4 arguments!
      cb('foo', 'a', 'bar', 'b');
    }

    // ignore first and third arguments
    bar(ia(foo, true, false, true));
  }());

  (function testParseInt() {
    var str = ['1', '2', '3'];

    var ints = str.map(ia(parseInt, false, true));
    console.log(ints);
    assert(ints[0] === 1, ints);
    assert(ints[1] === 2, ints);
    assert(ints[2] === 3, ints);

  }());

}(window.ignoreArgument));
