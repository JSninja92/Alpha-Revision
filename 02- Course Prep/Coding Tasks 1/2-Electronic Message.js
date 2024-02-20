// Electronic message
// Description
// An electronic message board at the beach in Sunny beach shows information about the weather and the temperature of the air and the seawater. The messages contain small and capital Latin letters, digits and spaces. At the end of the information there is a full-stop.

// Every day Loni the elephant checks the weather conditions from the message board. One day Loni finds out that the board is broken and the message contains other characters, different from the regular. Curious as he is, he wants to find out how long is the longest sequence of broken characters on the board.

// Help him write a program, which reads the message and produces the maximum length of sequential broken characters.

// Input
// On the first and only line of the standard input, there will be a text ending with full-stop .

// Output
// Print to the standard output a number - the length of the longest sequence of broken characters (different from letter, digit, space).

input = [
    '185'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

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