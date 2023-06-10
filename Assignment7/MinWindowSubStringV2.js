/**
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t == "") 
        return ""

    let countT = new Map();
    let window = new Map();

    for(let c of t) {
        countT.has(c) ? countT.set(c, countT.get(c) + 1): countT.set(c, 1);
    }

    let have = 0, need = countT.size;

    let left = 0, res = [], resLen = Number.MAX_VALUE;
    for(let right = 0; right < s.length; right++) {
        let c = s[right];
        
        window.has(c) ? window.set(c, window.get(c) + 1): window.set(c, 1);
        
        if(t.includes(c) && window.get(c) == countT.get(c))
            have++;
        
        while(have == need) {
            // Update our new result.
            if((right - left + 1) < resLen) {
                resLen = (right - left + 1);
                res = [];
                res.push(left, right);
            }

            // Remove left element.
            window.set(s[left], window.get(s[left]) - 1);
            if(t.includes(s[left]) && window.get(s[left]) < countT.get(s[left])) {
                have--;
            }
            left++;
        }
    }

    return resLen == Number.MAX_VALUE ? "": s.substring(res[0], res[1] + 1);
}

const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s, t));