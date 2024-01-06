/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

// Solution 1: Sliding Window
function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let i = 0;
  let j = 0;
  let result = new Set();

  while (j < s.length) {
    if (!result.has(s.charAt(j))) {
      result.add(s.charAt(j));
      j++;
      max = Math.max(max, result.size);
    } else {
      result.delete(s.charAt(i));
      i++;
    }
  }
  console.log(result);
  return max;
}

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
