/**
 * 242. Valid Anagram
    https://leetcode.com/problems/valid-anagram/
 */
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    var isAnagram = function(s, t) {

        if(s.length != t.length) {
            return false;
        }

        const arr = Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i)- 97]++;
            arr[t.charCodeAt(i)- 97]--;
        }

        return arr.every((value) => value === 0);
    }

    /*
        Brute force method. TC: O(N^2)
    */
    var isAnagramV1 = function(s, t) {
        if(s.length != t.length) {
            return false;
        }

        let validanagram = true;
        for(let i = 0; i < s.length; i++) {
            let found = false;
            for(let j = 0; j < t.length; j++) {
                if(s.charAt(i) === t.charAt(j)) {
                    found = true;
                    t = replace(t, j);
                    break;
                }
            }
            if(found === false){
                validanagram = false;
                break;
            }
        }

        return validanagram;
    };

    var replace = function(str, index) {
        return str.substring(0, index) + '0' + str.substring(index+1, str.length);
    }

    var test = function() {
        const s = "rat";
        const t = "tar";

        console.log(isAnagram(s, t));
    }

    test();