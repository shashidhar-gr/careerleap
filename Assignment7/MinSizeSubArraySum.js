/**
 * 209. Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, windowSum = 0, res = Number.MAX_VALUE;
    
    for(let right = 0; right < nums.length; right++) {
        windowSum += nums[right];

        while(windowSum >= target) {
            res = Math.min(res, (right - left + 1));
            windowSum -= nums[left];
            left++;
        }
    }

    return res == Number.MAX_VALUE ? 0: res;
};

const nums = [1,4,4];
const taregt = 4;

console.log(minSubArrayLen(taregt, nums));