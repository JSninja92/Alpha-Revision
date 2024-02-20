// Given an array integers, write a program that moves all of the zeroes to the end of it, while maintaining the relative order of the non-zero elements.

// Input
// Read from the standard input:

// There is one line of input, containing N amount of integers, seperated by a comma (",")
// Output
// Print to the standard output:

// There is one line of outpit, containing the sorted integers, seperated by a comma (",")

input = [
    '0,1,0,3,12'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(',').map(Number);
const zeros = [];
const others = [];

for (let i = 0; i < numbers.length; i++) {
    const cur = numbers[i];
    cur !== 0 ? others.push(cur) : zeros.push(cur);
}
const result = [...others, ...zeros];

print(result)