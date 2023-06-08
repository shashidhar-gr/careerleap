/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */

//optimal solution.
var removeDuplicates = function(nums) {
    let reader = 0, writer = 0, count = 0;

    while(reader < nums.length) {
        if(nums[reader] != nums[writer]) {
            let temp = nums[reader];
            nums[reader] = nums[writer + 1];
            nums[writer + 1] = temp;
            writer++;
            count++;
        }
        reader++;
    }

    return count;
}

//Brute force solution. Using extra space.
var removeDuplicates = function(nums) {
    let hashSet = new Set(nums);
    let i = 0;
    for(const element of hashSet) {
        nums[i] = element;
        i++;
    }
    return hashSet.size;
};

const arr = [0,0,1,1,1,2,2,3,3,4];
const uniqeElements = removeDuplicates(arr);
console.log(arr)