const ADMIN_PASWORD = 'jqueryismyjam';
let message;

const password = prompt(`Введите пароль!`);

if (password === null) {
    message = `Отменено пользователем!`;
} else if (password === ADMIN_PASWORD) {
    message = `Добро пожаловать!`;
} else {
    message = `Доступ запрещен, неверный пароль!`;
}
alert(message);