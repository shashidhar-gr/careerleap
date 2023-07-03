class Node {
	constructor(data) {
		this.left = null;
		this.right  = null;
		this.data = data;
	}
}

let printPath = function(root, x) {
    let dfs = function(root, path) {
        if(root == null)
            return;

        if(root.data == x) {
            path.push(root.data);
            return path;
        }
        path.push(root.data);
        dfs(root.left, path);
        dfs(root.right, path);
        path.pop();
    }

    let res = dfs(root, []);
    console.log(res);
} 

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let x = 4;
printPath(root, x);

/**
 let printPath = function(root, x) {
    let stack = [];
    let dfs = function(root) {
        if(root === null)
            return false;
        
        stack.push(root.data);

        if(root.data == x)
            return true;

        let foundInLeft = dfs(root.left);

        if(foundInLeft)
            return true;

        let foundInRight = dfs(root.right);
        
        if(foundInRight)
            return true;

        if(!foundInRight && !foundInLeft) {
            stack.pop();
            return false;
        }
        else   
            return true;
    }
    
    let res = dfs(root, x);
    if(res) {
        console.log("path found");
        console.log(stack);
    }
    else {
        console.log("path not found");
    }
} 

 */