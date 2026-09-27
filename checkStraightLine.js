"use strict";
function checkStraightLine(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const dx = x1 - x0;
    const dy = y1 - y0;
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if ((x - x0) * dy !== (y - y0) * dx) {
            return false;
        }
    }
    return true;
}
console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])); // true
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])); // false
console.log(checkStraightLine([[0, 0], [0, 1], [0, -1]])); // true
