// Создать две кнопки в HTML: start и stop.
// Реализовать функционал таймера отсчета старта печати через функцию - конструктор со свойсвами startTime,
//  stopTime и interval.Добавить в prototype методы start и stop.
// При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
// При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime 
// и записывает разницу между startTime и stopTime в interval.
// При нажатии на stop, значение interval выводится в консоль.


const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const result = document.querySelector(".result");

function Timer() {
    
};


// start method
Timer.prototype.start = function () {
    this.startTimer = new Date;
    console.log(this.startTimer);
};
// stop timer method
Timer.prototype.stop = function () {
    this.stopTimer = new Date;
    console.log(this.stopTimer);
    this.interval = this.stopTimer - this.startTimer ;
    result.textContent = `Прошло ${this.interval} милисекунд!`;
};



const TimeShower = new Timer();

startButton.addEventListener("click",() => {TimeShower.start()});
stopButton.addEventListener("click", () => {TimeShower.stop()});

