import {expectType} from 'tsd';
import validFilename = require('.');

expectType<boolean>(validFilename('foo/bar'));
