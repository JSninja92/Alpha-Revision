// Check for Play Card
// Description
// Classical play cards use the following signs to designate the card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A. Write a program that enters a string and prints "yes" if it is a valid card sign or "no" otherwise.

// Input
// On the only line you will receive a single string.
// Output
// Output "yes" if the string is a card sign, otherwise print "no".

input = [
    'K'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const card = gets();

deck.includes(card) ? print('yes') : print('no')