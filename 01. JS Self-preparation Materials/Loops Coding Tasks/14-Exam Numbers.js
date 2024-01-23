// While studying for the exam, you get frustrated with all the boring tasks and decide to come up with a task of your own. You want to find all the 3-digit numbers that are in some interval and whose sum of digits equal some target. You decide to name them exam numbers for good fortune.

// Write a program that prints those exam numbers in increasing sequence.

// Input
// The input consists of exactly 3 lines
// x - interval start (inclusive)
// y - interval end (inclusive)
// t - target sum
// Output
// Output each exam number on a separate line.

input = [
    '100',
    '200',
    '12',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const start = +gets();
const end = +gets();
const interval = +gets();

for (let i = start; i <= end; i++) {
    i += '';
    let sum = +i[0] + +i[1] + +i[2]
    if (sum === interval) print(i);
}