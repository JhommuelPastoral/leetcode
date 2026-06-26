function xorQueries(arr: number[], queries: number[][]): number[] {
    const res:number[] = [];

    for(let [left,right] of queries){
        let sum = 0;
        while(left <= right){
            sum ^= arr[left];
            left++;
        }
        res.push(sum);
    }

    return res;
};


console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]));
console.log(xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]]));