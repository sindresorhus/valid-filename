# valid-filename [![Build Status](https://travis-ci.org/sindresorhus/valid-filename.svg?branch=master)](https://travis-ci.org/sindresorhus/valid-filename)

> Check if a string is a [valid filename](https://github.com/sindresorhus/filename-reserved-regex)


## Install

```
$ npm install --save valid-filename
```


## Usage

```js
var validFilename = require('valid-filename');

validFilename('foo/bar');
//=> false

validFilename('foo-bar');
//=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
