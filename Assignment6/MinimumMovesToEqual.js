/**
 * 453. Minimum Moves to Equal Array Elements
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Number.MAX_VALUE;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i];
        }
    }

    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        count = count + Math.abs(min - nums[i]); 
    }

    return count;
};