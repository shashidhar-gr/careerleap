/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let queue = new Queue();
    let res = [];

    queue.enqueue(root);
    while(queue.size() != 0) {
        let size = queue.size();
        
        for(let i = 0; i < size; i++) {
            let cur = queue.dequeue();
            if(cur != null) {
                res.push(cur.val);
                queue.enqueue(cur.left);
                queue.enqueue(cur.right);
            }
            else {
                res.push(null);
            }
        }
    }

    return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length == 0)
        return null;
    let tree = [];
    data = data.split(",");
    let root = new TreeNode(data[0]);
    tree.push(root);
    let i = 1;
    while(i < data.length) {
        let parentIndex = Math.floor(i / 2);
        let cur = new TreeNode(data[i]);
        tree[parentIndex].left
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}