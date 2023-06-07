/**
 * 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/description/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//TC: O(N)
var moveZeroes = function(nums) {
    let reader = 0, writer = 0;

    for(reader = writer; reader < nums.length; reader++) {
        if(nums[reader] != 0) {
            let temp = nums[writer];
            nums[writer] = nums[reader];
            nums[reader] = temp;
            writer++;
        }
    }
    
    return nums;
}

// Bruteforce solution. TC: O(N^2)
/*var moveZeroes = function(nums) {
    let i = 0; let pivot = nums.length-1;
    while(i < nums.length-1) {
        if(nums[i] == 0 && i <= pivot) {
            let j = i + 1;
            while(j < nums.length) {
                nums[j-1] = nums[j];
                j++;
            }
            nums[j-1] = 0;
            pivot--;
        }
        else {
            i++;
        }
    }
    return nums;
}; */

const arr = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr));