/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return getDepth(root);
};

var getDepth = function(root) {
    if(root == null)
        return 0;

    return 1 + Math.max(getDepth(root.left), getDepth(root.right));
}