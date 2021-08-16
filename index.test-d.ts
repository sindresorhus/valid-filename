import {expectType} from 'tsd';
import isValidFilename from './index.js';

expectType<boolean>(isValidFilename('foo/bar'));
