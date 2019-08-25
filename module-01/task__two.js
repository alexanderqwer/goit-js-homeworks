const total = 100;
const ordered = 50;

console.log(total === ordered);

let product = prompt(`Plese enter the number product `);

console.log(Number(product));

if (ordered > total) {
    product = alert(`На складе недостаточно твоаров!`);
} else {
    (ordered <= total)
    product = alert(`Заказ оформлен, с вами свяжется менеджер.`);
}