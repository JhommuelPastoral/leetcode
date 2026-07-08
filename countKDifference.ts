function countKDifference(nums: number[], k: number): number {
    let res = 0;

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) === k) res++;
        }
    }

    return res;
};

console.log(countKDifference([1,2,2,1], 1));
console.log(countKDifference([1,3], 3));