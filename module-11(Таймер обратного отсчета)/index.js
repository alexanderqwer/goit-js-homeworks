'use strict';
import CountdownTimer from "./timer.js"
const timer = new CountdownTimer({
    targetDate: new Date('11 24, 2019 14:55'),
});

console.log(timer)

timer.startTimer();