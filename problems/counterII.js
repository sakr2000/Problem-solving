/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  return {
    modified: init,
    increment: function () {
      return ++this.modified;
    },
    decrement: function () {
      return --this.modified;
    },
    reset: function () {
      return (this.modified = init);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
