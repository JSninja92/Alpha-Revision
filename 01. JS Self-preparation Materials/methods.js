const string = 'Hello';
const num = 72;
const symbol = '-'

const char = string.charAt(2)
const charCode = string.charCodeAt(0) // 72
const strFromCharcode = String.fromCharCode(num) // H

const toUpCase = string.toUpperCase() // HELLO
const toLowCase = string.toLocaleLowerCase() // hello

const isItNan = isNaN(string) // true;
 
const pi = Math.PI;
const toFixed = (pi.toFixed(2)) // 3.14 // 0s after the .
const piSquared = Math.pow(Math.PI, 2); // power a number
const numSquared = num ** 2; // power a number
const maxOfThree = Math.max(2, -7, 4.5); // max of a few numbers
const mathRound = Math.round(pi); // 3 // round a number according to math rules
const mathCeil = Math.ceil(pi) // 4
const mathFloor = Math.floor(pi) // 3

const repeatSymbol = symbol.repeat(20); // ----------------
console.log(3 % 2)