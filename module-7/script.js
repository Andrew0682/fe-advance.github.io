const keyboard = {
    layouts: {
        en: {
            topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
            bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
        },
        ru: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
            middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        },
        ua: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
            middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        }
    },
    langs: ["en", "ru", "ua"],
    currentLang: "",

    createLayout(row) {

        let rowElement = document.createElement('ul');

        let rowItems = row.map(n => n = '<li></li>')
            .reduce((acc, next) => acc + next);

        rowElement.insertAdjacentHTML('beforeend', rowItems);

        const elRow = rowElement.querySelectorAll('li');
        let arrRow = [...elRow];
        arrRow.map((el, i) => el.textContent = row[i]);
        return rowElement;
    },
    createLayouts() {

        let wrap = document.createElement('div');
        const keys = document.querySelector("body");
      
        const top = this.createLayout(this.layouts[this.langs[this.currentLang]].topRow);
        const middle = this.createLayout(this.layouts[this.langs[this.currentLang]].middleRow);
        const bottom = this.createLayout(this.layouts[this.langs[this.currentLang]].bottomRow);
//сборка элементов
        wrap.append(top, middle, bottom);
        keys.append(wrap);
        return this;
    },
//выбор языка
    setCurrentLang() {
        return prompt("Выберите язык клавиатуры: en-0, ru-1, ua-2", '');
    },

    checkPositiveInteger() {
        let check, langChoise;
        do {
            check = this.setCurrentLang();
          if ( check === '0' || check === '1' || check === '2' ) break;
           if ( check === null) return;
             alert("Input correct value!");
            } while (true);
        this.currentLang = +check;
        return this;
    }
};

function run() {
    keyboard.checkPositiveInteger().createLayouts();
}
run();





