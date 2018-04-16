
const soundSwitcher = document.querySelector('#slideThree')
const state = {
  playSound: soundSwitcher.checked
}

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));

const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");

soundSwitcher.addEventListener ('change', (event) => {
    state.playSound = event.target.checked
        ? true
        : false;
});

const keyboardKeydown = (event) => {
  if (keys.includes(event.key)) {
    const targetButton = buttons.find((elem) => {
      return elem.textContent == event.key;
    })

    targetButton.classList.add('keyboard__btn--active');
    let note = targetButton.getAttribute("data-note");
    if (state.playSound) playSound(note);
  }
}

const keyboardKeyup = (event) => {
  const target = document.querySelectorAll('.keyboard__btn--active');

  target.forEach((element) => {
    element.classList.remove('keyboard__btn--active');
  });
}

window.addEventListener("keydown", keyboardKeydown);
window.addEventListener("keyup", keyboardKeyup);