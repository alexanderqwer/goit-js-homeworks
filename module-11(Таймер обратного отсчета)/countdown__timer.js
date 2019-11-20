export default class CountdownTimer {
    constructor({
        targetDate
    }) {
        this.targetDate = targetDate;
        this.currentDate = Date.now();
        this.time = this.targetDate - this.currentDate;
        this.refs = {
            daysHolder: document.querySelector('span[data-value="days"]'),
            hoursHolder: document.querySelector('span[data-value="hours"]'),
            minsHolder: document.querySelector('span[data-value="mins"]'),
            secsHolder: document.querySelector('span[data-value="secs"]'),
        };
    }

    //-----// Логика счета времени
    getDays() {
        return Math.floor(this.time / (1000 * 60 * 60 * 24));
    }

    getHours() {
        return Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    getMins() {
        return Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    }

    getSecs() {
        return Math.floor((this.time % (1000 * 60)) / 1000);
    }


    pad(value) {
        return String(value).padStart(2, '0');
    }

    startTimer() {
        const timerID = setInterval(() => {
            this.time = this.time - 1000;

            if (this.time < 0) {
                clearInterval(timerID);
                return;
            }

            this.renderTimer();
        }, 1000);
    }

    renderTimer() {
        this.refs.daysHolder.textContent = this.pad(this.getDays());
        this.refs.hoursHolder.textContent = this.pad(this.getHours());
        this.refs.minsHolder.textContent = this.pad(this.getMins());
        this.refs.secsHolder.textContent = this.pad(this.getSecs());
    }

}