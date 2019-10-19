let input;
let total = 0;

do {
  input = prompt("Введи число");
  input = Number(input);
  if (input !== 0 && !Number.isNaN(input)) {
    total += input;
  } else if (Number.isNaN(input)) {
    alert("Было введено не число, попробуй еще раз");
  }
} while (input !== 0);

alert(`Общая сумма чисел равна ${total}.`);
