class Stack {
    data = [];
    index =  -1;
    capacity = 0;

    constructor(size) {
        this.capacity = size;
    }

    isEmpty() {
        return (this.index == -1);
    }

    push(element) {
        if(this.index >= this.capacity - 1)
            throw Error("Stack is full");
        
        this.index++;
        this.data[this.index] = element;
    }

    pop() {
        if(this.index == -1)
            throw Error("Stack is empty");

        return this.data[this.index--];
    }

    peek() {
        if(this.index > -1) {
            return this.data[this.index];
        }
        return null;
    }

    getLength() {
        return this.index + 1;
    }
}

var MyQueue = function() {
    this.inStack = new Stack(100);
    this.outStack = new Stack(100);
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.outStack.isEmpty()) {
        while(!this.inStack.isEmpty()) {
            this.outStack.push(this.inStack.pop());
        }
    }

    if(!this.outStack.isEmpty()) {
        return this.outStack.pop();
    }
    
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.outStack.isEmpty()) {
        while(!this.inStack.isEmpty()) {
            this.outStack.push(this.inStack.pop());
        }
    }

    if(!this.outStack.isEmpty()) {
        return this.outStack.peek();
    }
    
    return null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.inStack.isEmpty() == true && this.outStack.isEmpty() == true) {
        return true;
    }

    return false;
};

var obj = new MyQueue()
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.push(3));
console.log(obj.push(4));
console.log(obj.pop());
console.log(obj.push(5));
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
