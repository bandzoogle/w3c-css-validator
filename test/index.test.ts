// Imports
import cssValidator from '../src';

// Tests
describe('#validateText()', () => {
	it('Returns the validity and errors when no options are provided', async () => {
		expect(await cssValidator.validateText('.foo { text-align: center; }')).toStrictEqual({
			valid: true,
			errors: [],
		});
	});

	it('Returns the validity, errors, and warnings when a warning level option is provided', async () => {
		expect(await cssValidator.validateText('.foo { text-align: center; }', { warningLevel: 1 })).toStrictEqual({
			valid: true,
			errors: [],
			warnings: [],
		});
	});

	it('Includes errors present in the response on the result', async () => {
		expect(await cssValidator.validateText('.foo { text-align: center; ')).toStrictEqual({
			valid: false,
			errors: [
				{
					line: 1,
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					message: expect.any(String),
				},
			],
		});
	});
});
