/**
 * 84. Largest Rectangle in Histogram
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
const nextSmallerElement = require("./NextSmallerElement");
const pastSmallerElement = require("./PastSmallerElement");

var largestRectangleArea = function(heights) {
    let nextSmall = nextSmallerElement(heights);
    let pastSmall = pastSmallerElement(heights);

    let maxArea = 0;
    for(let i = 0; i < heights.length; i++) {
        let width = Math.abs(Math.abs(nextSmall[i] - pastSmall[i]) - 1);
        let area = width * heights[i];
        maxArea = Math.max(area, maxArea);
    }

    return maxArea;
}

// Brute force solution.
/*var largestRectangleArea = function(heights) {
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
}; */

const arr = [2,1,5,6,2,3];
console.log(largestRectangleArea(arr));