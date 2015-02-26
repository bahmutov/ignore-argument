# ignore-argument

> Like Function.prototype.bind / partial application to ignore arguments.

[![NPM][ignore-argument-icon] ][ignore-argument-url]

[![Build status][ignore-argument-ci-image] ][ignore-argument-ci-url]
[![dependencies][ignore-argument-dependencies-image] ][ignore-argument-dependencies-url]
[![devdependencies][ignore-argument-devdependencies-image] ][ignore-argument-devdependencies-url]

Available on NPM and bower under name `ignore-argument`.

Sometimes you need to create temp functions just to ignore some arguments

```js
function foo(a, b) { ... }
function bar(cb) {
  // calls cb with 3 arguments!
  cb('foo', 'a', 'b');
}
bar(foo); // does not work, throws an error
bar(function (first, a, b) {
    // first argument is ignored
    return foo(a, b);
});
```

**ignore-argument** allows skipping (ignoring) arguments by position. Same example as above

```js
bar(ignoreArgument(foo, true)); // ignored first argument to foo
```

You can ignore multiple arguments. For example to ignore first and third:

```js
function bar(cb) {
  // calls cb with 4 arguments!
  cb('foo', 'a', 'bar', 'b');
}
// ignore first and third arguments
bar(ignoreArgument(foo, true, false, true));
```

You can also quickly solve the [Madness of JavaScript][madness] problem.

```js
['1', '2', '3'].map(parseInt); // [1, NaN, NaN]
['1', '2', '3'].map(ignoreArgument(parseInt, false, true)); // [1, 2, 3]
```

Related projects: 

* [spots](https://github.com/bahmutov/spots)
* [functional-pipeline][fp]
* [heroin](https://github.com/bahmutov/heroin)

Read about functional utilities

* [Point-free is not pointless](http://glebbahmutov.com/blog/point-free-programming-is-not-pointless/)
* [Selective application](http://glebbahmutov.com/blog/selective-partial-application/)
* [My favorite functional adaptors](http://glebbahmutov.com/blog/my-favorite-functional-adaptors/)

[madness]: https://github.com/raganwald-deprecated/homoiconic/blob/master/2013/01/madness.md
[fp]: https://github.com/bahmutov/functional-pipeline

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/ignore-argument/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[ignore-argument-icon]: https://nodei.co/npm/ignore-argument.png?downloads=true
[ignore-argument-url]: https://npmjs.org/package/ignore-argument
[ignore-argument-ci-image]: https://travis-ci.org/bahmutov/ignore-argument.png?branch=master
[ignore-argument-ci-url]: https://travis-ci.org/bahmutov/ignore-argument
[ignore-argument-dependencies-image]: https://david-dm.org/bahmutov/ignore-argument.png
[ignore-argument-dependencies-url]: https://david-dm.org/bahmutov/ignore-argument
[ignore-argument-devdependencies-image]: https://david-dm.org/bahmutov/ignore-argument/dev-status.png
[ignore-argument-devdependencies-url]: https://david-dm.org/bahmutov/ignore-argument#info=devDependencies
