/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Bruteforce solution.
var moveZeroes = function(nums) {
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
};

const arr = [0,1,0,3,12];
console.log(moveZeroes(arr));