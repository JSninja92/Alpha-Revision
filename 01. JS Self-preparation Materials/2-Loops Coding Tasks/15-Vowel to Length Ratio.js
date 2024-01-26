// You are still hungry!

// The objective criteria of finding the food with the longest length is not working anymore. Continuing the idea of thinking outside the box, you decide to introduce a new rule - the best food is the one with the least vowels-to-letters ratio.
// For instance:

// pizza -> 2/5 (2 vowels, 5 letters)
// macaroni -> 4/8 (4 vowels, 8 letters)
// Pizza is clearly better.

// The vowels are 'aouei'

// If two foods share the same ratio, choose the one with more vowels. If they have the same ratio and same number of vowels, choose the one with more letters.

// Input
// The input consists of several lines
// On the first line - integer N - the number of lines to follow
// On the next N lines - each food
// Output
// Output the best food and its ratio in format `food vowels/letters'

input = [
    '4',
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const words = +gets();
const vowels = ['a', 'y', 'u', 'i', 'o', 'e'];
let wordVowels = 0;
let leastVowWord = '';
let lowestRatio = Number.MAX_SAFE_INTEGER;


for (let i = 0; i < words; i++) {
    curWord = gets();
    let curWordVowels = 0;
    for (let y = 0; y < curWord.length; y++) {
        if (vowels.includes(curWord[y])) {
            curWordVowels++;
        }
    }
    if (curWordVowels / curWord.length < lowestRatio) {
        lowestRatio = curWordVowels / curWord.length;
        leastVowWord = curWord;
        wordVowels = curWordVowels;
    } else if (curWordVowels / curWord.length === lowestRatio) {
        if (curWordVowels > wordVowels) {
            leastVowWord = curWord;
            wordVowels = curWordVowels;
        } else if (curWord.length > leastVowWord.length) {
            leastVowWord = curWord;
            wordVowels = curWordVowels;
        }
    }
}
print(`${leastVowWord} ${wordVowels}/${leastVowWord.length}`);