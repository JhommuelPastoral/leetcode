function spiralOrder(matrix: number[][]): number[] {
    const seen = new Set<String>();
    const res:number[]=[];
    let maxRow = matrix.length;
    let maxCol = matrix[0].length;
    let row = 0;
    let col = 0;
    
    while(true){

        const canRight = col + 1 < maxCol && !seen.has(`${row}-${col + 1}`);
        const canDown = row + 1 < maxRow && !seen.has(`${row + 1}-${col}`);
        const canLeft = col - 1 >= 0 && !seen.has(`${row}-${col - 1}`);
        const canUp = row - 1 >= 0 && !seen.has(`${row - 1}-${col}`);
        res.push(matrix[row][col]);
        seen.add(`${row}-${col}`);

        if(canRight && !canUp){
            col++;
            continue;
        }

        if(canDown){
            row++;
            continue;
        }
        if(canLeft && !canDown){
            col--;
            continue;
        }

        if(canUp){
            row--;
            continue;
        }
        break;
    }
    return res;

};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1]])); // Output: [1]