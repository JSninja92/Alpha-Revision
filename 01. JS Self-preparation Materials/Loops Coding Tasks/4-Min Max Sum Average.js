// Description
// Write a program that reads from the console a sequence of N real numbers and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).

// The input starts by the number N (alone in a line) followed by N lines, each holding an real number.
// The output is like in the examples below.
// Input
// On the first line, you will receive the number N.
// On each of the next N lines, you will receive a single real number.
// Output
// You output must always consist of exactly 4 lines - the minimal element on the first line, the maximal on the second, the sum on the third and the average on the fourth, in the following format:

input = [
    '3',
    '2',
    '5',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const nums = +gets()
let max = -Infinity;
let min = Infinity;
let sum = 0;

for (let i = 0; i < nums; i++) {
    let curNum = +gets();
    if (curNum > max) max = curNum;
    if (curNum < min) min = curNum;
    sum += curNum;
}
print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${(sum / nums).toFixed(2)}`);
