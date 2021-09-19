const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  // console.log(digit);
}

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
    Write a for...of loop that:
    1) loops through each day in the days array
    2) capitalizes the first letter of the day
    3) and prints the day out to the console
 */

let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// your code goes here

for (let day of days) {
  day = day.charAt().toUpperCase() + day.substr(1);
  console.log(day);
}
