var nextSmallerElement = function(nums) {
    let stack = [];
    let nextSmaller = new Array(nums.length).fill(-1);

    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack.at(-1)] > nums[i]) {
            let stackTop = stack.at(-1);
            nextSmaller[stackTop] = i;
            stack.pop();
        }

        stack.push(i);
    }

    return nextSmaller;
}

const nums = [13, 8, 1, 5, 2, 5, 9, 7, 6, 12];
const res = nextSmallerElement(nums);
console.log(res);