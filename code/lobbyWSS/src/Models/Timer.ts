export default class Timer {
    /**
     * timer id
     */
    private timer: NodeJS.Timeout | null;
    
    /**
     * Current time
     */
    private time: number;
    
    
    /**
     * timer step in seconds
     */
    private step: number;

    constructor(step: number) {
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
        if (this.timer === null ) return;

        clearInterval(this.timer);
    }

    /**
     * Get time
     */
    getTime() {
        return this.time;
    }

}