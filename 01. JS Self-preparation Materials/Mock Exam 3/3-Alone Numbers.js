// Alone Numbers
// We will give you array and a target! You need to find all "alone" elements in the array that match the given target. These elements are alone if they have values before and after them, but those values are different from them.

// Return new version of the given array where every element that matches the target and is alone is replaced by whichever value to its left or right is larger.

// Input
// Read from the standard input:

// The first line is the array with coma separated integer values -> 1,2,3
// The second line is the target that you should check against -> 2
// Output
// Print to the standard output:

// One line of output - the changed array -> [1, 3, 3]
// please note that there is space after each coma.

input = [
    '1, 2, 3, 2, 5, 2',
    '2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(',').map(Number);
const target = +gets();

for (let i = 1; i < numbers.length - 1; i++) {
    const curNum = numbers[i];
    const prevNum = numbers[i - 1];
    const nextNum = numbers[i + 1];

    if (curNum === target && curNum !== prevNum && curNum !== nextNum) {
        numbers[i] = Math.max(prevNum, nextNum);
    }
}

print(numbers)