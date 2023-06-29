/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var valid = function(root, left, right) {
        if(root == null)
            return true;
        
        if(!(root.val > left && root.val < right))
            return false;
        
        return (valid(root.left, left, root.val) && valid(root.right, root.val, right))
    }

    return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};