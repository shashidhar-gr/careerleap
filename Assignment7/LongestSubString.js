/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0)
        return "";
    
    let window = new Map(), maxLen = Number.MIN_SAFE_INTEGER, res = [];
    let left = 0, notValidWindow = false;

    for(let right = 0; right < s.length; right++) {
        let c = s[right];
        window.set(c, window.get(c) == undefined ? 1: window.get(c) + 1);
        let cCount = window.get(c);
        
        if(cCount >= 2) {
            notValidWindow = true;
        }

        while(notValidWindow) {
            while(s[left] != c) {
                window.set(s[left], window.get(s[left] - 1));
                left++;
            }
            window.set(s[left], window.get(s[left]) - 1);
            left++;
            notValidWindow = false;
        }

        if((right - left + 1) > maxLen) {
            maxLen = (right - left + 1);
            res = [];
            res = [left, right];
        }
    }

    return maxLen == Number.MIN_SAFE_INTEGER ? 0: maxLen;
};

console.log(lengthOfLongestSubstring(""));