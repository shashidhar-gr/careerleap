var solver = function(arr) {
    let search = function(arr, row, col, i, j, visited) {
        if((row == i && col == j)) {
            visited[row][col] = 1;
            return true;
        }
        
        if((col > j || col < 0)
        || (row > i || row < 0) || arr[row][col] == 0 || visited[row][col] == 1)
            return false;

        visited[row][col] = 1;

        if(search(arr, row, col + 1, i, j, visited) || search(arr, row + 1, col, i, j, visited)
        || search(arr, row, col - 1, i, j, visited) || search(arr, row - 1, col, i, j, visited)) {
            return true;
        }

        visited[row][col] = 0;
    }

    let visited = new Array(arr.length);
    let colsize = arr[0].length;
    for(let i = 0; i < arr.length; i++) {
        let arrcol = new Array(colsize).fill(0);
        visited[i] = arrcol;
    }

    search(arr, 0, 0, 3, 3, visited);
    console.log(visited);
}

const arr = [[1, 1, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 1]];
solver(arr);