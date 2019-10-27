const rangeController = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

rangeController.addEventListener('input', fontSizeTransformation);

function fontSizeTransformation() {
    text.style.fontSize = rangeController.value + 'px';
}