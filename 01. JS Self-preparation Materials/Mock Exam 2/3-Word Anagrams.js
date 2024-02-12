// You are given a word and a list of words. Your task is to check whether all the words from the list are anagrams of the word.

// An anagram is a word formed by rearranging the letters of another word:

// The following are anagrams of "anagram":
// "gramana", "aaagrnm", "margana", etc..
// The following are NOT anagrams of "anagram":
// "aanagram", "aaagram", "anagra", "anagrama", "yxy"
// Input
// Read from the standard input

// On the first line, find W - the word to check against;
// On the second line, find N - the number of words in the list of words WORDS;
// On the next N lines, the words from WORDS;
// Output
// Print to the standard output

// For each word from WORDS print either:
// "Yes", if the word is an anagram of W;
// "No", if the word is NOT an anagram of W;

input = [
    'anagram',
    '6',
    'gramana',
    'aaagrnm',
    'anagra',
    'margana',
    'abc',
    'xy'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const anagram = gets().split('').sort().join('');
const words = +gets();

for (let i = 0; i < words; i++) {
    const curWord = gets().split('').sort().join('');
    if (curWord !== anagram) {
        print('No');
    } else {
        print('Yes');
    }
}

