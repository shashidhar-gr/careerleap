/**
 * 7. Reverse Integer
    https://leetcode.com/problems/reverse-integer/
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0, y = x, reminder = 0;

    while(x !== 0) {
        reminder = x % 10;
        reverse = (reverse * 10) + reminder;
        x = Math.floor(x / 10);
    }

    return reverse;
};

console.log(reverse(-100));
