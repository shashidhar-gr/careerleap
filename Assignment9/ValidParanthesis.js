/** 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
class Stack {
    data = [];
    index =  -1;
    capacity = 0;

    constructor(size) {
        this.capacity = size;
    }

    isEmpty() {
        return (this.index == -1);
    }

    push(element) {
        if(this.index >= this.capacity - 1)
            throw Error("Stack is full");
        
        this.index++;
        this.data[this.index] = element;
    }

    pop() {
        if(this.index == -1)
            return null;

        return this.data[this.index--];
    }

    top() {
        if(this.index > -1) {
            return this.data[this.index];
        }
        return null;
    }

    size() {
        return this.index + 1;
    }
}
var isValid = function(s) {

    if(s.length <= 1)
        return false;

    let stack = new Stack(s.length);

    for(bracket of s) {
        if(bracket == '(' || bracket == '{' || bracket == '[') {
            stack.push(bracket);
        }
        else {
            let openingBracket = stack.pop();
            if(openingBracket == null) {
                return false;
            }
            else if(openingBracket == '(') {
                if(bracket != ')')
                    return false;
            }
            else if(openingBracket == '{') {
                if(bracket != '}')
                    return false;
            }
            else if(openingBracket == '[') {
                if(bracket != ']')
                    return false;
            }
        }
    }

    return stack.size() == 0? true: false;
};

const s = "){";
console.log(isValid(s));
