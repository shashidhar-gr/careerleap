/**
 * 9. Palindrome Number
    https://leetcode.com/problems/palindrome-number/
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0, rem = 0, num = x;
    
    if(x < 0)
        return false;

    while(x !== 0) {
        rem = x % 10;
        reverse = (reverse * 10) + rem;
        x = Math.floor(x / 10);
    }

    return num === reverse;
};

console.log(isPalindrome(-11));