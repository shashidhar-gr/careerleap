/**
 * 287. Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let ledger = new Array(nums.length);
    if(Object.seal) {
        ledger.fill(undefined);
        Object.seal(ledger);
    }

    for(let i = 0; i < nums.length; i++) {
        if(ledger[nums[i]] == true) {
            return nums[i];
        }
        else {
            ledger[nums[i]] = true;
        }
    }
}

/**
    Using extra space.
*/
/*var findDuplicate = function(nums) {
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(hashMap.has(nums[i])) {
            return nums[i];
        }
        hashMap.set(nums[i], 1);
    }
}; */

const nums = [3,3,4,2,1];
console.log(findDuplicate(nums));