const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива
console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]
console.log(users);

// Удалить последний элемент массива
console.log(users.pop()); // ["Poly", "Ajax"]
console.log(users);

// Добавить в начало массива пользователя "Lux"
console.log(users.unshift('Lux')); // ["Lux", "Poly", "Ajax"]
console.log(users);

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users.push('Jay', 'Kiwi')); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]
console.log(users);

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
console.log(users.splice(2, 1));
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore
const userToInsert = 'Kong';
const insertBefore = 'Jay';
console.log(users.splice(2, 0, userToInsert)); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
console.log(users);