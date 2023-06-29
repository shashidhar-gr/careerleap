/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 112. Path Sum
 * https://leetcode.com/problems/path-sum/description/
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    var dfs = function(root, curSum) {
        if(root == null)
            return false;
        
        curSum += root.val;
        if(root.left == null && root.right == null)
            return curSum == targetSum;

        return (dfs(root.left, curSum) || dfs(root.right, curSum));
    }

    return dfs(root, 0);
};

