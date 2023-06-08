/**
 * 287. Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
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