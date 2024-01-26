// A phone bill plan includes 1 hour of free calls and 20 text messages for 12.00 levas. Each additional minute costs 0.10 levas and each additional message costs 0.06 levas. Also, any additional minutes/text messages are subject to 20% sales tax. Write a program that calculates the additional charge for text, the additional charge for minutes, and the sales tax charge for both. Also, display the total amount paid.

// Input
// On the first line, you will receive the total amount of text messages.
// On the second line, you will receive the total amount of minutes.
// Output
// 1st line - number of additional messages and additional amount paid
// 2nd line - number of additional minutes and additional amount paid
// 3rd line - amount paid in taxes
// 4th line - total bill

input = [
    '31',
    '115'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let messages = +gets() - 20;
let minutes = +gets() - 60;

if (messages <= 0) messages = 0;
if (minutes <= 0) minutes = 0;

const addMessages = messages * 0.06;
const addMinutes = minutes * 0.10;
const tax = (addMessages + addMinutes) * 0.20;

print(`${messages} additional messages for ${addMessages.toFixed(2)} levas`);
print(`${minutes} additional minutes for ${addMinutes.toFixed(2)} levas`);
print(`${tax.toFixed(2)} additional taxes`);
print(`${(12.00 + tax + addMessages + addMinutes).toFixed(2)} total bill`);