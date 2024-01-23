// Write a program that enters from the console a positive integer n and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

input = [
    '5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const num = +gets();
let nums = '';
for (i = 1; i <= num; i++) {
nums += ' ' + i;
}
print(nums);