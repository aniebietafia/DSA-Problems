/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
string s: a time in 12 hour format

Returns
string: the time in 24 hour format

Input Format
A single string  that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints
All input times are valid

Sample Input
07:05:45PM

Sample Output
19:05:45
*/

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// solution 1 - using Date object
function timeConversion(s: string): string {
  // Write your code here
  const timeArray: string[] = s.split(":");
  const hour: string = timeArray[0];
  const minute: string = timeArray[1];
  const seconds: string = timeArray[2].substring(0, 2);
  const ampm: string = timeArray[2].substring(2).toLowerCase();

  let newHour: string | number;

  if (ampm === "am" && hour === "12") {
    newHour = "00";
  } else if (ampm === "pm" && hour === "12") {
    newHour = "12";
  } else if (ampm === "pm") {
    newHour = parseInt(hour, 10) + 12;
  } else {
    newHour = hour;
  }

  return `${newHour}:${minute}:${seconds}`;
}

const result = timeConversion("01:05:45pM");
console.log(result);

// solution 2 - using Date object
function timeConversion2(s: string): string {
  // Write your code here
  const date = new Date(`01/01/2000 ${s}`);
  const time = date.toTimeString().split(" ")[0];
  return time;
}
const result2 = timeConversion("04:05:45pM");
console.log(result2);
