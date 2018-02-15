const keyboardUp = "qwertyuiop[]";
console.log(keyboardUp.toLowerCase()); // qwertyuiop[]
console.log(keyboardUp.toUpperCase()); // QWERTYUIOP[]
console.log(keyboardUp.length); // 12
let numberUp = 12;
console.log(keyboardUp.charAt(0)); // q
console.log(keyboardUp.charAt(11)); // ]
console.log(keyboardUp.indexOf("[")); // 10
numberUp = 10;
console.log(keyboardUp.indexOf("]")); // 11
numberUp = 11;


const keyboardMiddle = "asdfghjkl;'";
console.log(keyboardMiddle.toLowerCase()); // asdfghjkl;'
console.log(keyboardMiddle.toUpperCase()); // ASDFGHJKL;'
console.log(keyboardMiddle.length); // 11
let numberMiddle = 11;
console.log(keyboardMiddle.charAt(0)); // a
console.log(keyboardMiddle.charAt(10)); // '


const keyboardDown = "zxcvbnm,./";
console.log(keyboardDown.toLowerCase()); // zxcvbnm,./
console.log(keyboardDown.toUpperCase()); // ZXCVBNM,./
console.log(keyboardDown.length); // 10
let numberDown = 10;
console.log(keyboardDown.charAt(0)); // z
console.log(keyboardDown.charAt(9)); // /


const sameKeyboard = " ${keyboardUp} ${keyboardMiddle} ${keyboardDown} ";
console.log(sameKeyboard); //  ${keyboardUp} ${keyboardMiddle} ${keyboardDown}
console.log(`${keyboardUp} + ${keyboardMiddle} + ${keyboardDown} = ${keyboardUp + keyboardMiddle + keyboardDown}`); //qwertyuiop[] + asdfghjkl;' + zxcvbnm,./ = qwertyuiop[]asdfghjkl;'zxcvbnm,./



let numberUp = 11;
let numberMiddle = 11;
let numberDown = 10;
const sameNumber = " ${numberUp} ${numberMiddle} ${numberDown} ";
console.log(sameNumber); //  ${numberUp} ${numberMiddle} ${numberDown} 

console.log(`${numberUp + numberMiddle + numberDown}`); // 32
console.log(`${numberUp} + ${numberMiddle} + ${numberDown} = ${numberUp + numberMiddle + numberDown}`); // 11 + 11 + 10 = 32
