const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: "",
    task: "",
    userInput: "",
    userErrors: "",
    setCharCount() {
    let howManySymb ="";
        while (true) {
            howManySymb = prompt("Введите желаемое количество символов","");
            if (this.checkPositiveInteger(+howManySymb)) break;
            if (howManySymb === null) return;
        } 
            this.charCount = +howManySymb;    
    },
    
    checkPositiveInteger: function (value) {
        let isNumInt = (Number.isInteger(value) && value > 0) ? true : false;
               return isNumInt;
       
    },
    
    createTask() {
        if (this.charCount === "") return;
        let taskArr = new Array(this.charCount);
        for (let i = 0; i < this.charCount; i++) {
            taskArr[i] = this.chars[Math.floor(Math.random() * this.chars.length)]; 
        }  
        this.task = taskArr;
                        
    },
    
    startTask() {
        if (this.charCount === "") return;              
        const typeStr = prompt(`Наберите следующую строку:     ${this.task.join('')}`);
        if (typeStr === null ) return;
        this.userInput = typeStr.split('');
        
           
        const longStr = (this.task.length > this.userInput.length) ? this.task : this.userInput;
           
        let errorsCounter = 0;
        for (let i = 0; i < longStr.length; i++) {
            if (this.userInput[i] != this.task[i]) {
                errorsCounter++
            }
        } 
        this.userErrors = errorsCounter;
           
        if (this.userErrors === 0) {
            console.log('Поздравляю!') 
        } else console.log(`Количество ошибок: ${this.userErrors}.`);
        
    },
    
};

let run = function() {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.startTask();
};

run(keyTrainer);