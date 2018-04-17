/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/
 
const lang = {
   en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ "
}; 

lang.rows=[];  
lang.rows[0] = (lang.en.slice(0, 12)).split("");
lang.rows[1] = (lang.en.slice(12, 23)).split("");
lang.rows[2] = (lang.en.slice(23, 33)).split("");

const html = document.querySelector('#keyboard__row').textContent.trim();

const compiled = _.template(html);

const result = compiled(lang);

const container = document.querySelector('#keyboard');

container.innerHTML = result;

const buttons = Array.from(document.querySelectorAll("button"));
console.log(buttons);
const keys = lang.en.split("");
const pressed = document.querySelector(".pressed");

const keyboardKeydown = (event) => {
  if (keys.includes(event.key)) {
    const targetButton = buttons.find((elem) => {
      
      return elem.textContent == event.key;
    })
    targetButton.classList.add('keyboard__btn--active');
  } 
      pressed.textContent += event.key;
}

const keyboardKeyup = (event) => {
  const target = document.querySelectorAll('.keyboard__btn--active');

  target.forEach((element) => {
    element.classList.remove('keyboard__btn--active');
  });
}

window.addEventListener("keydown", keyboardKeydown);
window.addEventListener("keyup", keyboardKeyup);


