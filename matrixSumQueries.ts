function matrixSumQueries(n: number, queries: number[][]): number {
    let sum = 0;
    let rows = n;
    let cols = n;

    const visitedRows = new Set<number>();
    const visitedCols = new Set<number>();

    for (let i = queries.length - 1; i >= 0; i--) {
        const [type, index, value] = queries[i];

        if (type === 0) {
            if (visitedRows.has(index)) continue;

            sum += cols * value;
            visitedRows.add(index);
            rows--;
        } else {
            if (visitedCols.has(index)) continue;

            sum += rows * value;
            visitedCols.add(index);
            cols--;
        }
    }

    return sum;
}


console.log(matrixSumQueries(3, [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]])); // Output: 23
console.log(matrixSumQueries(3, [[0, 0, 4], [0, 1, 2], [1, 0, 1], [1, 2, 3]])); // Output: 17
console.log(matrixSumQueries(2, [[0, 0, 1], [1, 1, 2], [0, 1, 3], [1, 0, 4]])); // Output: 15