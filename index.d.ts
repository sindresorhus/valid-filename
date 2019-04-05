declare const validFilename: {
	/**
	Check if a string is a [valid filename](https://github.com/sindresorhus/filename-reserved-regex).

	@param input - The string to check.
	@returns Whether `input` is a valid filename.

	@example
	```
	import validFilename = require('valid-filename');

	validFilename('foo/bar');
	//=> false

	validFilename('foo-bar');
	//=> true
	```
	*/
	(input: string): boolean;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function validFilename(input: string): boolean;
	// export = validFilename;
	default: typeof validFilename;
};

export = validFilename;
