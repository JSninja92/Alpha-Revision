// "Good" numbers
// Description
// Ivancho considers a number to be "good", if it can be divided by each of its digits.

// For example:

// 13 is not "good", because it cannot be divided by 3;
// 36 is "good", because it can be divided both by 3 and 6;
// 102 is "good" - can be divided by 1 and by 2;
// 103 is not "good" - cannot be divided by 3;
// Help Invancho by writing a program, which counts the "good" numbers between number A and number B (inclusive).

// Input
// Read from the standard input the numbers A and B received on one line, separated by space.

// Output
// Print to the standard output the count of "good" numbers.

input = [
    '42 142'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const [a, b] = gets().split(' ');
let goodNum = 0;

for (let i = +a; i <= +b; i++) {
    let isGood = true;
    const curNum = i + '';
    const splitNum = curNum.split('').map(Number);
    for (let j = 0; j < splitNum.length; j++) {
        if (i % splitNum[j] !== 0 && splitNum[j] !== 0) {
            isGood = false;
            break;
        }
    }
    if (isGood) {
        goodNum++;
    }
}

print(goodNum);