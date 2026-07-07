function numSpecial(mat: number[][]): number {
    let res = 0;
    for(let row = 0; row < mat.length; row++){
        for(let col = 0; col < mat[row].length; col++){
            if(mat[row][col] === 1){
                // Scan Entire Column
                let isColGood = true; 
                let isRowGood = true;
                for(let i = 0; i < mat.length; i++){
                    if(mat[i][col] && i !== row){
                        isColGood = false;
                        break;
                    }
                }
                if(!isColGood) break;
                // Scan Entire Row
                for(let i = 0; i < mat[row].length; i++){
                    if(mat[row][i] && i !== col){
                        isRowGood = false;
                        break;
                    }    
                }
                if(!isRowGood) break;
                res++;
            }
        }
    }
    return res;
};

console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]));
console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]]));