function checkStraightLine(coordinates) {
    var _a = coordinates[0], x0 = _a[0], y0 = _a[1];
    var _b = coordinates[1], x1 = _b[0], y1 = _b[1];
    var dx = x1 - x0;
    var dy = y1 - y0;
    for (var i = 2; i < coordinates.length; i++) {
        var _c = coordinates[i], x = _c[0], y = _c[1];
        if ((x - x0) * dy !== (y - y0) * dx) {
            return false;
        }
    }
    return true;
}
console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])); // true
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])); // false
console.log(checkStraightLine([[0, 0], [0, 1], [0, -1]])); // true
