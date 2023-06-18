/**
 * 503. Next Greater Element II
 * https://leetcode.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [], res = new Array(nums.length).fill(-1);

    for(let j = 0; j < 2; j++) {
        for(let i = 0; i < nums.length; i++) {
            while(stack.length && nums[stack.at(-1)] < nums[i]) {
                res[stack.pop()] = i;
            }
            stack.push(i);
        }
    }
    
    return res.map(index => index == -1 ? -1: nums[index]);
}

// Bruteforce solution.
/*var nextGreaterElements = function(nums) {
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        let j = (i + 1) % nums.length;
        let count = 0;
        res[i] = -1;
        while(count < nums.length) {
            if(nums[j] > nums[i]) {
                res[i] = nums[j];
                break;
            }
            j++;
            count++;
            if(j == nums.length) 
                j = j % nums.length;
        }
    }
    return res;
};*/

const nums = [3, 8, 4, 1, 2];
let res = nextGreaterElements(nums);
console.log(res);