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
