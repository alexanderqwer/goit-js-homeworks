let deliveryOfGoods = prompt(`Indicate the country of delivery`);
if (deliveryOfGoods === null) {
  alert('Отменено пользователем!');
};

let cost;
let country = deliveryOfGoods.toLocaleLowerCase();

switch (country) {
  case 'china':
    cost = 100;
    break;

  case 'chile':
    cost = 250;
    break;

  case 'australia':
    cost = 170;
    break;

  case 'india':
    cost = 80;
    break;

  case 'jamaica':
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);