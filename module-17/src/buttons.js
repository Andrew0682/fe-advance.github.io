const startBut = document.querySelector("#start");
const stopBut = document.querySelector("#stop");

class Timer {
    constructor(startTime,stopTime){
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.interval = this.stopTime - this.startTime;
    }
    start(){
        this.startTime = new Date();
        console.log(this.startTime);
    };
    stop(){
        this.stopTime = new Date();
        this.interval = this.stopTime - this.startTime;
        console.log(this.stopTime);
        console.log(this.interval);
    };
    getTime(){
       return this.interval;
    };

    static timeToNY () {
        let nowtime = new Date();
        let newyaerday = Math.round((new Date(nowtime.getFullYear() + 1, 0, 1) - nowtime) / 1000 / 60 / 60 / 24);
        console.log(`Осталось до Нового года ${newyaerday} дней`);
        return newyaerday;
        console.log(timeToNY);
    }
};

const timer1 = new Timer(new Date(2008,07,17), new Date(2018,03,26));
console.log(timer1);
const timer2 = new Timer(new Date(2015, 09, 11), new Date(2018, 03, 26));
console.log(timer2);

let stopWatch = new Timer();


startBut.addEventListener('click',() => {stopWatch.start()});
stopBut.addEventListener('click',() => {stopWatch.stop()});

Timer.timeToNY();