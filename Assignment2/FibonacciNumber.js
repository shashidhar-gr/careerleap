/**
 * 509. Fibonacci Number
    https://leetcode.com/problems/fibonacci-number/
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib_recursive= function(n) {
    if(n === 0) {
        return 0;
    }

    if(n === 1) {
        return 1;
    }

    if(n > 1) {
        return fib_recursive(n - 1) + fib_recursive(n - 2);
    }
};

var fib_iterative = function(n) {
    if(n === 0) {
        return 0;
    }

    if(n === 1) {
        return 1;
    }

    let x = 0, y = 1, z = 0;

    for(let i = 2; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
    }

    return z;
}

console.log(fib_recursive(9));