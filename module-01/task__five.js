let userInput = prompt('Укажите страну, в которую необходимо доставить товар');
const deliveryCostChina = 100;
const deliveryCostChile = 250;
const deliveryCostAustralia = 170;
const deliveryCostIndia = 80;
const deliveryCostJamaica = 120;

if (userInput === null) {
  alert('Отменено пользователем!');
} else {
  switch (userInput.toLowerCase()) {
    case 'китай':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostChina} кредитов.`,
      );
      break;

    case 'чили':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostChile} кредитов.`,
      );
      break;

    case 'австралия':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostAustralia} кредитов.`,
      );
      break;

    case 'индия':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostIndia} кредитов.`,
      );
      break;

    case 'ямайка':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostJamaica} кредитов.`,
      );
      break;

    default:
      alert('В вашей стране доставка не доступна.');
  }
}