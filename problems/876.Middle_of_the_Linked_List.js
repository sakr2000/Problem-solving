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
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

var middleNode = function (head) {
  let Length = 0;
  let pointer = head;
  let middle;
  while (pointer != null) {
    Length += 1;
    pointer = pointer.next;
  }
  if (Length % 2 == 0) {
    middle = Length / 2 + 1;
  } else {
    middle = (Length + 1) / 2;
  }
  pointer = head;
  for (let i = 1; i <= middle - 1; i++) {
    console.log(middle, pointer, i);
    pointer = pointer.next;
  }
  return pointer;
};
