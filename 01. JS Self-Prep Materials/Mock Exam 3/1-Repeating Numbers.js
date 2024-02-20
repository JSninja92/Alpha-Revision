// Repeating Numbers
// Write a program that accepts an array of integers and returns the one that occurs the most times. If there are two numbers that occur the same amount of times, return the smaller of the two.

// Input
// Read from the standard input;
// The number N is on the first line;
// An integer between 1 and 10 is written on each of the next N lines;
// The input data will always be valid and in the format described. There is no need to check it explicitly;
// Output
// Print to the standard output;
// On the only output line you must print the number that occurs the most;

input = [
    '5',
    '1',
    '2',
    '3',
    '1',
    '2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = +gets();
const arr = [];

for (let i = 0; i < numbers; i++) {
    arr.push(+gets());
}

let mostOccNum;
let mostOccs = 0;

for (let i = 0; i < numbers; i++) {
    let curNum = arr[i];
    let curOccs = 0;
    for (let j = 0; j < numbers; j++) {
        if (curNum === arr[j]) {
            curOccs++;
        }
    }
    if (curOccs > mostOccs) {
        mostOccNum = curNum;
        mostOccs = curOccs;
    }
    if (curOccs === mostOccs && curNum < mostOccNum) {
        mostOccNum = curNum;
    }
}
print(mostOccNum);