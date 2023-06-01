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
var sort = function(nums) {
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
/** Sorting using insertion sort.
*/
var sortArray = function(nums) {

    for(let j = 1; j < nums.length; j++) {
        let key = nums[j];
        let i = j - 1;
        while(i >= 0 && nums[i] > key) {
            nums[i + 1] = nums[i];
            i--;
        }   
        nums[i+1] = key;
    }

    return nums;
};

console.log(sort([5, 2, 3, 1]));