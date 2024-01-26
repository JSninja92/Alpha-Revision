// Write a program that reads two numbers from the standard input and prints their sum.

// input = [
//     'a',
//     '1'
   
// ];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const label = gets().toUpperCase();
// const rank = +gets();

// if (rank % 2 !== 0 && (label === "A" || label === "C" || label === "E" || label === "G")) {
//     print('dark');
// }
// else {
//     print('light')
// }

// const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = arrayOfNums.filter(num => num % 2 === 0)
// console.log(evens)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using reduce to categorize numbers into even and odd arrays
let result = numbers.reduce((acc, num) => {
  num % 2 === 0 ? acc.evens.push(num) : acc.odds.push(num);
  return acc;
}, { evens: [], odds: [] });

let evens = result.evens;
let odds = result.odds;

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);