/**
 * 503. Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */

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

var nextGreaterElements = function(nums) {
    let stack = new Stack();
    let res = [];
    
    for(let i = nums.length-1; i >= 0; i--) {
        while(stack.isEmpty() == false & stack.top() <= nums[i]) {
            stack.pop();
        }

        if(stack.isEmpty() == true) {
            res[i] = -1;
        }
        else {
            res[i] = stack.top();
        }

        stack.push(nums[i]);
    }

    for(let i = nums.length-1; i >= 0; i--) {
        while(stack.isEmpty() == false & stack.top() <= nums[i]) {
            stack.pop();
        }

        if(stack.isEmpty() == true) {
            res[i] = -1;
        }
        else {
            res[i] = stack.top();
        }

        stack.push(nums[i]);
    }

    return res;
}

// Bruteforce solution.
/*var nextGreaterElements = function(nums) {
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        let j = (i + 1) % nums.length;
        let count = 0;
        res[i] = -1;
        while(count < nums.length) {
            if(nums[j] > nums[i]) {
                res[i] = nums[j];
                break;
            }
            j++;
            count++;
            if(j == nums.length) 
                j = j % nums.length;
        }
    }
    return res;
};*/

const nums = [3, 8, 4, 1, 2];
let res = nextGreaterElements(nums);
console.log(res);