var previousGreaterElements = function(arr) {
    let stack = [];
    let previousGreater = new Array(arr.length).fill(-1);

    for(let i = 0; i < arr.length; i++) {

        while(stack.length && arr[stack.at(-1)] <= arr[i]) {
            stack.pop();
        }

        if(stack.length) {
            let stackTop = stack.at(-1);
            previousGreater[i] = stackTop;
        }

        stack.push(i);
    }
    return previousGreater;
}

const nums = [13, 8, 1, 5, 2, 5, 9, 7, 6, 12];
const res = previousGreaterElements(nums);
console.log(res);