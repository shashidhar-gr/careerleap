class TwoStack {
    capacity = 0;
    data = [];
    leftIndex = -1;
    rightIndex = -1;

    constructor(size) {
        this.capacity = size;
        this.rightIndex = this.capacity;
    }

    pushFromLeft(element) {
        this.leftIndex++;
        if(this.leftIndex >= this.rightIndex || this.leftIndex >= this.capacity) 
            throw Error("Stack is full.");
        
        this.data[this.leftIndex] = element;
    }

    pushFromRight(element) {
        this.rightIndex--;
        if(this.rightIndex < 0 || this.rightIndex - this.leftIndex == 0)
            throw Error("Stack is full.");

        this.data[this.rightIndex] = element;
    }

    popFromLeft() {
        if(this.leftIndex < 0)
            throw Error("Stack is empty.");

        return this.data[this.leftIndex--];
    }

    popFromRight() {
        if(this.rightIndex >= this.capacity)
            throw Error("Stack is empty.");

        return this.data[this.rightIndex--];
    }
}

let twoStack = new TwoStack(5);
twoStack.pushFromLeft(10);
twoStack.pushFromLeft(20);
twoStack.pushFromLeft(30);
twoStack.pushFromLeft(40);
twoStack.pushFromRight(50);

console.log(twoStack.popFromLeft());
twoStack.pushFromRight(60)
console.log(twoStack.popFromLeft());
twoStack.pushFromRight(70)
console.log(twoStack.popFromLeft());
twoStack.pushFromRight(80)
console.log(twoStack.popFromLeft());
twoStack.pushFromRight(90)
twoStack.pushFromLeft(100)