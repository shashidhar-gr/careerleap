/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 513. Find Bottom Left Tree Value
 * https://leetcode.com/problems/find-bottom-left-tree-value/description/
 * @param {TreeNode} root
 * @return {number}
 */
// Solution using depth first search.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(root == null)
        return null;
    
    if(root.left == null && root.right == null) {
        return root.val;
    }

    return dfs(root)[0];
};

var dfs = function(root) {
    if(root == null)
        return [null, 0];
    
    let left = dfs(root.left);
    if(left[0] == null)
        left[0] = root.val;
    left[1] = left[1] + 1;

    let right = dfs(root.right);
    if(right[0] == null)
        right[0] = root.val;
    right[1] = right[1] + 1;

    if(left[1] > right[1]) {
        return left;
    }
    else if(right[1] > left[1]) {
        return right;
    }
    else {
        return left;
    }
}

/*
// Solution using breadth first search.
var findBottomLeftValue = function(root) {
    if(root == null)
        return null;
    
    return bfs(root);
};

var bfs = function(root) {
    let queue = new Queue();
    let res = null;
    queue.enqueue(root);

    while(queue.size() != 0) {
        let size = queue.size();
        let leftMostNode = null;

        for(let i = 0; i < size; i++) {
            let cur = queue.dequeue();
            if(cur != null) {
                leftMostNode = cur.val;
                queue.enqueue(cur.right);
                queue.enqueue(cur.left);
            }
        }
        if(leftMostNode != null)
            res = leftMostNode;
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
} */