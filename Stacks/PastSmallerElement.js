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

var pastSmallerElement = function(nums) {
    let res = new Array();
    let stack = new Stack();

    stack.push({"value": nums[nums.length - 1], "index": - 1});
    res[0] = -1;

    for(let i = 1; i < nums.length; i++) {
       
        while(stack.isEmpty() == false && stack.top()["value"] >= nums[i]) {
            stack.pop();
        }

        if(stack.isEmpty() == true) {
            res[i] = -1;
        }
        else {
            res[i] = stack.top()["index"];
        }

        stack.push({"value": nums[i], "index": i});
    }

    return res;
}

const arr = [2, 1, 5, 6, 2, 3];
console.log(pastSmallerElement(arr));