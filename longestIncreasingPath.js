"use strict";
function backTrack(matrix, row, col, res, path) {
    if (row < 0 ||
        row >= matrix.length ||
        col < 0 ||
        col >= matrix[row].length ||
        path.has(`${row},${col}`)) {
        return [...res];
    }
    if (matrix[row][col] <= res[res.length - 1] && res.length > 0)
        return [...res];
    path.add(`${row},${col}`);
    res.push(matrix[row][col]);
    let best = [...res];
    const direction = [
        [-1, 0], // UP
        [1, 0], // DOWN
        [0, 1], // RIGHT
        [0, -1] // LEFT
    ];
    // direction row and col
    for (const [dr, dc] of direction) {
        const candidate = backTrack(matrix, row + dr, col + dc, res, path);
        if (candidate.length > best.length)
            best = candidate;
    }
    // Search for Asc //
    path.delete(`${row},${col}`);
    res.pop();
    return best;
}
function longestIncreasingPath(matrix) {
    let longest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const path = new Set();
            const res = backTrack(matrix, i, j, [], path);
            longest = Math.max(res.length, longest);
        }
    }
    return longest;
}
;
console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]));
console.log(longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]]));
