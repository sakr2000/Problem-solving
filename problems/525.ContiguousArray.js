/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = new Map();
  map.set(0, -1);
  let prefix = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] == 0 ? -1 : nums[i];
    prefix += nums[i];
    if (map.has(prefix)) {
      ans = Math.max(ans, i - map.get(prefix));
    } else {
      map.set(prefix, i);
    }
  }
  return ans;
};
