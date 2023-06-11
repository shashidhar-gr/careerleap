/**
 * Ultimate Survivor.
 * @param {Number} num 
 */
var problem1 = function(num) {
    let keepJumping = true;

    let list = [], i = 0;
    for(let n = 1; n <= num; n++) {
        list[i] = n;
        i++;
    }

    let start = 0, end = num - 1, res = 0;
    while(keepJumping) {
        let forwardjump = true;
        res = start;
        let i = start; let numofJumps = 0;

        if(forwardjump) {
            numofJumps = Math.floor(end - start) / 2;
            while(numofJumps != 0) {
                i = i + 2;
                numofJumps--;
            }
            end = start + 1;
            start = i - 1;
        }

        forwardjump = false;
        j = start;
        if(!forwardjump) {
            numofJumps = Math.floor(start - end) / 2;
            while(numofJumps != 0) {
                j = j - 2;
                numofJumps--;
            }
            end = start - 1;
            start = j + 1;
        }

        if(start == end) {
            keepJumping = false;
        }
    }

    return res;
}

let res = problem1(9);
console.log(res);