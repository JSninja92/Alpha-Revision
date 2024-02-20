// Chess Square Color
// Write a program that determines the color of a chessboard square based on its Label and Rank

// Labels have values from a to h
// Ranks have values from 1 to 8

input = [
    'a',
    '4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const label = gets()
const rank = +gets();

if (rank % 2 !== 0 && (label === "a" || label === "c" || label === "e" || label === "g")) {
    print('dark');
}
else if (rank % 2 === 0 && (label === 'b' || label === 'd' || label === 'f' || label === 'h')) {
    print('dark')
} else {
    print('light')
}