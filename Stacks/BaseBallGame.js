/**682. Baseball Game
 * https://leetcode.com/problems/baseball-game/
 * @param {string[]} operations
 * @return {number}
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

var calPoints = function(operations) {
    let stack = new Stack();

    for(let i = 0; i < operations.length; i++) {
        let c = operations[i];
        switch(c) {
            case '+':
                    let num1 = stack.pop();
                    let num2 = stack.pop();
                    stack.push(num2);
                    stack.push(num1);
                    stack.push(num1 + num2);
                    break;

            case 'D':
                    let num3 = stack.top();
                    stack.push(num3 * 2); 
                    break;

            case 'C': 
                    stack.pop();
                    break;

            default: stack.push(Number(c));
        }
    }

    let sum = 0;
    while(stack.isEmpty() == false) {
        sum = sum + stack.pop();
    }

    return sum;
};

let ops = ["5","2","C","D","+"];
let sum = calPoints(ops);
console.log(sum);