//method 1

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetArr = [...alphabet];


let keyboard = new Array();

keyboard[0] = alphabetArr.slice(0, alphabetArr.indexOf("]") + 1);
keyboard[1] = alphabetArr.slice(alphabetArr.indexOf("a"), alphabetArr.indexOf("'") + 1);
keyboard[2] = alphabetArr.slice(alphabetArr.indexOf("z"));
console.log(`${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`);
console.log(`${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`);
console.log(`${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`);

//method 2

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetArr = alphabet.split('');

const keyboardUP = alphabetArr.indexOf("]")+1;
const keyboardCenter = alphabetArr.indexOf("a");
const keyboardDown = alphabetArr.indexOf("\'")+1;


const keyboard = [alphabetArr.slice(0, keyboardUP), alphabetArr.slice(keyboardCenter, keyboardDown), alphabetArr.slice(-10)];
console.log(keyboard);

const hello = `${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`;
const javascript = `${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`;
const trainer = `${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`;
console.log(`${hello}
	         ${javascript}
	         ${trainer}`);

