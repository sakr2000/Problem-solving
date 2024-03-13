/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let first = dummy;
  while (first) {
    let total = 0;
    let second = first.next;
    while (second) {
      total += second.val;
      if (total == 0) {
        first.next = second.next;
      }
      second = second.next;
    }
    first = first.next;
  }
  return dummy.next;
};
