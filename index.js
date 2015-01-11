(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('ignoreArgument', [], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['ignoreArgument'] = factory();
  }
}(this, function () {

/* jshint -W098 */
function ignoreArgument(fn) {
  var ignores = Array.prototype.slice.call(arguments, 1);

  function isIgnored(k) {
    return k < ignores.length && ignores[k];
  }

  return function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var remainingArgs = args.filter(function (a, k) {
      return !isIgnored(k);
    });
    return fn.apply(null, remainingArgs);
  };
}

return ignoreArgument;

}));
