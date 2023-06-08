// Brute force method using HashMap.
var findDuplicate = function(nums) {   
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(hashMap.has(nums[i])) {
            return nums[i];
        }
        hashMap.set(nums[i], 1);
    }
} 

const arr = [3,1,3,4,2];
console.log(findDuplicate(arr));