/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  let n1 = await promise1;
  let n2 = await promise2;
  return n1 + n2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) => {
    const sum = values.reduce((total, values) => total + values, 0);
    return sum;
  });
};
