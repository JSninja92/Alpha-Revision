// Guess the Season
// Write a program that displays the name of the season associated with a given date and month.Use the table below to determine the season's start and end dates.

// Spring	March 20
// Summer	June 21
// Autumn	September 22
// Winter	December 21

input = [
    'June',
    '24'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const month = gets();
const date = +gets();
let season = '';

if ((month === 'March' && date >= 20) || month === 'April' || month === 'May' || (month === 'June' && date < 21)) {
    season = 'Spring';
} else if ((month === 'June' && date >= 21) || month === 'July' || month === 'August' || (month === 'September' && date < 22)) {
    season = 'Summer';
} else if ((month === 'September' && date >= 22) || month === 'November' || (month === 'December' && date < 21)) {
    season = 'Autumn';
} else {
    season = 'Winter';
}

print(season);

