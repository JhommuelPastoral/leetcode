function backTrack(row, col, word, index, board, path) {
    if (index === word.length)
        return true;
    // OUT OF BOUNDS
    if ((row < 0 || col < 0) || (row >= board.length || col >= board[row].length) || word[index] !== board[row][col] || path.has("".concat(row, ",").concat(col)))
        return false;
    path.add("".concat(row, ",").concat(col));
    var res = backTrack(row - 1, col, word, index + 1, board, path) || // UP SEARCH
        backTrack(row + 1, col, word, index + 1, board, path) || // DOWN SEARCH
        backTrack(row, col + 1, word, index + 1, board, path) || // RIGHT SEARCH
        backTrack(row, col - 1, word, index + 1, board, path); // LEFT SEARCH
    path.delete("".concat(row, ",").concat(col));
    return res;
}
function exist(board, word) {
    for (var row = 0; row < board.length; row++) {
        var rowHolder = board[row];
        for (var col = 0; col < rowHolder.length; col++) {
            if (rowHolder[col] === word[0]) {
                var path = new Set();
                path.add("".concat(row).concat(col));
                if (backTrack(row, col, word, 0, board, path))
                    return true;
            }
        }
    }
    return false;
}
;
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE")); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")); // false
