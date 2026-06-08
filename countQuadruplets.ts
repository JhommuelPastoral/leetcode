function countQuadruplets(nums: number[]): number {
    let res = 0;
    for(let i = 0; i <= nums.length - 4; i++){
        for(let j = i + 1; j <= nums.length - 3; j++){
            for(let k = j + 1; k <= nums.length -2; k++){
                for(let l = k+1; l <= nums.length -1; l++){
                    if(nums[i] + nums[j] + nums[k] === nums[l]) res++;
                }
            }
        }
    }

    return res;

};

console.log(countQuadruplets([1,2,3,6]));
console.log(countQuadruplets([3,3,6,4,5]));
console.log(countQuadruplets([1,1,1,3]));