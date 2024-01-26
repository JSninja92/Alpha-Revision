// Description
// Write a method that reverses the digits of a given decimal number.

// Input
// On the first line you will receive a number
// Output
// Print the given number with reversed digits

input = [
    '123.45'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let reversedNumbers = gets().split('').reverse().join('');
print(reversedNumbers)