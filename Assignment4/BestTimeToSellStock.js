/**
 * 121. Best Time to Buy and Sell Stock
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices 
 * @returns number
 */
/**
 * Two pointer technique.
 */
var maxProfit = function(prices) {
    let profit = 0;

    if(prices.length <= 1) {
        return 0;
    }

    let i = 0, j = 1;
    while(i < prices.length-1 && j < prices.length) {
        let diff = prices[j] - prices[i];
        if(diff < 0) {
            i++;
            j++;
        }
        else if(diff > profit) {
            profit = diff;
            j++;
        }
        else {
            j++;
        }
    }

    return profit;
}

/**
 * Brute force technique.
 */
/*var maxProfit = function(prices) {
    let maxGain = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < prices.length - 1; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[j] > prices[i]) {
                maxGain = Math.max(maxGain, prices[j] - prices[i]);
            }
        }
    }

    return maxGain == Number.NEGATIVE_INFINITY ? 0: maxGain;
}
*/
const arr = [2,1,2,1,0,1,2];
console.log(maxProfit(arr));