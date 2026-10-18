function matrixSumQueries(n, queries) {
    var sum = 0;
    var rows = n;
    var cols = n;
    var visitedRows = new Set();
    var visitedCols = new Set();
    for (var i = queries.length - 1; i >= 0; i--) {
        var _a = queries[i], type = _a[0], index = _a[1], value = _a[2];
        if (type === 0) {
            if (visitedRows.has(index))
                continue;
            sum += cols * value;
            visitedRows.add(index);
            rows--;
        }
        else {
            if (visitedCols.has(index))
                continue;
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
