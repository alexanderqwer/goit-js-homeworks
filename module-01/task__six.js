let input;
let total = 0;

while (true) {
  input = prompt(`Введи число!`);
  inputNumber = Number(input);
  total += inputNumber;
  console.log(total);
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
}
