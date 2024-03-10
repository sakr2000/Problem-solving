/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let min;
  for (let i = 0; i < nums1.length; i++) {
    min = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      if (min == nums2[j]) {
        return min;
      } else if (min < nums2[j]) {
        break;
      }
    }
  }
  return -1;
};
