
/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время
const string = "qryte";
let isTimerOn = false;
const timerOutput = document.querySelector(".timer");
let counter = 0;
let correctAnswer = 0;
const arr = [];
let start, startTime, now, average;
let locStr = localStorage.getItem('average' || null);
const keyboard = document.querySelector(".keyboard");


function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const ms =
    date.getMilliseconds() < 10
      ? "00" + date.getMilliseconds()
      : date.getMilliseconds() < 100
        ? "0" + date.getMilliseconds()
        : date.getMilliseconds();

  return `${mt}:${sc}:${ms}`;
}
 

function updateClockface(time) {
  timerOutput.textContent = getFormattedTime(time);
}


function startTimer() {
  if(isTimerOn === false) {
    isTimerOn = true;
    startTime = new Date();
    start = setInterval( () => {
      now = new Date();
      updateClockface(now.getTime() - startTime.getTime());
    }, 1);
  }
}


function countKPIs(event) {
  let letter = getChar(event);
  if(letter === string[counter]) {
    counter++;
    correctAnswer++;
    arr.push(letter);
  } 

  if(arr.length === string.length) {
    clearInterval(start);
    let totalTime = now.getTime() - startTime.getTime();
    average = (correctAnswer / (totalTime / 1000)).toFixed(2);
    if(locStr === null) {
      localStorage.setItem('average', average);
      locStr = localStorage.getItem('average');
    }

    if(locStr < average) {
      localStorage.removeItem('average');
      localStorage.setItem('average', average);
      locStr = localStorage.getItem('average');
    }
    
    return announcement();
  }
}


function announcement() {
  setTimeout( () => {
    alert(`Кол-во правильно нажатых клавиш ${correctAnswer} из ${string.length}. 
    Ваша скорость набора ${average} символов в секунду. 
    Ваш лучший результат ${localStorage.getItem('average')}.`);
  }, 100);
}


function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}
keyboard.addEventListener('keypress', startTimer);
keyboard.addEventListener('keypress', countKPIs);