var solver = function(arr) {
    let search = function(arr, row, col, path) {
        if((row == arr.length - 1 && col == arr[0].length - 1)) {
            path.push([row, col]);
            return true;
        }
        
        if((col > arr[0].length - 1 || col < 0)
        || (row > arr.length - 1|| row < 0))
            return false;

        path.push([row, col]);

        if(arr[row][col] == 0)
            return false;

        let moveright = search(arr, row, col + 1, path);

        if(!moveright)
            path.pop();
        else 
            return true;

        let movedown = search(arr, row + 1, col, path);

        if(!movedown)
            path.pop();
        else 
            return true;

        let moveleft = search(arr, row, col - 1, path);

        if(!moveleft)
            path.pop();
        else 
            return true;

        let moveup = search(arr, row - 1, col, path);

        if(!moveup)
            path.pop();
        else 
            return true;

        return true;
    }
    let path = [];
    search(arr, 0, 0, path);
    console.log(path);
}

const arr = [[1, 1, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 1]];
solver(arr);