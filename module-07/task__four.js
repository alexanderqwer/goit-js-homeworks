const counterValue = document.querySelector('#value');
let register = Number(document.querySelector('#value').textContent);

const decrement = () => {
    register -= 1;
    value.textContent = register;
};

const increment = () => {
    register += 1;
    value.textContent = register;
};

const btnDecr = document.querySelector('button[data-action="decrement"]');
btnDecr.addEventListener('click', decrement);

const btnIncr = document.querySelector('button[data-action="increment"]');
btnIncr.addEventListener('click', increment);