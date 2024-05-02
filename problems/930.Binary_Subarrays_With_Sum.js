/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let map = {};
  map[0] = 1;
  let R = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    R += nums[i];
    let L = R - goal;
    ans += parseInt(map[L] || 0);
    map[R] = parseInt(map[R] || 0) + 1;
  }
  return ans;
};
