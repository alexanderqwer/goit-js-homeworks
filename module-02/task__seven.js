let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введи число');

    if (input === null) {
        break;
    }

    if (!Number.isNaN(Number(input))) {
        numbers.push(Number(input));
    } else {
        alert('Было введено не число, попробуй еще раз');
    }
} while (input !== null);

// console.log(numbers);

if (numbers.length !== 0) {
    for (const number of numbers) {
        total += number;
    }
    alert(`Общая сумма чисел равна: ${total}`);
} else {
    alert('Отменено пользователем!');
}