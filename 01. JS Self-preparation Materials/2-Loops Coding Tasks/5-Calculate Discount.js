// You need to calculate the discounted price for each item in your shopping cart. The discount is 65%, a real deal for you.

// Input
// On the first line, you will receive N - the number of the items in your shopping cart
// On the next N lines you will each item's price
// Output
// On each line in the output print the discounted price of the item with two digits after the decimal point (Math rules for rounding apply)

input = [
    '2',
    '50',
    '40',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const items = +gets();
const discount = 0.35;

for (let i = 0; i < items; i++) {
    const curItemPrice = +gets();
    print((curItemPrice * discount).toFixed(2));
}

