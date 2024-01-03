/*
Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1,2,3,4,5,6]
k = 5

Three pairs meet the criteria: [1,4], [2,3] and [4,6].

Function Description
Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array ar
int ar[n]: an array of integers
int k: the integer divisor

Returns
- int: the number of pairs

Input Format
The first line contains 2 space-separated integers, n and k.
The second line contains  space-separated integers, each a value of arr[i].

Constraints
2 <= n <= 100
1 <= k <= 100
1 <= ar[i] <= 100

Sample Input
STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]

Sample Output
 5

Explanation

Here are the 5 valid pairs when k = 3:
(0,2) -> ar[0] + ar[2] = 1 + 2 = 3
(0,5) -> ar[0] + ar[5] = 1 + 2 = 3
(1,3) -> ar[1] + ar[3] = 3 + 6 = 9
(2,4) -> ar[2] + ar[4] = 2 + 1 = 3
(4,5) -> ar[4] + ar[5] = 1 + 2 = 3
*/

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let count: number = 0;
  let sum: number = 0;
  for (let i: number = 0; i < n; i++) {
    for (let j: number = i + 1; j < n; j++) {
      sum = ar[i] + ar[j];
      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
