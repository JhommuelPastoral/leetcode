function backTrack(grid:number[][], row:number, col:number, sum:number, seenPath:Set<string>){

    if(!grid[row][col] || seenPath.has(`${row}-${col}`)) return sum;

    seenPath.add(`${row}-${col}`);
    sum += grid[row][col];

    const canUp = row - 1 >= 0 && !seenPath.has(`${row - 1}-${col}`);
    const canDown = row + 1 < grid.length && !seenPath.has(`${row + 1}-${col}`);
    const canRight = col + 1 < grid[row].length && !seenPath.has(`${row}-${col + 1}`);
    const canLeft = col - 1 >= 0 && !seenPath.has(`${row}-${col - 1}`);

    if(canUp) sum = backTrack(grid, row - 1, col, sum,  seenPath);
    if(canDown) sum = backTrack(grid, row + 1, col, sum, seenPath);
    if(canRight) sum = backTrack(grid, row, col + 1, sum, seenPath);
    if(canLeft) sum = backTrack(grid, row, col - 1, sum, seenPath);

    return sum;
}


function countIslands(grid: number[][], k: number): number {
    let res = 0;
    const seenPath = new Set<string>();
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(!grid[i][j] || seenPath.has(`${i}-${j}`)) continue;
            const sum = backTrack(grid, i, j, 0,  seenPath);
            if(sum % k === 0) res++;
        }
    }

    return res;
};


console.log(countIslands([[1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], 2)); // Output: 1
console.log(countIslands([[1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], 3)); // Output: 1
console.log(countIslands([[1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], 4)); // Output: 1