/**
 * Pow(x, n)
 * https://leetcode.com/problems/powx-n/description/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 0;
    var helper = function(x, n) {
        if(x === 0) 
            return 0;

        if(n === 0)
            return 1;
        
        let res = helper(x, Math.floor(n / 2));
        res = res * res;
        return n % 2 == 0 ? res: x * res;
    }

    res = helper(x, Math.abs(n));
    return n < 0 ? 1 / res: res;
};
