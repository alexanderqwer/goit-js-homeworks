const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    body: document.querySelector('.body'),
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
};

refs.buttonStart.addEventListener('click', buttonStartCLick);
refs.buttonStop.addEventListener('click', buttonStopCLick);

let timeId;

function buttonStartCLick() {
    timeId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[randomColor];
        refs.buttonStart.setAttribute('disabled', true);
    }, 1000);
}

function buttonStopCLick() {
    clearInterval(timeId);
    refs.buttonStart.removeAttribute('disabled');
}