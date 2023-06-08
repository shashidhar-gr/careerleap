var moveZeroes = function(nums) {
    
    let reader = 0, writer = 0;
    while(reader < nums.length) {
        if(nums[reader] != 0) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp;
            writer++;
        }
        reader++;
    }
    
    return nums;
}

const nums = [0, 1, 2, 0, 5, 0, 1];
console.log(moveZeroes(nums));