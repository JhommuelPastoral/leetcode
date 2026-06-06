function areaOfMaxDiagonal(dimensions) {
    var maxDiagonal = 0;
    var maxArea = 0;
    for (var _i = 0, dimensions_1 = dimensions; _i < dimensions_1.length; _i++) {
        var _a = dimensions_1[_i], l = _a[0], w = _a[1];
        var diagonal = l * l + w * w;
        var area = l * w;
        if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > maxArea)) {
            maxDiagonal = diagonal;
            maxArea = area;
        }
    }
    return maxArea;
}
console.log(areaOfMaxDiagonal([[4, 5], [2, 3], [1, 1]])); // Output: 20
console.log(areaOfMaxDiagonal([[1, 2], [3, 4], [5, 6]])); // Output: 30
