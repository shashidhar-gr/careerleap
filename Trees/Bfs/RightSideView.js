/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    res = bfs(root);
    return res;
};

var bfs = function(root) {
    let queue = new Queue();
    let res = [];
    queue.enqueue(root);

    while(queue.size() != 0) {
        let size = queue.size();
        let rightMostNode = null;

        for(let i = 0; i < size; i++) {
            let cur = queue.dequeue();
            if(cur != null) {
                rightMostNode = cur.val;
                queue.enqueue(cur.left);
                queue.enqueue(cur.right);
            }
        }
        if(rightMostNode != null)
            res.push(rightMostNode);
    }

    return res;
}

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