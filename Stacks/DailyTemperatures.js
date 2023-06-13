/** 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */

class Stack {
    data = [];
    index = -1;

    push(value) {
        this.index++;
        this.data[this.index] = value;
    }

    pop() {
        if(this.index == -1) {
            return null;
        }

        let value = this.data[this.index];
        this.index--;
        return value;
    }

    isEmpty() {
        if(this.index == -1)
            return true;

        return false;
    }

    top() {
        if(this.index == -1)
            return false;
        
        return this.data[this.index];
    }
}

var dailyTemperatures = function(temperatures) {
    let stack = new Stack();
    let res = [];

    stack.push({value: temperatures[temperatures.length - 1], index: temperatures.length - 1});
    res[temperatures.length - 1] = 0;

    for(let i = temperatures.length - 2; i >= 0; i--) {
        
        while(stack.isEmpty() == false && stack.top()['value'] <= temperatures[i]) {
            stack.pop();
        }

        if(stack.isEmpty()) {
            res[i] = 0;
        }
        else {
            let data = stack.top();
            res[i] = data['index'] - i;
        }

        stack.push({value: temperatures[i], index: i});
    }

    return res;
};

const temperatures = [89,62,70,58,47,47,46,76,100,70];
console.log(dailyTemperatures(temperatures));