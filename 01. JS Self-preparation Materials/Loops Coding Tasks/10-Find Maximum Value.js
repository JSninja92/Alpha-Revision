// Write a program that finds the maximum number from a given sequence.

// Input
// On the first line you will receive one number - N - the count of numbers to follow.
// On the next N lines you will receive the sequence of numbers, each on a new line.
// Output
// Output only one number - the maximum number you find

input = [
    '3',
    '1',
    '2',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = +gets();
let biggestNum = -Infinity;

for (let i = 0; i < numbers; i++) {
    const curNumber = +gets();
    if (curNumber > biggestNum) biggestNum = curNumber;
}

print(biggestNum);