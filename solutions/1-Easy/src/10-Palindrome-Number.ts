/*
Palindrome Number
Easy

Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:
-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

// function isPalindrome(x: number): boolean {
//   const stringNumber = x.toString();
//   let newString = "";

//   // Reverse the string
//   for (let i = stringNumber.length - 1; i >= 0; i--) {
//     newString += stringNumber[i];
//   }

//   // convert newString to number
//   const covertedStr = Number(newString);

//   if (x !== covertedStr) {
//     return false;
//   }

//   return true;
// }

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(5995));

function isPalindrome(x: number): boolean {
  const convertXtoString = String(x);

  // Perform operation on string
  const result = Number([...convertXtoString].reverse().join(""));

  if (x !== result) {
    return false;
  }

  return true;
}
