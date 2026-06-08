function longestMonotonicSubarray(nums: number[]): number {
    if(nums.length === 1) return 1;
    let asc = 0;
    let desc = 0;
    let counterAsc = 1;
    let counterDesc = 1;
    for(let i = 0; i < nums.length -1; i++){
        if(nums[i] < nums[i+1]) counterAsc ++;
        else counterAsc = 1;
        if(nums[i] > nums[i+1]) counterDesc++;
        else counterDesc = 1;
        asc = Math.max(counterAsc, asc);
        desc = Math.max(counterDesc, desc);
    }
    if(asc === desc) return asc;
    return asc > desc ? asc : desc;
};

console.log(longestMonotonicSubarray([1,2,3,4,5]));
console.log(longestMonotonicSubarray([5,4,3,2,1]));
console.log(longestMonotonicSubarray([1,2,3,2,1]));