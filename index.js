import validator from './validator.js';

const btnPayment = document.getElementById('btnPayment');
const creditCardInput = document.getElementById('creditCardInput');
const alertTemplate = document.getElementById('alertTemplate').content;
const statusForm = false;
btnPayment.addEventListener('click', (e) => {
	btnPayment.disabled = !statusForm;
	e.preventDefault();
	if (!creditCardInput) return;
	const responseValid = validator.isValid(creditCardInput.value);
	const cloneAlert = alertTemplate.cloneNode(true);
	const alertContainer = cloneAlert.querySelector('.alert');
	const alertIcon = cloneAlert.querySelector('.material-icons');
	const alertType = cloneAlert.querySelector('.alert__type');
	const alertMessage = cloneAlert.querySelector('.alert__message');
	if (responseValid) {
		alertType.textContent = 'Success';
		alertMessage.textContent = 'Your credit card is valid :)';
		alertContainer.classList.add('alert--success');
		alertIcon.classList.add('alert__icon--success');
		alertIcon.textContent = 'check_circle';
	} else {
		alertType.textContent = 'Error';
		alertMessage.textContent = 'Your credit card is invalid, prease try again :(';
		alertContainer.classList.add('alert--error');
		alertIcon.classList.add('alert__icon--error');
		alertIcon.textContent = 'report_problem';
	}
	document.body.appendChild(cloneAlert);
	setTimeout(() => {
		alertContainer.remove();
		btnPayment.disabled = false;
	}, 3000);
});
creditCardInput.addEventListener('keypress', (e) => {
	const rEgex = /^\d+$/g;
	if (!rEgex.test(e.key)) {
		e.preventDefault();
	}
});
creditCardInput.addEventListener('keyup', (e) => {
	const inputValue = e.target.value;
	document.querySelector('.payment__number').textContent = validator.maskify(inputValue);
});
