function dominantIndices(nums: number[]): number {
    let res = 0;
    let sum = nums.reduce((acc, curr) => acc + curr, 0) - nums[0];
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > (sum / (nums.length - 1 - i)) ) res++;
        sum -= nums[i+1];
    }

    return res;
};
console.log(dominantIndices([3,6,1,0])); // Output: 3
console.log(dominantIndices([1,2,3,4])); // Output: 0