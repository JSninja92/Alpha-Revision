// You are given N integers, each on a new line

// Write a program that checks whether the product of the odd lines is equal to the product of the even lines.
// Lines are counted from 1 to N, so the first line is odd, the second is even, etc.
// Input
// On the first line you will receive the number N
// On each of the next N lines, you will receive a number
// Output
// If the two products are equal, output a string in the format "yes PRODUCT_VALUE", otherwise write on the console "no ODD_PRODUCT_VALUE EVEN_PRODUCT_VALUE"

input = [
    '5',
    '2',
    '1',
    '1',
    '6',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = +gets();
let odds = 1;
let evens = 1;

for (let i = 1; i <= numbers; i++) {
    const curNumber = +gets();
    if (i % 2 !== 0) {
        odds *= curNumber;
    } else {
        evens *= curNumber;
    }
}

if (odds === evens) {
    print(`yes ${odds}`);
} else {
    print(`no ${odds} ${evens}`);
}