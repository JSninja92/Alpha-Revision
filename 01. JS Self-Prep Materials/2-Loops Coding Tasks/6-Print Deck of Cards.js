// Description
// Write a program that reads a card sign(as a string) from the console and generates and prints all possible cards from a standard deck of 52 cards up to the card with the given sign(without the jokers). The cards should be printed using classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).

// The card faces should start from 2 to A(10 is 10).
// Print each card face in its four possible suits: clubs, diamonds, hearts, and spades.
// Input
// On the only line, you will receive the sign of the card to which you should print the cards in the deck.
// Output
// The output should follow the format defined in the sample tests below.
// Constraints
// The input character will always be a valid card sign.

input = [
    'K'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const card = gets();
const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const index = deck.indexOf(card)

for (let i = 0; i <= index; i++) {
    const curCard = deck[i];
    print(`${curCard} of spades, ${curCard} of clubs, ${curCard} of hearts, ${curCard} of diamonds`);
}