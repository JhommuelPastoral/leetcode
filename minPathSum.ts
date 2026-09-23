
function backTrack(grid: number[][],row: number,col: number,sum: number,res: number[]): number[] {

    sum += grid[row][col];

    if (row === grid.length - 1 &&col === grid[0].length - 1) {
        if(!res.length) res.push(sum);
        else{
            if (sum < res[0]){
                res[0] = sum;
            }
        }
        return res;
    }

    const hasDownSide = row < grid.length - 1;
    const hasRightSide = col < grid[0].length - 1;

    if (hasDownSide) {
        backTrack(grid, row + 1, col, sum, res);
    }

    if (hasRightSide) {
        backTrack(grid, row, col + 1, sum, res);
    }

    return res;
}

function minPathSum(grid: number[][]): number {

    const res = backTrack(grid, 0, 0, 0 ,[]);
    return res[0];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // Output: 7
console.log(minPathSum([[1,2,3],[4,5,6]])); // Output: 12