const alphabet = "qwertyuiop[]asdfghjkl;\'zxcvbnm,.\/";
const keyboard = addKeyboardLayout(alphabet);
function addKeyboardLayout(alphabet) {
  const arr = alphabet.split('');
  const keyboard = [arr.slice(0, arr.indexOf("a")), arr.slice(arr.indexOf("a"), arr.indexOf("z")), arr.slice(arr.indexOf("z"))];
  return keyboard;
}
  console.log(addKeyboardLayout(alphabet))

function getRandCharInRow(row) {
  const randomStr = keyboard[row - 1];
   const randomIndex = Math.floor(Math.random() * randomStr.length);
   return randomStr[randomIndex];
}

console.log(`Случайный символ из 3-ой строки -` , getRandCharInRow(3));


function getRandCharInArr(array) {
   const randomString = Math.floor(Math.random() * array.length);
   const randomChar = getRandCharInRow(randomString);
   return randomChar;
   
}

console.log('Случайный символ всего алфавита - ', getRandCharInArr(keyboard));