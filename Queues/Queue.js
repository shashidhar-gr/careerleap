/** 622. Design Circular Queue
 * https://leetcode.com/problems/design-circular-queue/
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.data = new Array(k);
    this.size = k;
    this.front = -1;
    this.back = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) {
        return false;
    }
    if(this.isEmpty()) {
        this.front = 0;
    }
    this.back = (this.back + 1) % this.size;
    this.data[this.back] = value;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
        return false;
    }
    
    if(this.front == this.back) {
        this.front = -1;
        this.back = -1;
        return true;
    }
    
    this.front = (this.front + 1) % this.size;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) {
        return -1;
    }
    
    return this.data[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) {
        return -1;
    }
    
    return this.data[this.back];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front == -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.back + 1) % this.size == this.front; 
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */