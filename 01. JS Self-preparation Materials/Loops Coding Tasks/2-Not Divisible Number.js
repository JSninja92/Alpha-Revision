// Description
// Write a program that reads from the console a positive integer N and prints all the numbers from 1 to N not divisible by 3 or 7, on a single line, separated by a space.

input = [
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const num = +gets();
let result = '';

for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 7 === 0) {
        continue;
    }
    result += i + ' ';
}

print(result);