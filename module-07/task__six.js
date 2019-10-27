const validationInput = document.querySelector('#validation-input');
const validTreshold = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('change', inputValidation);

function inputValidation() {
    validationInput.classList.add('invalid');

    if (validationInput.value.length === validTreshold) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }

    if (validationInput.value === '') {
        validationInput.classList.remove('valid', 'invalid');
    }
}