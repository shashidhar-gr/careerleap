/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/description/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var dfs = function(root) {
        if(root == null)
            return [true, -1];
        
        let left = dfs(root.left);
        let right = dfs(root.right);
        let balanced = left[0] && right[0] && (Math.abs(left[1] - right[1]) <= 1)
        return [balanced, 1 + Math.max(left[1], right[1])];
    }  

    let res = dfs(root); 
    return res[0];    
};