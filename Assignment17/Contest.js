/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let l = 0, r = 0, maxSub = 0;
    
    while(r < nums.length && l < nums.length) {
        if(nums[l] % 2 == 0 && nums[l] <= threshold && nums[r] <= threshold) {
            let evenOddSubArray = true, checkingEven = true;
            
            if(r > l)
                checkingEven = false;

            for(let i = l; i <= r; i++) {
                if(checkingEven && nums[i] % 2 == 0) {
                    i++;
                    checkingEven = false;
                }
                else if(!checkingEven && nums[i] % 2 != 0) {
                    i++;
                    checkingEven = true;
                }
                else {
                    evenOddSubArray = false;
                    break;
                }
            }
            if(evenOddSubArray) {
                 if((r-l+1) > maxSub) {
                    maxSub = r-l+1;
                 }
                r++;
            }
            else {
                l++;
            }
        }
        else {
            l++;
            if(l > r) {
                r = l;
            }
        }
    }
    
    return maxSub;
};

// const arr = [2, 2];
// const threshold = 18;

const arr = [3, 2, 5, 4];
const threshold = 5;

longestAlternatingSubarray(arr, threshold);