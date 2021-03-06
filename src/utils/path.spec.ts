import * as assert from 'assert';
import * as path from 'path';

import * as util from './path';

describe('Utils → Path', () => {
	describe('.isDotDirectory', () => {
		it('should return true for dot directory', () => {
			const actual = util.isDotDirectory('fixtures/.directory');

			assert.ok(actual);
		});

		it('should return false for non-dot directory', () => {
			const actual = util.isDotDirectory('fixtures/.directory/directory');

			assert.ok(!actual);
		});
	});

	describe('.getDepth', () => {
		it('should returns 4', () => {
			const expected: number = 4;

			const actual = util.getDepth('a/b/c/d.js');

			assert.equal(actual, expected);
		});
	});

	describe('.resolve', () => {
		it('should return resolved filepath', () => {
			const expected = path.join(process.cwd(), 'file.md');

			const actual = util.resolve(process.cwd(), 'file.md');

			assert.equal(actual, expected);
		});
	});

	describe('.normalize', () => {
		it('should return path with converted slashes', () => {
			const expected = 'directory/nested/file.md';

			const actual = util.normalize('directory\\nested/file.md');

			assert.equal(actual, expected);
		});
	});
});
