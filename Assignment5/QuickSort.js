/**
 * 912. Sort an Array
 * https://leetcode.com/problems/sort-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let sotredarr = sort(nums);
    return sotredarr;
}

var sort = function(nums) {
    return quickSort(nums, 0, nums.length-1);
}

var quickSort = function(nums, start, end) {
    if(start >= end) {
        return nums;
    }

    let partitionIndex = partition(nums, start, end);
    quickSort(nums, start, partitionIndex-1);
    quickSort(nums, partitionIndex+1, end);

    return nums;
}

var partition = function(nums, start, end) {
    let reader = start, writer = start; pivotelement = nums[end];
    while(reader <= end) {
        if(nums[reader] <= pivotelement) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp;
            writer++;
        }
        reader++;
    }
    return writer - 1;
}

//const arr = [2, 2, 2, 2, 2, 1, 10, 11, 3, 4, 2, 2, 2, 2, 2, 2];
const arr = [3, 2, 11, 0, 5];
console.log(sort(arr));