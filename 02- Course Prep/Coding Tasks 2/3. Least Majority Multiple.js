// Least Majority Multiple
// Given five positive integers, their least majority multiple is the smallest positive integer that is divisible by at least three of them.

// Your task is to write a program that for given distinct integers a, b, c, d and e, returns their least majority multiple.

// For example if we have 1, 2, 3, 4 and 5 the majority multiple of the given five numbers is 4 because it is divisible by 1, 2, and 4.

// Another example: if we have 30, 42, 70, 35 and 90 the answer will be 210, because it is divisible by 30, 42, 70, and 35 - four out of five numbers, which is a majority.

// Input
// Read from the standard input

// The input data will consist of 5 lines.

// The numbers a, b, c, d and e will each be on a single line.

// The input data will always be valid and in the format described. There is no need to check it explicitly.

// Output
// Print on the standard output

// On the only output line you must print the least majority multiple of the given numbers.

// Constraints
// a, b, c, d and e will each be integer numbers between 1 and 100, inclusive.
// a, b, c, d and e will be distinct.

input = [
    '30',
    '42',
    '70',
    '35',
    '90'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numsArr = [];
let result;

for (let i = 0; i < 5; i++) {
    numsArr.push(+gets());
}
numsArr.sort();

function isDivisibleByThree(num) {
    let count = 0;
    for (let j = 0; j < numsArr.length; j++) {
        if (num % numsArr[j] === 0) {
            count++;
        }
    }
    return count >= 3;
}
let multiplier = 1;

while (!result) {
    for (let i = 0; i < numsArr.length; i++) {
        let curNum = numsArr[i] * multiplier;
        if (isDivisibleByThree(curNum)) {
            result = curNum;
            break;
        }
    }
    multiplier++;
}

print(result)

//---------------------------------------------

// const numsArr = [];
// let result;



// numsArr.sort((a, b) => a - b);

// function isDivisibleByThree(number) {
//     let count = 0;
//     for (let j = 0; j < numsArr.length; j++) {
//         if (number % numsArr[j] === 0) {
//             count++;
//         }
//     }
//     return count >= 3;
// }

// let multiplier = 1;
// while (!result) {
//     for (let i = 0; i < numsArr.length; i++) {
//         let curNum = numsArr[i] * multiplier;
//         if (isDivisibleByThree(curNum)) {
//             result = curNum;
//             break;
//         }
//     }
//     multiplier++;
// }

// print(result);

// -------------------------------------------

// const numsArr = [];
// let result;
// let y = 1;
// let gotResult = true;

// for (let i = 0; i < 5; i++) {
//     numsArr.push(+gets());
// }
// numsArr.sort()

// for (let i = 0; i < 5; i++) {
//     let curNum = numsArr[i];
//     if (!gotResult) {
//         curNum *= y;
//     }
//     let multiple = 0;
//     for (let j = 0; j < 5; j++) {
//         const divisor = numsArr[j]
//         if (curNum % divisor === 0) {
//             multiple++;
//         }
//     }
//     if (multiple >= 3) {
//         result = curNum;
//         break;
//     }
//     if (i === 4 && multiple <= 2) {
//         gotResult = false;
//         y++
//         i = 0;
//     }
// }

// print(result);

//----------------------------------------------

// const nums = [];

// for (let i = 0; i < 5; i++) {
//     nums.push(+gets());
// }
// nums.sort();
// let multi = [...nums];
// let result;
// let y = 2;

// for (let i = 0; i < 5; i++) {
//     let times = 0;
//     const curNum = multi[i];
//     for (let j = 0; j < 5; j++) {
//         const divisor = nums[j];
//         if (curNum % divisor === 0) {
//             times++;
//         }
//     }
//     if (times >= 3) {
//         result = curNum;
//         break;
//     } else if (i === 4) {
//         i = 0;
//         multi = multi.map(num => num * y);
//         y++;
//     }
// }

// print(result);