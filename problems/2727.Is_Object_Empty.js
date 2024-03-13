/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (a) {
  return Object.keys(a).length === 0;
};

var isEmpty = function (a) {
  if (typeof a === "object") {
    return Object.keys(a).length === 0;
  }

  if (Array.isArray(a)) {
    return a.length === 0;
  }
};
