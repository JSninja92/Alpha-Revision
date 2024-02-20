// Write a program that orders a list of numbers in the following way:

// 3,-2,1,0,-1,0,-2,1 -> -2,-1,-2,0,0,3,1,1
// You need to find out the criteria for yourself by looking at the example. You can also check the example below.

// Input
// On the only line of input, you will receive the numbers, separated by a comma.
// Output
// Display the list with the mysterious ordering applied removed, separated by a comma.

input = [
    '3,-12,0,0,13,5,1,0,-2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(',').map(Number)
const negatives = [];
const positives = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negatives.push(numbers[i])
    } else if (numbers[i] > 0) {
        positives.push(numbers[i])
    } else {
        positives.unshift(numbers[i]);
    }
}

const result = [...negatives, ...positives]
print(result.join(','));