// Energy
// Energy drink calculations are simple - in order to decide how many drinks you should have, you are given a number. Find the sum of the even digits and the sum of the odd digits of that number, then compare these sums and:

// If the sum of the even digits is bigger, drink energy drinks.
// If the sum of the odd digits is bigger, drink cups of coffee.
// If the two sums are equal, drink both.
// Input
// The input data is read from the standard input (the console).

// The only input line contains the number N.
// Output
// The output data is printed on the standard output (the console).

// The output consists of one line. You must print the kind of beverage you should drink, as well as the sum of digits that lead to that decision.
// Note: The beverage is always in plural, no matter the number before it.

input = [
    '3621'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const num = gets().split('').map(Number);
let odds = 0;
let evens = 0;

for (let i = 0; i < num.length; i++) {
    const curNum = num[i];
    curNum % 2 === 0 ? evens += curNum : odds += curNum;
}

if (odds > evens) {
    print(`${odds} cups of coffee`)
} else if (odds < evens) {
    print(`${evens} energy drinks`)
} else {
    print(`${evens} of both`)
}