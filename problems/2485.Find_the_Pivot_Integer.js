/**
 * @param {number} n
 * @return {number}
 */

// iterative solution - O(n)
var pivotInteger = function (n) {
  let leftSum = 0;
  for (let i = 1; i <= n; i++) {
    leftSum += i;
  }

  let rightSum = 0;
  for (let i = n; i > 0; i--) {
    rightSum += i;
    if (leftSum === rightSum) {
      return i;
    }
    if (leftSum < rightSum) {
      return -1;
    }
    leftSum -= i;
  }
  return -1;
};

// math solution - O(1)
var pivotInteger = function (n) {
  let total = (n * (n + 1)) / 2;
  let answer = Math.sqrt(total);
  return ~~answer * ~~answer == total ? answer : -1;
};
