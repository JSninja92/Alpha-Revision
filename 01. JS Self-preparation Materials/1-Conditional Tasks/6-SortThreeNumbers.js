// Sort Three Numbers
// Description
// Write a program that enters 3 real numbers and prints them sorted in descending order.

// Use nested if statements.
// Don’t use arrays and the built-in sorting functionality.
// Input
// On the first three lines, you will receive the three numbers, each on a separate line.
// Output
// Output a single line on the console - the sorted numbers, separated by a white space
// Constraints
// The three numbers will always be valid integer numbers in the range [-1000, 1000]
// Sample tests
// Input	Output
// 3
// 2
// 1	3 2 1
// -5
// 3
// -5	3 -5 -5
// 1
// 2
// 20	20 2 1

input = [
    '-5',
    '3',
    '-4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

let biggest = 0;
let second = 0;
let third = 0;

if (a > b && a > c) {
    biggest = a;
} else if (b > a && b > c) {
    biggest = b;
} else biggest = c;

if ((a < c && a > b) || (a < b && a > c)) {
    second = a;
} else if ((b < c && a < b) || (a > b && b > c)) {
    second = b;
} else {
    second = c;
}

if (a < b && a < c) {
    third = a;
} else if (b < a && b < c) {
    third = b;
} else {
    third = c;
}

print(biggest + ' ' + second + ' ' + third);