var moveZeros = function(nums) {
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

const arr = [1, 0, 2, 0, 4, 0];
console.log(moveZeros(arr));