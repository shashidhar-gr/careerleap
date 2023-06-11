var partition = function(nums, start, end) {
    let reader = start, writer = start;
    let pivot = nums[end];

    while(reader <= end) {
        while(nums[reader] <= pivot) {
            let temp = nums[reader];
            nums[reader] = nums[writer];
            nums[writer] = temp;
            writer++;
        }
        reader++;
    }

    return writer - 1;
}

const arr = [10, 3, 4, -1, 3, 5, 2];

console.log(partition(arr, 0, 1));