// Sort Numbers
// Write a program that reads a list of numbers separated by a comma and space.

// Arrange the numbers in descending order.

// Output all numbers on a single line, separated by a comma and a space.

// Input
// On the only line you will receive all the numbers to be sorted.
// Output
// On the only line of output, print all the numbers sorted in format n1, n2, n3, .. n

input = [
    '2, 3, 1, 5, 6'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const sortedNumbers = gets().split(', ').map(Number).sort((a, b) => b - a);
print(sortedNumbers);