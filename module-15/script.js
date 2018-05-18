/*
1) Создать две кнопки в HTML: start и stop.
2) Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
3) Для класса Timer создать методы start и stop, getTime.
4) Создать экземпляр класса Timer, пусть он называется stopwatch.
5) При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
6) При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает 
разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
7) Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.*/
const resultTime = document.querySelector('.result');

class Timer {
  constructor(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
  }
  start() {
    this.startTime = Date.now();
    resultTime.innerHTML = 'operation is carried...';
  }
  stop() {
    this.stopTime = Date.now();
    this.interval = (this.stopTime - this.startTime) / 1000;
  }
  getTime() {
    resultTime.innerHTML = `operation is completed! Totall time: ${this.interval} sec.`;
  }
  static get timeToNY() {
    const today = Date.now();
    const nextYear = new Date(2019, 0, 1).getTime();
    return Math.floor((nextYear - today) / 86400000);
  }
}


const stopwatch = new Timer();
const timer1 = new Timer(10, 15, 5);
const timer2 = new Timer(16, 20, 4);
const timer3 = new Timer(21, 25, 4);
console.log(timer1, timer2, timer3);

const onClickHandlers = (e) => {
  if (e.target.classList.contains('start-btn')) {
    stopwatch.start();
  }
  if (e.target.classList.contains('stop-btn')) {
    stopwatch.stop();
    stopwatch.getTime();
  }
};

resultTime.innerHTML = `До Нового Года осталось: ${Timer.timeToNY} дней!`;
document.addEventListener('click', onClickHandlers);