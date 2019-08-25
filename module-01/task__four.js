const credits = 23580;
const pricePerDroid = 3000;

let message;
let totalPrice;
const userBuy = prompt(`Please enter the quantity of the desired purchase:`);
console.log(Number(userBuy));

totalPrice = Number(userBuy) * pricePerDroid;

let oddMoney = credits - totalPrice;

if (userBuy === null) {
    message = `Отменено пользователем!`;
} else if (totalPrice > credits) {
    message = `Недостаточно средств на счету!`;
} else {
    message = `Вы купили ${userBuy} дроидов, на счету осталось ${oddMoney} кредитов.`;
}
console.log(message);