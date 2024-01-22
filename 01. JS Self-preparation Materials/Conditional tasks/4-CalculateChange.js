// Calculate Change
// Write a program that determines the least amount of coins needed for a cashier to return change.

// For example, if the price of something is 0.76 leva and the customer has paid 1 leva, the least amount of coins is 1 x 20 stotinki and 2 x 2 stotinki.

// Use the coins of 1 lev, 50, 20, 10, 5, 2 and 1 stotinki.

// Input
// On the first line, you will receive the price in leva.
// On the second line, you will receive how much the customer has paid in leva.
// Output
// There is a variable amount of output lines.
// Print each required denomination on a new line, ordered from highest to lowest.
// Input

input = [
    '1.73',
    '5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const price = +gets();
const pay = +gets();
let change = (pay - price) * 100

if (change >= 100) {
    print(`${Math.floor(change / 100)} x 1 lev`)
    change %= 100;
}
if (change >= 50) {
    print(`${Math.floor(change / 50)} x 50 stotinki`);
    change %= 50;
}
if (change >= 20) {
    print(`${Math.floor(change / 20)} x 20 stotinki`);
    change %= 20;
}
if (change >= 10) {
    print(`${Math.floor(change / 10)} x 10 stotinki`);
    change %= 10;
}
if (change >= 5) {
    print(`${Math.floor(change / 5)} x 5 stotinki`);
    change %= 5;
}
if (change >= 2) {
    print(`${Math.floor(change / 2)} x 2 stotinki`);
    change %= 2;
}
if (change >= 1) {
    print(`${change / 1} x 1 stotinka`);
}
