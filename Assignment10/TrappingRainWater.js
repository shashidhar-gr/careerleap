/** 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack.at(-1)] <= height[i]) {
            let stackTop = stack.pop();
            if (stack.length) {
            // h (height) is the minimum of the previous greater or the next greater elements
                let h = Math.min(height[stack.at(-1)], height[i]) - height[stackTop];
            
            // w (width) is the space between next greater and previous greater element
                let w = i - (stack.at(-1) + 1);
            
            // h * w is the area this stackTop contributes
                count += h * w;
            }
        }
        stack.push(i);
    }
    return count;

    /*let stack = [];
    let previo = new Array(height.length).fill(-1);
    let nexttt = new Array(height.length).fill(-1);
    
    for(let i = 0; i < height.length; i++) {
        while (stack.length && height[stack.at(-1)] < height[i]) {
            let stackTop = stack.pop();
            nexttt[stackTop] = i;
        }
        stack.push(i);
    }

    stack = [];
    for(let i = 0; i < height.length; i++) {
        while (stack.length && height[stack.at(-1)] <= height[i]) {
            let stackTop = stack.pop();
        }
        if(stack.length) {
            previo[i] = stack.at(-1);
        }
        stack.push(i);
    }

    let totalwater = 0;
    for(let i = 0; i < height.length; i++) {
        let prevGreaterVal = previo[i] == -1 ? 0: height[previo[i]];
        let nextttVal = nexttt[i] == -1 ? 0: height[nexttt[i]];

        if(prevGreaterVal != 0 && nextttVal != 0) {
            let minVal = Math.min(prevGreaterVal, nextttVal);
            totalwater = totalwater + (minVal - height[i]); 
        }
    }

    return totalwater; */
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const res = trap(height);