function backTrack(i:number, arr: number[], res:number[][], subset:number[]) : number[][]{
    if(i === arr.length){
        res.push([...subset]);
        return res;
    }

    subset.push(arr[i]);
    backTrack(i+1, arr, res, subset);
    
    subset.pop();
    backTrack(i+1, arr, res, subset);

    return res;
}

function subsets(nums: number[]): number[][] {
    const res = backTrack(0,nums,[],[]);
    return res;
};

console.log(subsets([1,2,3])) // [[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]
console.log(subsets([1,2,3,5])) // [[1,2,3,5],[1,2,3],[1,2,5],[1,2],[1,3,5],[1,3],[1,5],[1],[2,3,5],[2,3],[2,5],[2],[3,5],[3],[5],[]]

export{}