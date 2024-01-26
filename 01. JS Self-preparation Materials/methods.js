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
const mathAbsDifference = Math.abs(a - b); // find the absolute difference between two numbers

const repeatSymbol = symbol.repeat(20); // ----------------
console.log(3 % 2)

// Array Methods
let names = ['ventsi', 'silvena', 'drago'];
names.push('maxi') // add element to the end of the array
names.pop() // remove the last element
names.unshift('jonny') // add element to the beginning of the array;
names.shift('maxi') //remove the first element

let word = 'JavaScript';
let arrayOfLetters = word.split('') 
let js_letters = Array.from(word);
let str = arrayOfLetters.join() 
let arrToString = String(js_letters);

let arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5, 6];
let uniqueArray = [...new Set(arrayWithDuplicates)]; // creating new array without duplicate elements 

//map(), filter(), reduce(), split()