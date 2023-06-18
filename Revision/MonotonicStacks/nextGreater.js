var nextGreaterElement = function(nums) {
    let nextGreater = new Array(nums.length).fill(-1);
    let stack = [];
    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack.at(-1)] < nums[i]) {
            nextGreater[stack.pop()] = i;
        }
        stack.push(i);
    }

    return nextGreater;
}

var previousGreaterElement = function(nums) {
    let previousGreater = new Array(nums.length).fill(-1);
    let stack= [];
    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack.at(-1)] <= nums[i]) {
            stack.pop();
        }
        if(stack.length)
        previousGreater[i] = stack.at(-1);

        stack.push(i);
    }

    return previousGreater;
}

// But with one answer wrong. 
var prevAndNextGreater = function(nums) {
    let nextGreater = new Array(nums.length).fill(-1);
    let previousGreater = new Array(nums.length).fill(-1);
    let stack =[];

    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack.at(-1)] <= nums[i]) {
            nextGreater[stack.pop()] = i;
        }   
        if(stack.length)
            previousGreater[i] = stack.at(-1);
        
        stack.push(i); 
    }
    
    return { previousGreater, nextGreater };
}

var nextandPrevSmaller = function(nums) {
    let stack = [];
    let nextSmall = new Array(nums.length).fill(-1);
    let previousSmall = new Array(nums.length).fill(-1);

    for(let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack.at(-1)] > nums[i]) {
            nextSmall[stack.pop()] = i;
        }
        if(stack.length) {
            previousSmall[i] = stack.at(-1);
        }

        stack.push(i);
    }

    return { previousSmall, nextSmall };
}

const arr = [13, 8, 1, 5, 2, 5, 9, 7, 6, 12];
console.log(nextandPrevSmaller(arr));