// We have the following operations defined for two-digit numbers. There are two possible ways of merging them:

// Merging ab and cd produces bc
// 42 merged with 17 produces 21
// 17 merged with 42 produces 74
// Squashing ab and cd produces a(b+c)d - the middle digit is the sum of b and c
// 42 squashed with 17 produces 437
// 39 squashed with 57 produces 347 (9 + 5 = 14, we use only the 4)
// You have a sequence of N two-digit numbers. Your task is to merge and squash each pair of adjacent numbers.

// Input
// All input data is read from the standard input

// On the first line, you will receive an integer N
// On the next N lines you will receive N two-digit numbers
// Each number will be on a separate line
// Output
// The output data is printed on the standard output

// On the first output line print the merged numbers

// There should be N - 1 of them
// Separate them by spaces
// On the second output line print the squashed numbers

// There should be N - 1 of them
// Separate them by spaces

input = [
    '4',
    '12',
    '23',
    '34',
    '45'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = +gets();
let merged = '';
let squashed = '';
let curNum = gets();

for (let i = 1; i < numbers; i++) {
    const nextNum = gets();

    merged += curNum[1] + nextNum[0] + ' ';
    if ((+curNum[1] + +nextNum[0]) < 10) {
        squashed += curNum[0] + (+curNum[1] + +nextNum[0]) + nextNum[1] + ' ';
    } else {
        squashed += curNum[0] + ((+curNum[1] + +nextNum[0]) - 10) + nextNum[1] + ' ';
    }
    curNum = nextNum;
}

print(merged, '\n', squashed);