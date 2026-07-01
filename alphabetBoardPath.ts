function alphabetBoardPath(target: string): string {
    let res = "";
    let curRow = 0;
    let curCol = 0;

    for (const ch of target) {
        const pos = ch.charCodeAt(0) - 97;
        const targetRow = Math.floor(pos / 5);
        const targetCol = pos % 5;

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
        } else {
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