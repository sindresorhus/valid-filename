import {expectType} from 'tsd-check';
import validFilename from '.';

expectType<boolean>(validFilename('foo/bar'));
