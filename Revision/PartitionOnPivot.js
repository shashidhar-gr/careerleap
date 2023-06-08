var partition = function(nums) {
    let reader = 0, writer = 0; pivotelement = nums[nums.length-1];
    while(reader < nums.length) {
        if(nums[reader] <= pivotelement) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp;
            writer++;
        }
        reader++;
    }
    return nums;
}

const nums = [5, 3, 7, 14, 4, 19, 4, 11];
//const nums = [5, 3, 7, 4, 14, 19, 4, 11];
console.log(partition(nums));