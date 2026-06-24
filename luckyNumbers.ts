function luckyNumbers(matrix: number[][]): number[] {
    const luckyNumber:number[] = [];
    const minRow:number[] = [];
    const maxCol:number[] = [];
    for(let row = 0; row < matrix.length; row++) minRow.push(Math.min(...matrix[row]));
    for(let col = 0; col < matrix[0].length; col++){
        let max = 0;
        for(let row = 0; row < matrix.length; row++){
            max = Math.max(max, matrix[row][col]);
        }
        maxCol.push(max);
    }

    for(let i = 0; i < minRow.length; i++){
        for(let j = 0; j < maxCol.length; j++){
            if(minRow[i] === maxCol[j]) luckyNumber.push(minRow[i]);
        }
    }
    
    return luckyNumber;
};


console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));
console.log(luckyNumbers([[7,8],[1,2]]));