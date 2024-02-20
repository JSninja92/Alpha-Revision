// Write a program that removes all duplicates from a list of elements.

// 1,2,2,2,4,7 -> 1,2,4,7.
// Maintain the relative order of the remaining items.

// Input
// On the only line of input, you will receive the elements, separated by a comma.
// Output
// Display the list with the duplicates removed, separated by a comma.

input = [
    '1,2,2,2,2,18,3,12'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const array = gets().split(',');
const noDuplicates = [...new Set(array)];
print(noDuplicates.join(','))