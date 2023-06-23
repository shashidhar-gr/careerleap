/** 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    sort(intervals, 0, intervals.length - 1);

    for(let i = 0; i < intervals.length - 1; i++) {
        let m = intervals[i];
        let n = intervals[i + 1];

        if(n[0] > m[0] && n[1] < m[1]) {
            let temp = intervals[i];
            intervals[i] = intervals[i + 1];
            intervals[i + 1] = temp;
            intervals[i][0] = null;
            intervals[i][1] = null;
        }
        else if(m[1] >= n[0]) {
            let temp = m[0];
            m[0] = null;
            m[1] = null;
            n[0] = temp;
        }
    }

    let res = intervals.filter(arr => arr[0] != null);
    return res;
}

var sort = function(arr, start, end) {
    if(start >= end) {
        return arr;
    }
    
    let partiotionIndex = partiotion(arr, start, end);
    sort(arr, start, partiotionIndex - 1);
    sort(arr, partiotionIndex + 1, end);

    return arr;
}

var partiotion = function(arr, start, end) {
    let reader = start, writer = start, pivot = arr[end];

    while(reader <= end) {
        if(arr[reader][0] <= pivot[0]) {
            let temp = arr[reader];
            arr[reader] = arr[writer];
            arr[writer] = temp;
            writer++;
        }
        reader++;
    }
    
    return writer - 1;
}

const arr = [[1, 4], [2,3]];
console.log(merge(arr));