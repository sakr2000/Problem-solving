/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (a, b) {
  let ans = [];
  a.forEach((num) => {
    if (b.includes(num) && !ans.includes(num)) {
      ans.push(num);
    }
  });
  return ans;
};
