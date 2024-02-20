// Game
// Three friends came up with a game for having fun in the break between the classes. One of them says a three-digit number and the others use it to form a mathematical expressions by using operators for sum and multiplication between the digits.

// The winner is the first one who founds the biggest number that is a result of the above mentioned rules.

// Write a program 'game', which prints out that biggest number.

// Input
// Read from the standard input

// The first line of the input will be positive three-digit number N.
// Output
// Print on the standard output

// The result should be the calculated biggest number.
// The calculation order

input = [
    '185'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split('').map(Number);

const [a, b, c] = numbers;

const result = Math.max(a + b + c, a * b * c, a * b + c, a + b * c);

print(result);