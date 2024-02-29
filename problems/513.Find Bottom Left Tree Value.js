/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) return null;

  let queue = [root];
  let answer = null;
  while (queue.length > 0) {
    const levelSize = queue.length;
    answer = queue[0].val;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return answer;
};
