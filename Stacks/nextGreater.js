var nextGreaterElements = function(arr) {
    let stack = [];
    let nextGreater = new Array(arr.length).fill(-1);

    for(let i = 0; i < arr.length; i++) {
        while(stack.length && arr[stack.at(-1)] < arr[i]) {
            let stackTop = stack.pop();
            nextGreater[stackTop] = i;
        }
        stack.push(i);
    }

    return nextGreater;
}

const nums = [13, 8, 1, 5, 2, 5, 9, 7, 6, 12];
const res = nextGreaterElements(nums);
console.log(res);