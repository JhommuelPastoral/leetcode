function alphabetBoardPath(target) {
    var res = "";
    var curRow = 0;
    var curCol = 0;
    for (var _i = 0, target_1 = target; _i < target_1.length; _i++) {
        var ch = target_1[_i];
        var pos = ch.charCodeAt(0) - 97;
        var targetRow = Math.floor(pos / 5);
        var targetCol = pos % 5;
        if (ch === 'z') {
            while (curCol > targetCol) {
                res += 'L';
                curCol--;
            }
            while (curCol < targetCol) {
                res += 'R';
                curCol++;
            }
            while (curRow < targetRow) {
                res += 'D';
                curRow++;
            }
            while (curRow > targetRow) {
                res += 'U';
                curRow--;
            }
        }
        else {
            while (curRow > targetRow) {
                res += 'U';
                curRow--;
            }
            while (curCol > targetCol) {
                res += 'L';
                curCol--;
            }
            while (curCol < targetCol) {
                res += 'R';
                curCol++;
            }
            while (curRow < targetRow) {
                res += 'D';
                curRow++;
            }
        }
        res += '!';
    }
    return res;
}
console.log(alphabetBoardPath("leet"));
console.log(alphabetBoardPath("code"));
