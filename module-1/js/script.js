const firstLine = "qwertyuiop[]";
const secondLine = "asdfghjkl;'";
const thirdLine = "zxcvbnm,./";
console.log(firstLine.toLowerCase()); // qwertyuiop[]
console.log(firstLine.toUpperCase()); // QWERTYUIOP[]


// task 2
const firstLineLength = firstLine.length;
const secondLineLength = secondLine.length;
const thirdLineLength = thirdLine.length;


//task 3
let firstLineSymbol = 1;
let secondLineSymbol = 1;
let thirdLineSymbol = 1;
console.log(firstLine.charAt(0));
console.log(firstLine.charAt(firstLine.length - firstLineSymbol));

console.log(secondLine.charAt(0));
console.log(secondLine.charAt(secondLine.length - secondLineSymbol));

console.log(thirdLine.charAt(0));
console.log(thirdLine.charAt(thirdLine.length - thirdLineSymbol));

//task 4 
let positionA = firstLine.indexOf("[");
let positionB = firstLine.indexOf("]");

//task 5

console.log(`firstLine = ${firstLine} 
	secondLine = ${secondLine} 
	thirdLine =${thirdLine} 
	firstLineLength = ${firstLineLength} 
	secondLineLength = ${secondLineLength} 
	thirdLineLength = ${firstLineLength} 
	${positionA} ${positionB}`);