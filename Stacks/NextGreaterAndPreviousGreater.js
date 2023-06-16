var nextGreaterAndPreviousGreater = function(nums) {
    let stack = [];
    let previousGreater = new Array(nums.length).fill(-1);
    let nextGreater = new Array(nums.length).fill(-1);
    
    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack.at(-1)] <= nums[i]) {
            let stackTop = stack.pop();
            nextGreater[stackTop] = i;
        }
        if(stack.length) {
            previousGreater[i] = stack.at(-1);
        }

        stack.push(i);
    }

    return {
        'nextGreater': nextGreater,
        'previousGreater': previousGreater
    }
}

const nums = [13, 8, 1, 5, 2, 5, 9, 7, 6, 12];
const res = nextGreaterAndPreviousGreater(nums);
console.log(res['nextGreater']);
console.log(res['previousGreater']);