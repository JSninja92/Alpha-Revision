// Write a program that, that finds the three largest numbers in a sequence and prints them in descending order in the following format:

// {largest}, {second_largest} and {third_largest}.

// See the example for clarity

// Input
// On the first line you will receive one number - N - the count of numbers to follow.
// On the next N lines you will receive the sequence of numbers, each on a new line.
// Output
// Output the three largest numbers in the already described format.

input = [
    '5',
    '5',
    '4',
    '4',
    '1',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const numbers = +gets();
// let first = Number.MIN_SAFE_INTEGER;
// let second = Number.MIN_SAFE_INTEGER;
// let third = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i < numbers; i++) {
//     const curNumber = +gets();
//     if (curNumber >= first) {
//         third = second;
//         second = first;
//         first = curNumber;
//     }
//     if (curNumber < first && curNumber >= second) {
//         third = second;
//         second = curNumber;
//     }
//     if (curNumber < second && curNumber > third) third = curNumber;
// }

// print(`${first}, ${second} and ${third}`);

const numbers = +gets();
const topThree = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

for (let i = 0; i < numbers; i++) {
    const curNumber = +gets();
    if (curNumber > topThree[2]) {
        topThree[2] = curNumber;
    }
    topThree.sort((a, b) => b - a);
}

const [first, second, third] = topThree;
print(`${first}, ${second} and ${third}`);
