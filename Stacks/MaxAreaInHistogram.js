/**
 * 84. Largest Rectangle in Histogram
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {

}

// Brute force solution.
var largestRectangleArea = function(heights) {
    let maxArea = 0;

    for(let i = 0; i < heights.length; i++) {
        let leftWidth = 0, j = i;
        while(j >= 0 && heights[j-1] >= heights[i]) {
            leftWidth++;
            j--;
        }

        leftWidth = leftWidth * heights[i];

        let rightWidth = 0;
        j = i;
        while(j <= heights.length && heights[j + 1] >= heights[i]) {
            rightWidth++;
            j++;
        }

        rightWidth = rightWidth * heights[i];
        
        let totalWidth = 0;
        if(leftWidth == 0 && rightWidth == 0)
            totalWidth = heights[i];
        else
            totalWidth = leftWidth + heights[i] + rightWidth;

        maxArea = Math.max(maxArea, heights[i], totalWidth);
    }
    
    return maxArea;
};

const arr = [0];
console.log(largestRectangleArea(arr));