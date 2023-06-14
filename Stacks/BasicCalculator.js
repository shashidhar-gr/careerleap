/** 224. Basic Calculator
 * https://leetcode.com/problems/basic-calculator/
 * @param {string} s
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

var calculate = function(s) {
    let operatorStack = new Stack();
    let valueStack = new Stack();

    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if(c == " ")
            continue;

        switch(c) {
            case '(': operatorStack.push(c);
                        break;

            case '+': operatorStack.push(c);
                        break;
            
            case '-': operatorStack.push(c);
                        break;

            case ')': 
                    // while(operatorStack.isEmpty() == false && operatorStack.top() != '(') {
                    //     let c = operatorStack.pop();
                    // }
                    break;

            default: valueStack.push(Number(c));
        }

        while(operatorStack.isEmpty() == false) {
            let operator = operatorStack.pop();
            
        }
    }
};

const s = "1 + 1";
let ans = calculate(s);
console.log(ans);