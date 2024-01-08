/*
Longest Common Prefix
Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

function longestCommonPrefix(strs: string[]): string {
  let prefix = "";

  let firstElement = strs[0];

  for (let i = 0; i < firstElement.length; i++) {
    const character = firstElement[i];
    for (let j = 1; j < strs.length; j++) {
      if (character !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += character;
  }

  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
