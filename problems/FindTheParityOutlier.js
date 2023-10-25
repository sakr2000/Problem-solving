/**
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

 */

// my solution
function findOutlier(integers) {
  let outlier;
  if (integers[0] % 2 == 0 && integers[1] % 2 == 0) {
    // all even
    integers.forEach((element) => {
      if (Math.abs(element) % 2 == 1) outlier = element;
    });
  } else if (integers[0] % 2 == 1 && integers[1] % 2 == 1) {
    // all odd
    integers.forEach((element) => {
      if (Math.abs(element) % 2 == 0) outlier = element;
    });
  } else {
    if (Math.abs(integers[0]) % 2 == Math.abs(integers[2]) % 2) {
      outlier = integers[1];
    } else {
      outlier = integers[0];
    }
  }
  return outlier;
}
// other solution
function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
