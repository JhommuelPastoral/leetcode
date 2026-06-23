var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function backTrack(matrix, row, col, res, path) {
    if (row < 0 ||
        row >= matrix.length ||
        col < 0 ||
        col >= matrix[row].length ||
        path.has("".concat(row, ",").concat(col))) {
        return __spreadArray([], res, true);
    }
    if (matrix[row][col] <= res[res.length - 1] && res.length > 0)
        return __spreadArray([], res, true);
    path.add("".concat(row, ",").concat(col));
    res.push(matrix[row][col]);
    var best = __spreadArray([], res, true);
    var direction = [
        [-1, 0], // UP
        [1, 0], // DOWN
        [0, 1], // RIGHT
        [0, -1] // LEFT
    ];
    // direction row and col
    for (var _i = 0, direction_1 = direction; _i < direction_1.length; _i++) {
        var _a = direction_1[_i], dr = _a[0], dc = _a[1];
        var candidate = backTrack(matrix, row + dr, col + dc, res, path);
        if (candidate.length > best.length)
            best = candidate;
    }
    // Search for Asc //
    path.delete("".concat(row, ",").concat(col));
    res.pop();
    return best;
}
function longestIncreasingPath(matrix) {
    var longest = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            var path = new Set();
            var res = backTrack(matrix, i, j, [], path);
            longest = Math.max(res.length, longest);
        }
    }
    return longest;
}
;
console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]));
console.log(longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]]));
