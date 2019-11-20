'use strict';
import CountdownTimer from "./countdown__timer.js"
const timer = new CountdownTimer({
    targetDate: new Date('11 24, 2019 14:55'),
});

timer.startTimer();