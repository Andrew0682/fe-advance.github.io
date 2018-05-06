/*
  Создать компонент счетчика времени.
- Простой прямоугольник который показывает время со старта упражения и до того момента когда все 
  клавиши были верно нажаты.
- На входе есть строка символов для упражнения.   
- Написать метод countKPS() который, по окончанию упражнения, возвращает кол-во верных клавишь
  в секунду которое было нажато за время выполнения упражнения.
- Записать результат в localStorage, но только в том случае если он лучше чем тот что уже есть в localStorage.
- При повторном посещении страницы надо брать то что записано в localStorage и вешать на страницу,
  это будет компонент лучшего результата.
*/
// дается строка и от первого нажатия до посленего правильного набранного знака считать время

const lang = "qwerty";
const string = "qryte";

function str_rand() { //Вставил функцию генерации случайных символов. Можно в lang поствить всю клавиатуру и получить нормальный тренажер.
  var result = '';
  var words = lang;
  var max_position = words.length - 1;
  for (i = 0; i < 5; ++i) {
    position = Math.floor(Math.random() * max_position);
    result = result + words.substring(position, position + 1);
  }
  return result;
}
const charsArr = str_rand(lang);

const timerOutput = document.querySelector(".timer");
let exercise = document.querySelector(".exercise");
let keyboard = document.querySelector(".keyboard");
let resultExercise = document.querySelector(".result");

exercise.textContent = `Повторите строку случайных символов - ${charsArr}`;
exercise.appendChild(timerOutput);

let time = 0;
let letters = 5;
let userString = [];
let arrMain = [];


let timer = setInterval(function () {
  time++;
  timerOutput.textContent = time;
}, 1000);

resultExercise.textContent = `Наилучший результат: ${localStorage.getItem("dataText")} за ${localStorage.getItem("dataTimer")} секунд`;

function countKPS(arg){ // метод countKPS, толку от него нет можно было заменить формулой прямо в ответе, но такое условие д.з.
  let countKP = arg/charsArr.length;
  return countKP;
}

function onPush(e) {
  userString.push(e.key);
  if (userString.length <= 5) {
    if (charsArr.includes(e.key)) { // засчитываем только те символы, которые есть в примере
      arrMain.push(e.key);
      if (arrMain.length == 5) {
        for (let i = 0; i < arrMain.length; i++) {
          if (arrMain[i] == charsArr[i]) {
            clearInterval(timer);
            keyboard.textContent = "";
            keyboard.textContent = `Ваш результат: 5 символов за ${time} секунд. T.e 1 символ за ${countKPS(time)} секунды`;
            localStorage.setItem("dataTimer", JSON.stringify(time));
            localStorage.setItem("dataText", JSON.stringify(charsArr));
          } else {
            clearInterval(timer);
            keyboard.textContent = "Вы набрали неверный текст! Необходима дополнительная тренеровка на клавиатурном тренажере.";
          }
        }
      }
    }
  } else {
    clearInterval(timer);
    keyboard.textContent = "Ваш результат хуже предыдущего! Необходима дополнительная тренеровка на клавиатурном тренажере.";
  }
};
window.addEventListener("keydown", onPush);


