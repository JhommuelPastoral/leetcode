function flipAndInvertImage(image: number[][]): number[][] {
    const res:number[][] = [];
    for(let i = 0; i < image.length; i++){
        const reverse:number[] = [];
        for(let j = image[i].length - 1; j >=0; j--){
            reverse.push(image[i][j] === 1 ? 0 : 1);
        }
        res.push(reverse);
    }


    return res;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // Output: [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,0,1],[0,1,0],[1,0,1]])); // Output: [[0,1,0],[1,0,1],[0,1,0]]
console.log(flipAndInvertImage([[1,1,1],[1,0,0],[0,1,1]])); // Output: [[0,0,0],[1,1,0],[0,0,1]]