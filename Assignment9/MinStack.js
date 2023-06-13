/**
 * 155. Min Stack
 * https://leetcode.com/problems/min-stack/
 */

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
        return null;
    }

    pop() {
        if(this.index == -1)
            return null;

        return this.data[this.index--];
    }

    top() {
        if(this.index > -1) {
            return this.data[this.index];
        }
        return null;
    }

    size() {
        return this.index + 1;
    }
}

var MinStack = function() {
    this.minStack = new Stack();
    this.stack = new Stack();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    let valueFromMinStack = this.minStack.top() == null ? Number.MAX_VALUE: this.minStack.top();
    let minvalue = Math.min(val, valueFromMinStack);
    this.minStack.push(minvalue);
    return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    this.stack.pop();
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.top();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.top();
};


var obj = new MinStack()
console.log(null);
console.log(obj.push(2147483646));
console.log(obj.push(2147483646));
console.log(obj.push(2147483647));
console.log(obj.top());
console.log(obj.pop());
console.log(obj.getMin());
console.log(obj.pop());
console.log(obj.getMin());
console.log(obj.pop());
console.log(obj.push(2147483647));
console.log(obj.top());
console.log(obj.getMin());
console.log(obj.push(-2147483648));
console.log(obj.top());
console.log(obj.getMin());
console.log(obj.pop());
console.log(obj.getMin());