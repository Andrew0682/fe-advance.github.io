/*
1) Создать две кнопки в HTML: start и stop.
2) Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
3) Для класса Timer создать методы start и stop, getTime.
4) Создать экземпляр класса Timer, пусть он называется stopwatch.
5) При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
6) При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает 
разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
7) Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.*/

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let timerResult = document.querySelector("#timer_result");
let txtResult = document.createElement("p");
timerResult.after(txtResult);

let timeNewYear = new Date("December 31 2018 23:59");

let time = 0;
let timer = {};


class Timer {
    constructor(startTime, stopTime, interval) {
        this.startTime = start;
        this.stopTime = stop;
        this.interval = interval;
    };
    start() {
        timer = setInterval(function () {
            time++;
            timerResult.textContent = time;
        }, 1000);
        this.startTime = time;
    };

    stop() {
        clearInterval(timer);
        this.stopTime = time;
        let someRes = Math.floor(this.stopTime - this.startTime);
        this.interval = someRes;

    };

    getTime() {
        console.log(this.interval);
    };

    static timeToNY() {
        let today = new Date();
        let leftTime = timeNewYear.getTime() - today.getTime();
        let leftDate = Math.floor(leftTime / 86400000);

        return leftDate;
    };

}

let time1 = new Timer(10, 15, 5);
let time2 = new Timer(16, 20, 4);
let time3 = new Timer(21, 25, 4);

let stopwatch = new Timer();

startButton.addEventListener('click', startWatchTime);
stopButton.addEventListener('click', stopWatchTime);


function startWatchTime() {
    stopwatch.start();
};

function stopWatchTime() {
    stopwatch.stop();
    stopwatch.getTime();
    txtResult.textContent = `До Нового Года осталось ${Timer.timeToNY()} дней!`;
};