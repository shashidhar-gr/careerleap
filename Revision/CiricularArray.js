var nextGreater = function(arr, index) {
    
    let j = (index + 1) % arr.length;
    let count = 0;
    while(count < arr.length) {
        if(arr[j] > arr[index]) {
            return arr[j];
        }
        j++;
        count++;
        if(j == arr.length) 
            j = j % arr.length;
    }

    return -1;
}
const arr = [2, 5, 1, 4, 6, 0];
console.log(nextGreater(arr, 5));
