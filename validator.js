const validator = {
	isValid(creditCardNumber) {
		if (!creditCardNumber) return false;
		const digitsReverse = creditCardNumber.toString().split('').map(Number).reverse();
		const doubleInEvenPosition = digitsReverse
			.map((digit, idx) => (idx % 2 !== 0 ? this.fixTwoDigits(digit * 2) : digit))
			.reduce((acc, current) => acc + current);
		return doubleInEvenPosition % 10 === 0;
	},
	fixTwoDigits(digit) {
		return digit > 9 ? digit - 9 : digit;
	},
	maskify(creditCardNumber) {
		return creditCardNumber.toString().replace(/.(?=.{4})/g, '#');
	},
};
// only for testing (node)
/* module.exports = validator; */
// EMS6
export default validator;
