function minDifference(nums: number[], queries: number[][]): number[] {
    const result:number[] = [];

    for(const [start,end] of queries){
        const subArr = Array.from(new Set<number>(nums.slice(start, end+1))).sort((a:number, b:number) => a - b);
        if(subArr.length === 1){
            result.push(-1);
            continue;
        }
        let min = Infinity;
        for(let i = 0; i < subArr.length - 1; i++){
            min = Math.min(min, Math.abs(subArr[i] - subArr[i+1]));
            if(min === 1) break;
        }
        result.push(min)

    }

    return result;
};

console.log(minDifference([1,3,4,8], [[0,1],[1,2],[2,3],[0,3]])); // Output: [2,1,4,1]
console.log(minDifference([4,3,2,4], [[0,1],[1,2],[2,3],[0,3]]));