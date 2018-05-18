// Создать две кнопки в HTML: start и stop.
// Реализовать функционал таймера отсчета старта печати через функцию - конструктор со свойсвами startTime,
//  stopTime и interval.Добавить в prototype методы start и stop.
// При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
// При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime 
// и записывает разницу между startTime и stopTime в interval.
// При нажатии на stop, значение interval выводится в консоль.


const resultTime = document.querySelector('.result');

function Timer() { 
  this.startTime = '';
  this.stopTime = '';
  this.interval = '';
}

const timerObj = new Timer(); 

Timer.prototype.Start = function Start() { 
  this.startTime = Date.now();
};
Timer.prototype.Stop = function Stop() { 
  this.stopTime = Date.now();
  this.interval = (this.stopTime - this.startTime) / 1000; 
};

Object.defineProperty(Timer.prototype, 'Start', { 
  enumerable: false,
});
Object.defineProperty(Timer.prototype, 'Stop', { 
  enumerable: false,
});

const onClickHandlers = (e) => {
  if (e.target.classList.contains('start-btn')) {
    timerObj.Start();
    resultTime.innerHTML = 'Операция выполняется...';
  }
  if (e.target.classList.contains('stop-btn')) {
    timerObj.Stop();
    resultTime.innerHTML = `Операция завершена!\n Общее время: ${timerObj.interval} сек.`;
  }
};

document.addEventListener('click', onClickHandlers);