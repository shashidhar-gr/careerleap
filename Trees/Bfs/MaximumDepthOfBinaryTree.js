/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null)
        return 0;

    return bfs(root);
};

var bfs = function(root) {
    let depth = -1;
    let queue = new Queue();
    queue.enqueue(root);

    while(queue.size() != 0) {
        let size = queue.size();
        depth++;
        for(let i = 0; i < size; i++) {
            let cur = queue.dequeue();
            if(cur != null) {
                queue.enqueue(cur.left);
                queue.enqueue(cur.right);
            }
        }
    }

    return depth;
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
