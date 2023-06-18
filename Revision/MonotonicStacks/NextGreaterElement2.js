const nextGreater = function(nums) {
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

const nums = [1, 2, 1];
const res = nextGreater(nums);
console.log(res);