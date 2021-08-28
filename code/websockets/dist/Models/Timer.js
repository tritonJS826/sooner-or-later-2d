"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timer {
    constructor(step) {
        this.time = 0;
        this.timer = null;
        this.step = step;
    }
    /**
     * Start timer
     */
    start() {
        this.timer = setInterval(() => {
            this.time += this.step;
        }, this.step * 1000);
    }
    /**
     * Pause timer
     */
    pause() {
        if (this.timer === null)
            return;
        clearInterval(this.timer);
    }
    /**
     * Get time
     */
    getTime() {
        return this.time;
    }
}
exports.default = Timer;
