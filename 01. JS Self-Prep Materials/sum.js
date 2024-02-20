// Write a program that reads two numbers from the standard input and prints their sum.

// input = [
//     'a',
//     '1'

// ];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const label = gets().toUpperCase();
// const rank = +gets();

// if (rank % 2 !== 0 && (label === "A" || label === "C" || label === "E" || label === "G")) {
//     print('dark');
// }
// else {
//     print('light')
// }

// const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = arrayOfNums.filter(num => num % 2 === 0)
// console.log(evens)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Using reduce to categorize numbers into even and odd arrays
// let result = numbers.reduce((acc, num) => {
//   num % 2 === 0 ? acc.evens.push(num) : acc.odds.push(num);
//   return acc;
// }, { evens: [], odds: [] });

// let evens = result.evens;
// let odds = result.odds;

// console.log("Even numbers:", evens);
// console.log("Odd numbers:", odds);


input = [
  'Tempera#### na @#$ata 23 grad#%&.'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// function longestBrokenSequence(message) {
//   const arr = message.split(' ');
//   let longest = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let curLong = 0;
//     const curString = arr[i]
//     for (let j = 0; j < curString.length; j++) {
//       const symbol = curString[j]
//       if (!/[a-zA-Z0-9\s]/.test(symbol) && symbol !== '.') {
//         curLong++;
//       }
//     }
//     if (curLong > longest) longest = curLong;
//   }
//   print(longest);
// }

// longestBrokenSequence(gets());

function longestBrokenSequence(message) {
  let longest = 0;
  let curLong = 0;

  for (let i = 0; i < message.length; i++) {
    const symbol = message[i];
    if (!/[a-zA-Z0-9\s.]/.test(symbol)) {
      curLong++;
    } else {
      if (curLong > longest) longest = curLong;
      curLong = 0;
    }
  }

  print(longest);
}

longestBrokenSequence(gets());