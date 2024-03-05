/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let character = s[left];
    if (s[right] != character) break;
    // get maximum prefix
    while (left < right && s[left] == character) {
      left += 1;
    }
    // get maximum suffix
    while (right >= left && s[right] == character) {
      right -= 1;
    }
  }
  return right - left + 1;
};
