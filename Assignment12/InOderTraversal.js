/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 94. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root == null) {
        return [];
    }

    let node = root;
    let stack = [];
    let res = [];
    while(node != null || stack.length != 0) {
        while(node != null) {
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        res.push(node.val);
        node = node.right;
    }

    return res;
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    traverse(root, res);
    return res;
};

var traverse = function(node, res) {
    if(node == null) {
        return;
    }

    traverse(node.left, res);
    res.push(node.val);
    traverse(node.right, res);

    return res;
}