// Write a program that rotates a list several times (the first element becomes last).

// list = 1,2,3,4,5 and N = 2 -> result = 3,4,5,1,2
// Note that N could be larger than the length of the list.

// list = 1,2,3,4,5 and N = 6 -> result = 2,3,4,5,1
// Input
// On the first line you will receive the list of numbers.
// On the second line you will receive N
// Output
// On the only line of output, print the numbers separated by a comma

input = [
    '2,1,3,4', //4 2 1 3, 3 4 2 1, 1 3 4 2, 2 1 3 4, 4 2 1 3
    '5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(',');
const rotations = +gets();

for (let i = 0; i < rotations; i++) {
    const extracted = numbers.shift();
    numbers.push(extracted);
}

print(numbers.join(','));