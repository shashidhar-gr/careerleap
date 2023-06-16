var previousSmallerElement = function(nums) {
    let stack = [];
    let previousSmaller = new Array(nums.length).fill(-1);

    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack.at(-1)] > nums[i]) {
            stack.pop();
        }
        if(stack.length && stack.at(-1) < nums[i]) {
            previousSmaller[i] = stack.at(-1);
        }
        stack.push(i);
    }

    return previousSmaller;
}

const nums = [13, 8, 1, 5, 2, 5, 9, 7, 6, 12];
const res = previousSmallerElement(nums);
console.log(res);