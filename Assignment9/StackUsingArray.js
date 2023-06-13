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

let stack = new Stack(100);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

stack.push(60);

