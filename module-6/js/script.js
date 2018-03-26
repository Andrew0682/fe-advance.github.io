
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: 0,     
  setCharCount: function() {
    let message = prompt("Вам нужно ввести число количества символов: ");
    while(this.checkPositiveInteger(message)){
      message = prompt("Вам нужно ввести число: ");
    }
    this.charCount = parseInt(message);
  },
  checkPositiveInteger: function(a) {
    if(typeof a !== "number" && a % 1 !== 0 && a !== 0){ 
      return true;
    }
  },
  task: undefined,
  createTask: function(){
    let mass = [];
    for(var i = 0, size = this.charCount; i < size; i++){    
      let temp = this.chars[getRandomInt(0, this.chars.length)];
      mass.push(temp);
    }
    this.task = mass;
  },
  startTask: function(){
    let str = this.task.join("");
    let message = prompt(`Строка task = ${str},  пожалуйста, повторите строку: `);
    return message;
  },
  errors: undefined,
  userInput: function(){
    let masInput = this.startTask().split(""); 
    let genMas = this.task;
    let count = 0;
    for(var i = 0, size = this.charCount; i < size; i++){
      masInput[i] == genMas[i] ? count = count : count++; 
    }
    this.errors = count;
  },
  userErrors: function(){
    let errors = this.errors;
    if(errors === 0){
      return console.log("Поздравляем у Вас 0 ошибок!!");
    } else {
      return console.log(`Колличество ошибок ${errors} error, Успехов в следующей тренировке!`);
    }
  },
  run: function(){
    this.setCharCount(); 
    this.createTask();    
    this.userInput();    
    return this.userErrors();
  }
}

keyTrainer.run();     


