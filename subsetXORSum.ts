function backTrack(nums:number[], res:number[][], subset:number[], index:number):number[][]{
    if(index === nums.length){
        res.push([...subset]);
        return res;
    }

    subset.push(nums[index]);
    backTrack(nums, res, subset, index + 1);
    subset.pop();
    backTrack(nums, res, subset, index + 1);
    return res;
}


function subsetXORSum(nums: number[]): number { 
    
    const subsets = backTrack(nums, [], [], 0);
    let sum = 0;
    for(const subset of subsets){
        if(subset.length === 0) continue;
        let sumOfXOR = 0;
        for(const num of subset){
            sumOfXOR ^= num;
        }
        sum += sumOfXOR;
    }
    return sum;
};


console.log(subsetXORSum([1,2,3]));
console.log(subsetXORSum([3,4,6,8,10]));
console.log(subsetXORSum([3,4,6,8,10,12]));