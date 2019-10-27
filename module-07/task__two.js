const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ul = document.querySelector('#ingredients');
const allIngredients = ingredients.reduce((acc, item) => {
    return acc + `<li>${item}</li>`;
}, '');

ul.insertAdjacentHTML('afterbegin', allIngredients);