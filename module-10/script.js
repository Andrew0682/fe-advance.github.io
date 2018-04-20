
const langs = "qwerty";
const string = "qryte";
const timerOutput = document.querySelector(".timer");
const str = document.querySelector(".string");
str.textContent = string;
let answer = document.querySelector(".result");
const bestResult = document.querySelector(".best_result");

const counter = () => {
  let timer = Number(timerOutput.textContent);
    return () => {
      return timerOutput.textContent = timer++;
  }
};

const visualTimer = counter();
const timerID = setInterval(visualTimer, 1000);
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
const keyboard = document.querySelector(".keyboard");
const pressed = document.querySelector(".pressed");

const main = () => {
   if ( string.length > pressed.textContent.length) {
            let difference = string.length - pressed.textContent.length;
            let str3 =  string.slice(0, -difference);
              if (str3 !== pressed.textContent ) {
               clearInterval(timerID); 
               let result = (pressed.textContent.length-1)/timerOutput.textContent
               answer.textContent =  result;
               updateResult(answer);
    }
  }
   else if (string.length === pressed.textContent.length) {
            clearInterval(timerID);
            let result = (pressed.textContent.length)/timerOutput.textContent;
            answer.textContent =  result;
            updateResult(answer);
     }
}

const btnClick = event => {
    if (event.target.classList.contains('keyboard__btn')) {
        pressed.textContent += event.target.textContent ;
        main();
   }
};

keyboard.addEventListener("click", btnClick);

const updateResult = (answer) => {
  const data = localStorage.getItem('result');
  if ( Number(data) < Number(answer.textContent)) {
     localStorage.setItem('result',answer.textContent );
     bestResult.textContent = localStorage.getItem('result');
     }; 
}

bestResult.textContent = localStorage.getItem('result');

const keys = lang.en.split("");

const keyboardKeydown = (event) => {
  if (keys.includes(event.key)) {
     pressed.textContent += event.key;
     main();
  } 
    
}
window.addEventListener("keydown", keyboardKeydown);