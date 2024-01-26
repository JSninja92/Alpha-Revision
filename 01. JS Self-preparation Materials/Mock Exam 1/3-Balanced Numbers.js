// A balanced number is a 3-digit number whose second digit is equal to the sum of the first and last digit.

// Write a program which reads and sums balanced numbers. You should stop when an unbalanced number is given.

// Input
// Input data is read from the standard input

// Numbers will be given
// Each one will be on a separate line
// Output
// Print to the standard output

input = [
    '275',
    '693',
    '110',
    '742'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let curNumber = gets();
let sum = 0;

while (curNumber) {
    if (+curNumber[0] + +curNumber[2] === +curNumber[1]) {
        sum += +curNumber;
        curNumber = gets();
    } else {
        break;
    }
}

print(sum);



