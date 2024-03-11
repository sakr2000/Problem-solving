/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// trial solution 1
var customSortString = function (order, s) {
  let orderedStr = "";
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  console.log(map);
  for (let i = 0; i < order.length; i++) {
    let c = order[i];
    let num = map.get(c);
    for (let i = 0; i < num; i++) {
      orderedStr += c;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!order.includes(s[i])) {
      orderedStr += s[i];
    }
  }
  return orderedStr;
};

// solution 2 with help of chatgpt
var customSortString = function (order, s) {
  const charCounts = new Map();
  for (const char of s) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  const orderedChars = [];
  for (const char of order) {
    const count = charCounts.get(char) || 0;
    orderedChars.push(char.repeat(count));
    charCounts.delete(char);
  }

  for (const [char, count] of charCounts) {
    orderedChars.push(char.repeat(count));
  }

  return orderedChars.join("");
};
