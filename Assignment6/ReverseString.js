/**
 * 344. Reverse String
 * https://leetcode.com/problems/reverse-string/description/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let writer1 = 0, writer2 = s.length-1;

    while(writer1 < writer2) {
        let c = s[writer1];
        s[writer1] = s[writer2];
        s[writer2] = c;
        writer1++;
        writer2--;
    }

    return s;
};