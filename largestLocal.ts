function largestLocal(grid: number[][]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < grid.length - 2; i++) result.push([]);
    let i = 0;
    while (i < grid.length - 2) {
        let j = 0;
        while (j < grid.length - 2) {
            let max = 0;
            for (let row = i; row < i + 3; row++) {
                for (let col = j; col < j + 3; col++) {
                    max = Math.max(max, grid[row][col]);
                }
            }
            result[i].push(max);
            j++;
        }
        i++;
    }

    return result;
}

console.log(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]));
console.log(largestLocal([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]));