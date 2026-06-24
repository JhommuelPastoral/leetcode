"use strict";
function rotateTheBox(boxGrid) {
    const rowSize = boxGrid.length;
    const colSize = boxGrid[0].length;
    const rotated = new Array(colSize).fill(null).map(() => new Array(rowSize).fill(''));
    let index = 0;
    for (let i = boxGrid.length - 1; i >= 0; i--) {
        const row = boxGrid[i];
        let j = 0;
        while (j < row.length) {
            rotated[j][index] = row[j];
            j++;
        }
        index++;
    }
    for (let i = 0; i < rowSize; i++) {
        const temp = [];
        for (let j = colSize - 2; j >= 0; j--) {
            let col = rotated[j][i];
            if (col === "#") {
                let counter = j;
                while (counter < colSize - 1) {
                    const nextCol = rotated[counter + 1][i];
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
