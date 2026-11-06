function firstStableIndex(nums: number[], k: number): number {
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
        max = Math.max(max, nums[i]);
        const min = Math.min(...nums.slice(i,nums.length));
        if(max - min <= k) return i;

    }
    return -1;
};

console.log(firstStableIndex([1,2,3,4,5], 3));
console.log(firstStableIndex([1,2,3,4,5], 1));
console.log(firstStableIndex([1,2,3,4,5], 0));