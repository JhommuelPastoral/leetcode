function luckyNumbers(matrix) {
    var luckyNumber = [];
    var minRow = [];
    var maxCol = [];
    for (var row = 0; row < matrix.length; row++)
        minRow.push(Math.min.apply(Math, matrix[row]));
    for (var col = 0; col < matrix[0].length; col++) {
        var max = 0;
        for (var row = 0; row < matrix.length; row++) {
            max = Math.max(max, matrix[row][col]);
        }
        maxCol.push(max);
    }
    for (var i = 0; i < minRow.length; i++) {
        for (var j = 0; j < maxCol.length; j++) {
            if (minRow[i] === maxCol[j])
                luckyNumber.push(minRow[i]);
        }
    }
    return luckyNumber;
}
;
console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));
console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
console.log(luckyNumbers([[7, 8], [1, 2]]));
