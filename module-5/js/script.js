
const alphabetEn = "qwertyuiop[]asdfghjkl;'\zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэ\ячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєґячсмитьбю/";
function addKeyboardLayout(strAlphabet1, strAlphabet2, strAlphabet) {
const arr = strAlphabet.split('');
const keyboard = [arr.slice(0, arr.indexOf(strAlphabet1)), arr.slice(arr.indexOf(strAlphabet1), arr.indexOf(strAlphabet2)), arr.slice(arr.indexOf(strAlphabet2))];
    return keyboard;
}
const keyboardEn = addKeyboardLayout ("a", "z", alphabetEn);
const keyboardRu = addKeyboardLayout ("ф", "я", alphabetRu);
const keyboardUa = addKeyboardLayout ("ф", "я", alphabetUa);
const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
  };
const keyboardObj = (keyboardArr, obj, language) => {
  const rowArrey = Object.keys(obj.layouts[language]); 
  rowArrey.forEach(function( row, j) {
    obj.layouts[language][row] = keyboardArr[j];
  });
}

keyboardObj(keyboardEn, keyboard, "en");
keyboardObj(keyboardRu, keyboard, "ru");
keyboardObj(keyboardUa, keyboard, "ua");
const setLangObj = obj => {
let language = "";
    do {
        language = +prompt("Выбери язык ", "en-0, ru-1, ua-2");
    if ( language === 0 || language === 1 || language === 2) break;
    if ( language === null ) return;
        alert('Выбран недоступный язык');
    } while (true);
    return obj.currentLang = obj.langs[language];
}
setLangObj(keyboard);



const setRandomSymbol = keyboardArr => {
    const randomSymbol = Math.floor(Math.random() * keyboardArr.length);
    return randomSymbol;
}
  
const getRandCharInAlph = (obj, callback) => {
    const currentKeybArr = Object.values(obj.layouts[obj.currentLang]);
    const randomString = currentKeybArr[setRandomSymbol(currentKeybArr)];
    const randomNum = callback(randomString);
    return randomString[randomNum];
}
const randomChar = getRandCharInAlph(keyboard, setRandomSymbol);

console.log(`Случайный символ ${keyboard.currentLang} алфавита - ${randomChar}`);