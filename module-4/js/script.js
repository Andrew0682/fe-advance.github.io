const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [];
function addKeyboardLayout(str) {
  let signs = str.split("");

  let line1 = signs.slice(signs.indexOf("q"), signs.indexOf("a"));
  let line2 = signs.slice(signs.indexOf("a"), signs.indexOf("z"));
  let line3 = signs.slice(signs.indexOf("z"), signs.indexOf("/"));
  keyboard.push(line1, line2, line3);
  console.log(keyboard);
}

addKeyboardLayout(alphabet);

function getRandCharInRow(arr) {
  let rand = Math.floor(Math.random() * keyboard.length);
  let rand2 = Math.floor(Math.random() * keyboard[rand].length);

  rez = "Строка: " + rand + "," + " Буква/знак: " + keyboard[rand][rand2];
  console.log(rez);
}
getRandCharInRow(keyboard);

function getRandCharInAlph(str) {
  let rezult;
  rand = alphabet[Math.floor(Math.random() * alphabet.length)];
  rezult = "Случайное значение : " + rand;
  console.log(rezult);
}
getRandCharInAlph(alphabet);