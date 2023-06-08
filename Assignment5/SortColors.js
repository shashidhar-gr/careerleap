/**
 * 75. Sort Colors
 * https://leetcode.com/problems/sort-colors/description/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Using one pass
var sortColors = function(nums) {
    let reader = 0, zerosWriter = 0, twosWriter = nums.length-1;

    while(reader <= twosWriter) {
        if(nums[reader] == 0) {
            swap(nums, reader, zerosWriter);
            zerosWriter++;
        }

        if(nums[reader] == 2) {
            swap(nums, reader, twosWriter);
            twosWriter--; 
            reader--;
        }

        reader++;
    }
    return nums;
}

var swap = function(nums, i , j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

//Brute force method by 2 pass.
/*var sortColors = function(nums) {
    let reader = nums.length-1, writer = nums.length-1;
    
    // Moving Zero's to front of the array.
    while(reader >= 0) {
        if(nums[reader] != 0) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp; 
            writer--;
        }
        reader--;
    }

    // Skipping zero's, since they are in the right position.
    reader = 0;
    while(nums[reader] == 0) {
        reader++;
    }

    // Moving two's to end of the array.
    writer = reader;
    while(reader < nums.length) {
        if(nums[reader] != 2) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp; 
            writer++;
        }
        reader++;
    }

    return nums;
} */

const arr = [2,0,1];
console.log(sortColors(arr));