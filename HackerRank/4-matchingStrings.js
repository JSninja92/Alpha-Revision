// function matchingStrings(s, q) {
//     // Write your code here
//     const result = [];
//     for (let i = 0; i < q.length; i++) {
//         let occurrences = 0;
//         for (let j = 0; j < s.length; j++) {
//             if (s[j] === q[i]) {
//                 occurrences++;
//             }
//         }
//         result.push(occurrences);
//     }
//     return result;
// }
// const strings = ['aba', 'baba', 'aba', 'xzxb'];
// const queries = ['aba', 'xzxb', 'ab'];
// console.log(matchingStrings(strings, queries));

function matchingStrings(strings, queries) {
    const occurrences = {};

    for (const string of strings) {
        occurrences[string] = (occurrences[string] || 0) + 1;
    }

    const result = [];

    for (const query of queries) {
        result.push(occurrences[query] || 0);
    }

    return result;
}

const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

console.log(matchingStrings(strings, queries));