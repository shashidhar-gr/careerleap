/**
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let source = s.split("");
    let target = t.split("");

    let targetFrequency = getFrequency(target);
    let sourceFrequency = new HashMap();
    let left = 0; res = [], minLength = Number.MAX_VALUE;

    for(let right = 0; right < source.length; right++) {
        
        if(target.includes(source[right])) {
            sourceFrequency.add(source[right]);
        }
        
        while((right - left + 1) >= target.length && right < source.length) {
            if(isWindowMatching(sourceFrequency, targetFrequency)) {
                if((right - left + 1) < minLength) {
                    res = [];
                    minLength = Math.min(minLength, right - left + 1);
                    res.push(left, right);
                }
                sourceFrequency.remove(source[left]);
                left++;
            }
            else {
                right++;
                if(target.includes(source[right])) {
                    sourceFrequency.add(source[right]);
                }
            }
        }
    }

    let substr = "";
    if(res.length > 1) {
        substr = s.substring(res[0], res[1] + 1);
    }
    return substr;
};

var isWindowMatching = function(sourceFrequency, targetFrequency) {
    let matching = true;
    targetFrequency.forEach((value, key, map) => {
        if(sourceFrequency.get(key) < value || sourceFrequency.get(key) == undefined) {
            matching = false;
        }
    });

    return matching;
}

class HashMap {
    map = new Map()
    add(c) {
        if(this.map.has(c)) {
            this.map.set(c, this.map.get(c) + 1);
        }
        else {
            this.map.set(c, 1);
        }
    }
    remove(c) {
        if(this.map.has(c)) {
            this.map.set(c, this.map.get(c) - 1);
        }
    }
    get(c) {
        return this.map.get(c);
    }
}

var getFrequency = function(str) {
    let hashMap = new Map();

    str.forEach((element) => {
        if(hashMap.has(element) == true) {
            hashMap.set(element, hashMap.get(element) + 1);
        }
        else {
            hashMap.set(element, 1);
        }
    });

    return hashMap;
}

//const s = "cabwefgewcwaefgcf";
//const t = "cae";
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s, t));