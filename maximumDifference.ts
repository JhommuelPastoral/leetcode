function maximumDifference(nums: number[]): number {
    
    let res = -1;
    let left = 0;
    let right = 1;

    while(right < nums.length){
        if(nums[left] < nums[right]) res = Math.max(res, nums[right] - nums[left]);
        else left = right;
        right++;
    }

    return res;
};

console.log(maximumDifference([7,1,5,4]));
console.log(maximumDifference([9,4,3,2]));
console.log(maximumDifference([1,5,2,10])); 