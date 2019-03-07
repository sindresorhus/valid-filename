# valid-filename [![Build Status](https://travis-ci.org/sindresorhus/valid-filename.svg?branch=master)](https://travis-ci.org/sindresorhus/valid-filename)

> Check if a string is a [valid filename](https://github.com/sindresorhus/filename-reserved-regex)


## Install

```
$ npm install --save valid-filename
```


## Usage

```js
const validFilename = require('valid-filename');

validFilename('foo/bar');
//=> false

validFilename('foo-bar');
//=> true
```

## API

### validFilename(input)

Returns a `boolean` of whether `input` is a valid filename or not.

#### input

Type: `string`

The string to check for whether it is a valid filename.

## Related

- [filenamify](https://github.com/sindresorhus/filenamify) - Convert a string to a valid safe filename


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
