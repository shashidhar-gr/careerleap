/**2390. Removing Stars From a String
 * https://leetcode.com/problems/removing-stars-from-a-string/
 * @param {string} s
 * @return {string}
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

var removeStars = function(s) {
    let stack = new Stack();
    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if(c != '*') {
            stack.push(c);
        }
        else {
            stack.pop();
        }
    }

    let res = stack.data.toString("").replaceAll(",", "");
    res = res.substring(0, stack.index + 1);
    return res;
};

const s = "leet**cod*e";
let res = removeStars(s);
console.log(res);