var MyStack = function() {
    this.top = 0;
    this.inQueue = new MyQueue(100);
    this.outQueue = new MyQueue(100);
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    return this.inQueue.enqueue(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.outQueue.isEmpty() == true) {
        while(this.inQueue.size() > 1) {
            this.outQueue.enqueue(this.inQueue.dequeue());
        }
    }
    
    let value = this.inQueue.dequeue();
    let tempQueue = {};
    for(property in this.inQueue) {
        tempQueue[property] = this.inQueue[property];
    }

    for(property in this.outQueue) {
        this.inQueue[property] = this.outQueue[property];
    }

    for(property in tempQueue) {
        this.outQueue[property] = this.tempQueue[property];
    }

    return value;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.outQueue.isEmpty() == true) {
        while(!this.inQueue.isEmpty()) {
            this.outQueue.enqueue(this.inQueue.dequeue());
        }
    }
    
    return this.outQueue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.inQueue.isEmpty() == true && this.outQueue.isEmpty() == true) {
        return true;
    }

    return false;
};

class MyQueue {
    data = {};
    head = 0;
    tail = 0;
    capacity = 0;

    constructor(size) {
        this.capacity = size;
    }

    isEmpty() {
        if(this.head == this.tail)
            return true;
        
        return false;
    }

    peek() {
        if(this.head != this.tail) {
            return this.data[this.head];
        }

        return null;
    }

    dequeue() {
        if(this.head == this.tail)
            throw Error("Queue is empty");
        
        let value = this.data[this.head];
        this.head++;
        this.head = this.head % this.capacity;
        return value;
    }

    enqueue(element) {
        if((this.head == 0 && this.tail == this.capacity - 1) || (this.head == this.tail + 1))
            throw Error("Queue is full.");
        
        this.data[this.tail] = element;
        this.tail++;
        this.tail = this.tail % this.capacity;
        return null;
    }

    size() {
        return Math.abs(this.tail - this.head);
    }
}

var obj = new MyStack();
console.log(obj.push(1));
console.log(obj.push(2));
//console.log(obj.top());
console.log(obj.pop());
console.log(obj.empty());