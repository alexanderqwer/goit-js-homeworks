const categories = document.querySelectorAll('.item');

const elem = document.querySelectorAll('.item > ul');
const head = document.querySelectorAll('.item > h2');




for (let i = 0; i < elem.length; i += 1) {
    console.log(
        `Категория: '${head[i].textContent}', количество элементов: ${elem[i].children.length}`,
    );
}