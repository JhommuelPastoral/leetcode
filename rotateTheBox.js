function rotateTheBox(boxGrid) {
    var rowSize = boxGrid.length;
    var colSize = boxGrid[0].length;
    var rotated = new Array(colSize).fill(null).map(function () { return new Array(rowSize).fill(''); });
    var index = 0;
    for (var i = boxGrid.length - 1; i >= 0; i--) {
        var row = boxGrid[i];
        var j = 0;
        while (j < row.length) {
            rotated[j][index] = row[j];
            j++;
        }
        index++;
    }
    for (var i = 0; i < rowSize; i++) {
        var temp = [];
        for (var j = colSize - 2; j >= 0; j--) {
            var col = rotated[j][i];
            if (col === "#") {
                var counter = j;
                while (counter < colSize - 1) {
                    var nextCol = rotated[counter + 1][i];
                    if (nextCol === '.') {
                        rotated[counter + 1][i] = col;
                        rotated[counter][i] = nextCol;
                        counter++;
                    }
                    else
                        break;
                }
            }
        }
    }
    return rotated;
}
;
console.log(rotateTheBox([["#.#.#.#.#", "#.#.#.#.#", "#.#.#.#.#", "#.#.#.#.#", "#.#.#.#.#"]]));
