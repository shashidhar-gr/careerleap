/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// Solution using BFS and without Queue.
var connect = function(root) {
    if(root == null)
        return null;
    
    return bfs(root);
};

var bfs = function(root) {
    let cur = root;
    let nxt = cur.left;

    while(cur != null && nxt != null) {
        cur.left.next = cur.right;
        if(cur.next != null) {
            cur.right.next = cur.next.left;
            cur = cur.next;
        }
        else{
            cur = nxt;
            nxt = cur.left
        }
    }
    return root;
}

/*
// Solution using BFS and Queue.
var connect = function(root) {
    if(root == null)
        return null;
    
    return bfs(root);
};

var bfs = function(root) {
    let queue = new Queue();
    queue.enqueue(root);

    while(queue.size() != 0) {
        let size = queue.size();
        for(let i = 0; i < size; i++) {
            let cur = queue.dequeue();
            if(cur != null) {
                if(cur.left != null)
                    cur.left.next = cur.right;
                if(cur.next != null && cur.right != null) {
                    cur.right.next = cur.next.left;
                }
                if(cur.left != null)
                    queue.enqueue(cur.left);
                if(cur.right != null)
                    queue.enqueue(cur.right);
            }
        } 
    }

    return root;
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