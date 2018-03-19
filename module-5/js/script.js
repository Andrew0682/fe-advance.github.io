const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

const addKeyboardLayout = (strAlphabet1, strAlphabet2, strAlphabet) => {
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

const writeKeyboardToObj = (keyboardArr, lang) => keyboard.layouts[lang] = keyboardArr;

writeKeyboardToObj (keyboardEn, "en");
writeKeyboardToObj (keyboardRu, "ru");
writeKeyboardToObj (keyboardUa, "ua");

const writeLangToObj = (obj) => {
let lang = "";
    do {
        lang = prompt(' Choose the keyboard layout:  en - 0, ru - 1, ua - 2 ', "");
    if ( lang === '0' || lang === '1' || lang === '2' ) break;
    if ( lang === null) return;
        alert("Был выбран не доступный язык!");
    } while (true);
    return obj.currentLang = obj.langs[lang];
}

writeLangToObj(keyboard);

const getCurrentKeybArr = (obj) => obj.layouts[obj.currentLang]; 

const currentKeybArr = getCurrentKeybArr(keyboard);

const getRandCharInAlph = (array) => {
    const randomString = Math.floor(Math.random() * array.length);
    const randomChar = Math.floor(Math.random() * array[randomString].length);
    return array[randomString][randomChar];
    
}

console.log(`Случайный символ ${keyboard.currentLang} алфавита - ${getRandCharInAlph(currentKeybArr)}`);