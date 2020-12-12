const validator = require('../validator.js');

describe('validator', () => {
	test('is a object', () => {
		expect(typeof validator).toBe('object');
	});
	describe('validator.isValid', () => {
		test.skip('should be a function', () => {
			expect(typeof validator.isValid).toBe('function');
		});
		test.skip('it should return true for "4083952015263"', () => {
			expect(validator.isValid(4083952015263)).toBe(true);
		});
		test.skip('it should return true for "79927398713"', () => {
			expect(validator.isValid(79927398713)).toBe(true);
		});
		test.skip('it should return false for "1234567890"', () => {
			expect(validator.isValid(1234567890)).toBe(false);
		});
	});
	describe('validator.maskify', () => {
		test('debería ser una función', () => {
			expect(typeof validator.maskify).toBe('function');
		});
		test('Debería retornar "############5616" para "4556364607935616"', () => {
			expect(validator.maskify(4556364607935616)).toBe('############5616');
		});
		test('Debería retornar "1" para "1"', () => {
			expect(validator.maskify(1)).toBe('1');
		});
		test('Debería retornar "######orld" para "helloworld"', () => {
			expect(validator.maskify('helloworld')).toBe('######orld');
		});
	});
});
