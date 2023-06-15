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

var previousSmallerElement = function(nums) {
    let stack = new Stack();
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        while(stack.isEmpty() == false && stack.top() >= nums[i]) {
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

const arr = [1, 3, 4, 2];
let res = previousSmallerElement(arr);
console.log(res);
