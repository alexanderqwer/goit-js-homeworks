const userInputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

userInputName.addEventListener('input', () => {
    outputName.textContent = userInputName.value;
    if (userInputName.value === '') outputName.textContent = 'незнакомец';
});