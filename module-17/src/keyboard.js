// Не много улучшил функционал. Рандомно предлагает набрать буквы из клавиатуры.

const task = [];
let taskIndex = 0;
let result = 0;
const controlKeyboard = document.querySelector(".control__keyboard");
const resultKeyboard = document.querySelector(".number__letters");
const exercise = document.querySelector(".exercise");
const clockface = document.querySelector(".clock__time");
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");

const timer = {
  startTime: "",
  currentTime: "",
  id: ""
};


// функция проигрывания звука
const playSound = button => {
  let note = button.getAttribute('data-note');
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};


// функция поиска кнопки
const findButton = (letter) => {
  if (letter == " ") {
    letter = 'space';
  }
  let button;
  buttons.forEach(function (item, i, arr) {
    if (item.textContent == letter) {
      button = item;
    }
  });
  return button;
};


// функция подстветки кнопки
const lightButton = (button) => {
  button.classList.add("keyboard__btn--active");
  setTimeout(() => { button.classList.remove("keyboard__btn--active") }, 200);
};


// функция для красивого формата времени
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


// функция для обнуления таймра
function updateClockface(time) {
  clockface.textContent = getFormattedTime(time);
}


// функция старт
function startTimer() {
    timer.id = setInterval(() => {
    updateClockface(timer.currentTime++)
  }, 1);
  console.log(`таймер ${timer.id}, st=${timer.startTime}, ct=${timer.currentTime}`);
};


// функция стоп таймер
function stopTimer() {
  clearInterval(timer.id);
  timer.startTime = timer.currentTime;
  timer.id = "";
  console.log(`таймер ${timer.id}, st=${timer.startTime}, ct=${timer.currentTime}`);
};


// функция записи введеных символов 
function letterList(letter) {
    controlKeyboard.textContent += letter;
}


// функция создания рандомного задания
function createTask () {
  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * keys.length);
    let letter = keys[index];
    task.push(letter);
    exercise.textContent += letter;
  }; 
};


// функция подсчета результата
function countKPS(){
  result = timer.currentTime/task.length;
  resultKeyboard.textContent = result;
  return result;
}


const record = document.querySelector(".record");
record.textContent += localStorage.getItem("recordScore");
console.log(record);
createTask();

const callback = function (param) {

  if(timer.id == ""){
    startTimer();
  }
  
  // 0. отсеиваем лишние клавиши
  let findKey = keys.findIndex((k) => k == param.key);
  if (findKey == -1) {
    return;
  };

  // 1. Найти кнопку
  let button = findButton(param.key);

  letterList(param.key);

  // 2. Подсветить кнопку
  lightButton(button);

  //  Play sound
    playSound(button);
  
  // жду правильную клавишу
  if(param.key == task[taskIndex]) {
    taskIndex +=1;
  }

  // если задание пройдено
  if(taskIndex >= task.length){
    stopTimer();
    let result = countKPS();
    let recordScore = localStorage.getItem("recordScore");
    if(recordScore > result){
      localStorage.setItem("recordScore",result);
      recordScore.textContent = result;
    }
  }
};


window.addEventListener("keydown", callback);

