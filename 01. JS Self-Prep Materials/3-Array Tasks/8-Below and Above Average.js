// Write a program that calculates the average of a list of numbers. Display the average, all the numbers below the average, and all the numbers above the average. Maintain the relative order of numbers.

// Input
// On the only line of input, you will receive the numbers, separated by a comma.
// Output
// On the first line, print the average, with two digits after the decimal separator.
// On the second line, print all the numbers bellow the average
// On the third line, print all the numbers above the average

input = [
    '3,-12,0,0,13,5,1,0,-2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(',').map(Number)
const average = (numbers.reduce((accumulator, num) => accumulator + num) / numbers.length).toFixed(2);
const below = numbers.filter(num => num < average);
const above = numbers.filter(num => num > average);

print(`avg: ${average}
below: ${below}
above: ${above}`);
