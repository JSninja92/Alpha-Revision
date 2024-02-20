// Description
// Write a program that, for a given two numbers N and X, calculates the sum S = 1 + 1!/x + 2!/x2 + … + N!/xN.

// Use only one loop. Print the result with 5 digits after the decimal point.
// Each element is calculated as follows: (previous_element) * i / x
// Input
// On the first line you will receive one number - N.
// On the second line you will receive another number - X.

input = [
    '3',
    '2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const x = +gets();
let factN = 1;
let multiX = 1;
let result = 1;

for (let i = 1; i <= n; i++) {
factN *= i;
multiX *= x;
result += factN / multiX;
}
print(result.toFixed(5));


