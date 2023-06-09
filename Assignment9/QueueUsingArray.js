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

let queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.enqueue(50);
queue.dequeue();
queue.enqueue(40);