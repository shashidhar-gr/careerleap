/**
 * 912. Sort an Array.
    https://leetcode.com/problems/sort-an-array/
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/** Sorting using bubble sort.
*/
var sortArray = function(nums) {
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}

console.log(sortArray([5, 2, 3, 1]));