// Given an array of integers, some elements appear twice and others appear once. Each integer is in the range of [1, N], where N is the number of elements in the array.

// Find all the integers of [1, N] inclusive that do NOT appear in this array.

// Input
// Read from the standard input:

// There is one line of input, containing N amount of integers, seperated by a comma (",")
// Output
// Print to the standard output:

// There is one line of output, containing the sorted integers, seperated by a comma (",")

input = [
    '1,2,3,3,5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(',').map(Number);
const missing = [];

for (let i = 1; i <= numbers.length; i++) {
    if (!numbers.includes(i)) missing.push(i);
}
print(missing)