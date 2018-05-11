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





// дальше идет код с обьяснением!!!!!!!!!!!!!!!!!!!!!!!!!!


const lang = "qwerty";
const string = "qryte";//строка которая нам нужна(которую нужно будет вводить для проверки)
const charsArr = string.split("").reverse();//массив строки которую нужно вводить
const timerOutput = document.querySelector(".timer");//путь на див где будет таймер
const exerciseOutput = document.querySelector(".exercise");//путь на див где будет выведена строка string
const keyboard = document.querySelector(".keyboard");// путь где будет виден результат нашей игры

let arrMain = [];//создаем массив где будут хранится все верно введенные буквы
let counter = 0;//создаем счетчик для таймера
let allKeys = [];//создаем массив где будут хранится все буквы которые мы ввели(не только те что есть в string)
let prob = [];


exerciseOutput.innerHTML = string;
keyboard.textContent = `Your last result: 5 letters in ${localStorage.getItem("data")} sec`;

let time = setInterval(() => {
  counter++;
  timerOutput.innerHTML = counter;
}, 1000);

window.addEventListener("keydown", function(e){
  if(allKeys.length < 5){
    allKeys.push(e.key);
    prob.push(e.key);
    if(charsArr.includes(e.key)){
      arrMain.push(e.key);
        if(arrMain.length == 5){
          for(let i = 0; i < arrMain.length; i++){
            let j = i + 1;
            if(arrMain[i] == charsArr[i] && prob[i] != allKeys[0]){
              clearInterval(time);
              keyboard.textContent = "";
              keyboard.textContent = `Your result: 5 letters in ${counter} sec`;
              localStorage.setItem("data", JSON.stringify(counter));
            }
          } 
        }
      }
      } else {
        clearInterval(time);
        keyboard.textContent = "You looooooose!";
      }
  });