
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
const keyboardObj = (keyboardArr, langs) => keyboard.layouts[langs] = keyboardArr;
keyboardObj (keyboardEn, "en");
keyboardObj (keyboardRu, "ru");
keyboardObj (keyboardUa, "ua");
const setLangObj = (obj) => {
let langs = "";
    do {
        langs = +prompt("Выбери язык ", "en-0, ru-1, ua-2");
    if ( langs === 0 || langs === 1 || langs === 2 ) break;
    if ( langs === false) return;
        alert('Выбран недоступный язык');
    } while (true);
    return obj.currentLang = obj.langs[langs];
}
setLangObj(keyboard);
const getCurrentKeybArr = (obj) => obj.layouts[obj.currentLang]; 

const currentKeybArr = getCurrentKeybArr(keyboard);



const getRandCharInAlph = (array) => {
    const randomString = Math.floor(Math.random() * array.length);
    const randomChar = Math.floor(Math.random() * array[randomString].length);
    return array[randomString][randomChar];
    
}

console.log(`Случайный символ ${keyboard.currentLang} алфавита - ${getRandCharInAlph(currentKeybArr)}`);