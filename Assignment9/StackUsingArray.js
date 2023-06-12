class Stack {
    data = [];
    index = -1;
    capacity = 0;

    constructor(size) {
        this.capacity = size;
    }

    push(element) {
        if(this.index >= this.capacity - 1)
            throw Error("Stack is full");
        
        this.index++;
        this.data.push(element);
    }

    pop() {
        if(this.index == -1)
            throw Error("Stack is empty");

        return this.data[this.index--];
    }

    getLength() {
        return this.index + 1;
    }
}

let stack = new Stack(2);
stack.push(10);
console.log(stack.getLength());
stack.push(20);
console.log(stack.getLength());
stack.push(30);
console.log(stack.pop());
console.log(stack.getLength());
console.log(stack.pop());
console.log(stack.getLength());
try {
    stack.pop();
}
catch(err) {
    console.log(err);
}
