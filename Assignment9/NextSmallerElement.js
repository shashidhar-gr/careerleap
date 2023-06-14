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

var nextSmallerElement = function(nums) {
    let res = new Array();
    let stack = new Stack();

    stack.push({"value": nums[nums.length - 1], "index": nums.length - 1});
    res[nums.length-1] = nums.length;

    for(let i = nums.length-2; i >= 0; i--) {
       
        while(stack.isEmpty() == false && stack.top()["value"] >= nums[i]) {
            stack.pop();
        }

        if(stack.isEmpty() == true) {
            res[i] = nums.length;
        }
        else {
            res[i] = stack.top()["index"];
        }

        stack.push({"value": nums[i], "index": i});
    }

    return res;
}

module.exports = nextSmallerElement;