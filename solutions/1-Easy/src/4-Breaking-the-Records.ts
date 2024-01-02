/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example
scores = [12,24,10,24]

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

int scores[n]: points scored per game

Returns
int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

Input Format
The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing the respective values of score(0), score(1),...,score(n-1).

Constraints
1 <= n <= 1000
0 <= scores[i] <= 10^8
*/

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
  let minScore: number = scores[0];
  let maxScore: number = scores[0];
  let minCount: number = 0;
  let maxCount: number = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < minScore) {
      minScore = scores[i];
      minCount++;
    } else if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxCount++;
    }
  }
  return [maxCount, minCount];
}

console.log(breakingRecords([12, 24, 10, 24]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
