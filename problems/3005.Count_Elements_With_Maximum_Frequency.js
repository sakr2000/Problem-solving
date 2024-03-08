/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let count = {};
  let maxFrequency = 0;
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, count[num]);
  }

  let maxTotalFrequency = 0;
  for (let freq of Object.values(count)) {
    if (freq === maxFrequency) {
      maxTotalFrequency += freq;
    }
  }

  return maxTotalFrequency;
};
