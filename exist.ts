function backTrack(row:number, col:number, word:string, index:number, board:string[][], path:Set<string>):boolean{
    if(index === word.length) return true;

    // OUT OF BOUNDS
    if((row < 0 || col < 0) || (row >= board.length || col >= board[row].length) || word[index] !== board[row][col] || path.has(`${row},${col}`)) return false
    
    path.add(`${row},${col}`);
    const res = backTrack(row - 1, col, word, index+1, board, path) || // UP SEARCH
                backTrack(row + 1, col, word, index+1, board, path) || // DOWN SEARCH
                backTrack(row, col + 1, word, index+1, board, path) || // RIGHT SEARCH
                backTrack(row, col - 1, word, index+1, board, path);   // LEFT SEARCH
    path.delete(`${row},${col}`)
    return res;
}

function exist(board: string[][], word: string): boolean {
    
    for(let row = 0; row < board.length; row++){
        const rowHolder = board[row];
        for(let col = 0; col < rowHolder.length; col++){
            if(rowHolder[col] === word[0]){
                const path = new Set<string>();
                path.add(`${row}${col}`);
                if(backTrack(row,col,word,0,board,path)) return true;
            }
        }
    }


    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")) // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")) // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")) // false