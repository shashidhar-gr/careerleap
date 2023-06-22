var oceanView = function(buildings) {
    let stack = [];
    
    for(let i = buildings.length - 1; i >= 0; i--) {
        while(stack.length && buildings[stack.at(-1)] <= buildings[i]) {
            stack.pop();
        }
        stack.push(i);
    }

    return stack.reverse().map(index => index == -1 ? -1: buildings[index]);
}

const buildings = [2, 3, 4, 5];
const res = oceanView(buildings);
console.log(res);