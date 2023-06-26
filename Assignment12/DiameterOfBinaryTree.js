/**
 * 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    var heightOfNode = function(node) {
        if(node == null)
            return -1;
        
        let leftHeight = heightOfNode(node.left);
        let rightHeight = heightOfNode(node.right);
        let diameter = 2 + leftHeight + rightHeight;

        if(diameter > maxDiameter) {
            maxDiameter = diameter;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    heightOfNode(root);

    return maxDiameter;
};