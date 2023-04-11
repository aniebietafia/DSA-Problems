/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

const maxSubArray = function(nums) {
    let currSum = -Infinity;
    let maxSum = 0;
    if (nums.length === 0){
        return null
    }
    for (let i = 0; i < nums.length; i++){
        if (nums.length === 1){
            return maxSum += nums[i]
        }
        currSum = Math.max(0, currSum);
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))

const obj = function (nums){
    const newObj = {}
    for (let i = 0; i < nums.length; i++){
        newObj[i] = nums[i]
    }
    return newObj
}
console.log(obj([4, 3, 9, 6]))

//First recurring Number in an array
function firstRecurringNumber(arrOfNumber) {
  let map = {}
    for (let i = 0; i < arrOfNumber.length; i++){
        if (map[arrOfNumber[i]] !== undefined){
            return arrOfNumber[i]
        }else {
            map[arrOfNumber[i]] = i
        }
    }
    return null
}
console.log(firstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]))
