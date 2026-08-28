import filenameReservedRegex, {windowsReservedNameRegex} from 'filename-reserved-regex';

export default function isValidFilename(string) {
	if (!string || string.length > 255) {
		return false;
	}

	if (string === '.' || string === '..') {
		return false;
	}

	if (windowsReservedNameRegex().test(string)) {
		return false;
	}

	// Strip trailing dots/spaces before testing, since the regex rejects them
	// but they are valid in filenames (only `.` and `..` are invalid, handled above).
	let trimmed = string;
	while (trimmed.endsWith('.') || trimmed.endsWith(' ')) {
		trimmed = trimmed.slice(0, -1);
	}

	return !(trimmed && filenameReservedRegex().test(trimmed));
}
