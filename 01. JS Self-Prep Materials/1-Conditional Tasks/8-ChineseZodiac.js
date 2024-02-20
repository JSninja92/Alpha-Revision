// The Chinese zodiac assigns an animal to year according to the following table:

// Year	Animal		Year	Animal
// 2000	Dragon		2006	Dog
// 2001	Snake		2007	Pig
// 2002	Horse		2008	Rat
// 2003	Sheep		2009	Ox
// 2004	Monkey		2010	Tiger
// 2005	Rooster		2011	Hare
// Write a program that determines the zodiac sign for a particular year. Note that the cycle repeats itself, so 2012 will be the year of the Dragon again.

input = [
    '2011'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const year = +gets();
const sign = year % 12;

switch(sign) {
    case 8: print('Dragon'); break;
    case 9: print('Snake'); break;
    case 10: print('Horse'); break;
    case 11: print('Sheep'); break;
    case 12: print('Monkey'); break;
    case 1: print('Rooster'); break;
    case 2: print('Dog'); break;
    case 3: print('Pig'); break;
    case 4: print('Rat'); break;
    case 5: print('Ox'); break;
    case 6: print('Tiger'); break;
    case 7: print('Hare'); break;
}
print(sign)