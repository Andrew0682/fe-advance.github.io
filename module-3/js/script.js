//method 1
const keyboard = ["qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"];
const alphabet = keyboard.join("")
const hello = alphabet [17] + alphabet [2] + alphabet [20] + alphabet [20] + alphabet [8] //hello
const javascript = alphabet [18] + alphabet [12] + alphabet [26] + alphabet [12] + alphabet [13] + alphabet [25] + alphabet [3] + alphabet [7] + alphabet [9] + alphabet [4] //javascript
const trainer = alphabet [4] + alphabet [3] + alphabet [12] + alphabet [7] + alphabet [28] + alphabet [2] + alphabet [3] //trainer
console.log(hello);
console.log(javascript);
console.log(trainer);

//method 2
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let word1 = "hello";
let word1Arr = word1.split('');
let word2 = "javascript";
let word2Arr = word2.split('');
let word3 = "trainer";
let word3Arr = word3.split('');
let keyboard = [];
let result = [];
let result1 = [];
let result2 = [];
let signs = alphabet.split('');
let line1 = signs.slice(signs.indexOf('q'), signs.indexOf('a'));
let line2 = signs.slice(signs.indexOf('a'), signs.indexOf('z'));
let line3 = signs.slice(signs.indexOf('z'), signs.indexOf('/'));
keyboard.push(line1);
keyboard.push(line2);
keyboard.push(line3);
console.log(keyboard);

for (let w=0; w<word1Arr.length; w++){
for(let i = 0; i < keyboard.length; i++){
    for(let j = 0; j < keyboard[i].length; j++){
   
      if(keyboard[i][j]==word1Arr[w]){
  
        result.push(keyboard[i][j])
      }
      
    }
}
}
console.log(result.join(""));
for (let w=0; w<word2Arr.length; w++){
for(let i = 0; i < keyboard.length; i++){
    for(let j = 0; j < keyboard[i].length; j++){
  
      if(keyboard[i][j]==word2Arr[w]){
  
        result1.push(keyboard[i][j])
      }
      
    }
}
}
console.log(result1.join(""));
for (let w=0; w<word3Arr.length; w++){
for(let i = 0; i < keyboard.length; i++){
    for(let j = 0; j < keyboard[i].length; j++){
  
      if(keyboard[i][j]==word3Arr[w]){
  
        result2.push(keyboard[i][j])
      }
      
    }
}
}
console.log(result2.join(""));

//method 3
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const line = alphabet.split("");
const keyboard = [];
keyboard[0] = line.slice(0, line.indexOf('a'));
keyboard[1] = line.slice(line.indexOf('a'), line.indexOf('z'));
keyboard[2] = line.slice(line.indexOf('z'));


const helloArr = [];
helloArr.push(keyboard[1][5]);
helloArr.push(keyboard[0][2]);
helloArr.push(keyboard[1][8]);
helloArr.push(keyboard[1][8]);
helloArr.push(keyboard[0][8]);

let hello = helloArr.join("");


const javascriptArr = [];
javascriptArr.push(keyboard[1][6]);
javascriptArr.push(keyboard[1][0]);
javascriptArr.push(keyboard[2][3]);
javascriptArr.push(keyboard[1][0]);
javascriptArr.push(keyboard[1][1]);
javascriptArr.push(keyboard[2][2]);
javascriptArr.push(keyboard[0][3]);
javascriptArr.push(keyboard[0][7]);
javascriptArr.push(keyboard[0][9]);
javascriptArr.push(keyboard[0][4]);

let javascript = javascriptArr.join("");


const trainerArr = [];
trainerArr.push(keyboard[0][4]);
trainerArr.push(keyboard[0][3]);
trainerArr.push(keyboard[1][0]);
trainerArr.push(keyboard[0][7]);
trainerArr.push(keyboard[2][5]);
trainerArr.push(keyboard[0][2]);
trainerArr.push(keyboard[0][3]);

let trainer = trainerArr.join("");

console.log(hello);
console.log(javascript);
console.log(trainer);