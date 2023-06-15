class Stack {
    data = [];
    index = -1;

    push(val) {
        this.index++;
        this.data[this.index] = val;
        return null;
    }

    pop() {
        if(this.index == -1)
            return null;
        
        let val = this.data[this.index];
        this.index--;
        return val;
    }

    isEmpty() {
        if(this.index == -1)
            return true;
        
        return false;
    }

    top() {
        if(this.index == -1)
            return null;
        
        return this.data[this.index];
    }
}

var nextGreaterElement = function(arr) {
    let stack = new Stack();
    let res = [];
    for(let i = arr.length-1; i >= 0; i--) {
        while(stack.isEmpty() == false && stack.top() <= arr[i]) {
            stack.pop();
        }
        if(stack.isEmpty() == true) {
            res[i] = -1;
        }
        else {
            res[i] = stack.top();
        }
        stack.push(arr[i]);
    }

    return res;
}

const arr = [3, 8, 4, 1, 1];
let res = nextGreaterElement(arr);
console.log(res);
