function oddCells(m: number, n: number, indices: number[][]): number {
    const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    let res = 0;
    for(const [row,col] of indices){
        // row
        for(let i = 0; i < n; i++){
            const prev = grid[row][i]; 
            grid[row][i] += 1;
            if(prev % 2 === 0 && grid[row][i] % 2 !== 0) res ++;
            else if (prev % 2 !==0 && grid[row][i] % 2 === 0) res--;
        }
        // col 
        for(let j = 0; j < m; j++){
            const prev =  grid[j][col];
            grid[j][col] += 1;
            if(prev % 2 === 0 && grid[j][col] % 2 !== 0) res ++;
            else if (prev % 2 !==0 && grid[j][col] % 2 === 0) res--;          
        }
    }
    return res;
}; 
console.log(oddCells(2,3,[[0,1],[1,1]]));
console.log(oddCells(2,2,[[1,1],[0,0]]));