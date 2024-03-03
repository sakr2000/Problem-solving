/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let arrayLength = functions.length;

  return function (x) {
    let temp = x;
    if (arrayLength == 0) {
      return x;
    } else {
      for (let i = arrayLength - 1; i >= 0; i--) {
        temp = functions[i](temp);
      }
      return temp;
    }
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// another solution 1
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};

// another solution 2
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((y, f) => f(y), x);
  };
};
