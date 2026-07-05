function backTrack(grid, health, row, col, path) {
    // Out of bounds
    if (row < 0 || row >= grid.length)
        return false;
    if (col < 0 || col >= grid[0].length)
        return false;
    // Already visited
    if (path.has("".concat(row, ",").concat(col)))
        return false;
    // Lose health if current cell is unsafe (1)
    health -= grid[row][col];
    // Must always have positive health
    if (health <= 0)
        return false;
    // Reached destination
    if (row === grid.length - 1 && col === grid[0].length - 1)
        return true;
    path.add("".concat(row, ",").concat(col));
    var isSafe = backTrack(grid, health, row + 1, col, path) || // DOWN
        backTrack(grid, health, row - 1, col, path) || // UP
        backTrack(grid, health, row, col + 1, path) || // RIGHT
        backTrack(grid, health, row, col - 1, path); // LEFT
    path.delete("".concat(row, ",").concat(col));
    return isSafe;
}
function findSafeWalk(grid, health) {
    var path = new Set();
    return backTrack(grid, health, 0, 0, path);
}
;
console.log(findSafeWalk([[0, 0, 1], [0, 1, 0], [0, 0, 0]], 2)); // true
console.log(findSafeWalk([[0, 1, 1], [1, 1, 0], [0, 0, 0]], 2)); // true
