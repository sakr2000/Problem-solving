/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// map approach :   Time O(N) | Space O(N)
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let map = new Map();
  let pointer = dummy.next;
  while (pointer.next !== null) {
    if (map.has(pointer.next)) {
      return true;
    }
    map.set(pointer);
    pointer = pointer.next;
  }
  return false;
};

//  Fast & Slow approach :   Time O(N) | Space O(1)
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
};
