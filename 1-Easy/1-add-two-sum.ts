const addTwoSum = (nums: number[], target: number): number[] => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];
    if (map.has(numToFind)) {
      return [map.get(numToFind), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
