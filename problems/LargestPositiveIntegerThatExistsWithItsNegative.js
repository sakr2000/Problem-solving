/**
 * @param {number[]} nums
 * @return {number}
 */

// 1st solution
var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);
  p = nums.length - 1;
  max = -1;
  for (i = 0; i <= nums.length; i++) {
    while (p >= i) {
      if (nums[i] == -nums[p]) {
        max = nums[p];
        return max;
      }
      p -= 1;
    }
    p = nums.length - 1;
  }
  return max;
};

// 2nd optimized solution
var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);
  let right = nums.length - 1;
  let left = 0;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === 0) {
      return nums[right];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
};
