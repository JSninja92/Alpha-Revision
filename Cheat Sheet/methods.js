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

// ARRAY METHODS
let names = ['ventsi', 'silvena', 'drago'];
names.push('maxi') // add element to the end of the array
names.pop() // remove the last element
names.unshift('jonny') // add element to the beginning of the array;
names.shift('maxi') //remove the first element
names.slice(1, 2); 
//array.slice(start, end)  extract a section of an array and return a new array containing the extracted elements. It doesn't modify the original array but returns a shallow copy of a portion of an array 
names.splice(1, 2);
//array.splice(start, deleteCount, item1, item2, ...) //used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements, if any.

let word = 'JavaScript';
let arrayOfLetters = word.split('') 
let js_letters = Array.from(word);
let str = arrayOfLetters.join() 
let arrToString = String(js_letters);

let arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5, 6];
let uniqueArray = [...new Set(arrayWithDuplicates)]; // creating new array without duplicate elements 

//map(), filter(), reduce(), split()

// FUNCTIONS

// PREDICATE function is a type of function that returns a boolean value based on some condition or test. 

// Pure Functions:
// Pure functions are functions that produce the same output for the same input and have no side effects.
// They don't modify external state or data outside of the function's scope.
// Pure functions are predictable and easier to test.

// Impure Functions:
// Impure functions have side effects, meaning they modify external state or perform operations beyond their scope.
// They might change the value of variables outside their scope, perform I/O operations, or have other observable effects.

// Anonymous Functions:
// Anonymous functions, also known as lambda functions or function literals, don't have a name.
// They're often used as arguments to other functions or for short, one-time use cases.
// In JavaScript, they can be created using the function keyword without providing a name.

// Higher-Order Functions:
// Higher-order functions are functions that take other functions as arguments or return functions as results.
// They enable functional programming paradigms such as map, filter, and reduce.
// Examples include map(), filter(), reduce() in JavaScript.

// First-Class Functions:
// In languages with first-class functions, functions are treated like any other data type.
// They can be assigned to variables, passed as arguments, and returned from other functions.
// JavaScript treats functions as first-class citizens.

// Recursive Functions:
// Recursive functions are functions that call themselves either directly or indirectly in order to solve a problem.
// They often have a base case to terminate the recursion.
// Examples include factorial calculation, Fibonacci sequence generation, and tree traversal algorithms.

// Callback Functions:
// Callback functions are functions passed as arguments to other functions, which are then invoked inside the outer function.
// They're commonly used in asynchronous programming to handle responses or events.
// Promises and event handlers often use callback functions.

// Constructor Functions:
// Constructor functions are used in languages like JavaScript to create objects based on a template (constructor).
// They use the new keyword to create instances of objects with shared properties and methods.
// Constructor functions typically start with an uppercase letter by convention.