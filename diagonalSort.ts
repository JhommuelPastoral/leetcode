function diagonalSort(mat: number[][]): number[][] {

    let row = mat.length - 1;
    let col = 0;
    let flag = false;
    while(true){
        if(row === 0 && mat[0].length-1 === col) break;
        const temp = [];
        let tempRow = row;
        let tempCol = col;
        while(tempRow < mat.length && tempCol < mat[0].length) temp.push(mat[tempRow++][tempCol++]);
        temp.sort((a:number, b:number) => a - b);
        tempCol = col;
        tempRow = row;
        let index = 0;
        while(tempRow < mat.length && tempCol < mat[0].length) mat[tempRow++][tempCol++] = temp[index++];
        if(row > 0){
            row--;
            col = 0;
            flag = true;
        }
        else{
            if(flag){
                col = 0;
                flag = false;
            }
            else col ++;
        }
    }    

    return mat;
};

console.log(diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]));
console.log(diagonalSort([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]));
console.log(diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]));
console.log(diagonalSort([[1,2,3],[4,5,6],[7,8,9]]));