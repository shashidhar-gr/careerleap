/**
 * 735. Asteroid Collision
 * https://leetcode.com/problems/asteroid-collision/
 * @param {number[]} asteroids
 * @return {number[]}
 */
class Stack {
    data = [];
    index = -1;

    push(stackTop) {
        this.index++;
        this.data[this.index] = stackTop;
        return null;
    }

    pop() {
        if(this.index == -1)
            return null;
        
        let stackTop = this.data[this.index];
        this.index--;
        return stackTop;
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

var asteroidCollision = function(asteroids) {
    let stack = new Stack();
    stack.push(asteroids[0]);
    
    for(let i = 1; i < asteroids.length; i++) {
        let stackTop = stack.top();
        let newElement = asteroids[i];

        if(newElement < 0 && stackTop > 0) {
            let temp = newElement * -1;
            while(stack.isEmpty() == false && stack.top() < temp) {
                stack.pop();
            }

            if(stack.isEmpty() == false) {
                stack.pop();
            }
        }
    }

    let finalres = [];
    for(let i = 0; i <= stack.index; i++) {
        finalres.push(stack.data[i]);
    }

    return finalres;
};


let asteroids = [10,2,-5];
let res = asteroidCollision(asteroids);
console.log(res);