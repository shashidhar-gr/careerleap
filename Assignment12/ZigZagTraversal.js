/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root == null) 
        return [];
    
    let queue = new Queue();
    let res = [];

    queue.enqueue(root);
    
    while(queue.size() != 0) {
        let size = queue.size();
        let level = [];
        
        for(let i = 0; i < size; i++) {
            let node = queue.dequeue();
            if(node != null) {
                level.push(node.val);
                queue.enqueue(node.left);
                queue.enqueue(node.right);
            }
        }
        
        if(level.length) 
            res.push(level); 
    }

    let j = 1;
    for(let i = 0; i < res.length; i++) {
        if(j % 2 == 0) {
            let level = res[i];
            res[i] = level.reverse();
        }
        j++;
    }
    return res;
};

var Queue = function() {
    this.data = [];
    this.head = -1;
    this.tail = -1;
}

Queue.prototype.size = function() {
    if(this.head == -1 || this.head == this.tail) {
        return 0;
    }

    return this.tail - this.head;
}

Queue.prototype.enqueue = function(value) {
    if(this.tail == -1) {
        this.head = 0;
        this.tail = 1;
        this.data[0] = value;
        return;
    }

    this.data[this.tail] = value;
    this.tail++;
    return;
}

Queue.prototype.dequeue = function() {
    if(this.head == -1 || this.head == this.tail) {
        return null;
    }

    let value = this.data[this.head];
    this.head++;
    return value;
}