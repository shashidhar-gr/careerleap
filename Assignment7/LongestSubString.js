/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0)
        return "";
    
    let charSet = new Set(), maxLen = Number.MIN_SAFE_INTEGER, res = [];
    
    let left = 0;
    for(let right = 0; right < s.length; right++) {
        let c = s[right];
        
        if(charSet.has(c)) {
            while(s[left] != c) {
                charSet.delete(s[left]);
                left++;
            }
            charSet.delete(s[left]);
            left++;
        }
        
        charSet.add(c);

        if((right - left + 1) > maxLen) {
            maxLen = (right - left + 1);
            res = [];
            res = [left, right];
        }
    }

    return maxLen == Number.MIN_SAFE_INTEGER ? 0: maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew"));