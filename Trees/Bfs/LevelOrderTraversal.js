/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderTraversal = function(root) {
    if(root == null)
        return [];
    
    let res = bfs(root);
    return res;
}

var bfs = function(root) {
    let res = [];
    let queue = new Queue();
    queue.enqueue(root);

    while(queue.size() != 0) {
        let size = queue.size();
        let level = [];
        for(let i = 0; i < size; i++) {
            let cur = queue.dequeue();
            if(cur != null) {
                level.push(cur.val);
                queue.enqueue(cur.left);
                queue.enqueue(cur.right);
            }
        } 
        if(level.length != 0)
            res.push(level);
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

