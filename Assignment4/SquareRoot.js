/**
 * 69. Sqrt(x)
 * https://leetcode.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0, end = x, ans = -1;

    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let square = mid * mid;
        if (x === square) {
            return mid;
        }
        else if(square > x) {
            end = mid - 1;
        }
        else {
            ans = mid;
            start = mid + 1; 
        }
    }

    return ans;
};

const x = 8;
console.log(mySqrt(x));