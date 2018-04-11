const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = " qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

let script = window.addEventListener("keydown", input => {
  let letter = input.key;

  if(keys.includes(letter)){  
    if(letter === " "){
      letter = "space";
    }

    for(let i = 0; i < buttons.length; i++){
      if(buttons[i].textContent === letter){
        buttons[i].classList.add("keyboard__btn--active");
        console.log(buttons[i])
        //выбираем ноту в этой букве
        let sound = buttons[i].getAttribute("data-note");
        console.log(sound)
        
        let checkSound = document.querySelector("#slideThree");
        if(checkSound.checked){
          playSound(`${sound}`);
        }
      } else{
        buttons[i].classList.remove("keyboard__btn--active");
      }
    }
   }
});