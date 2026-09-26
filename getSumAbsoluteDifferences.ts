function getSumAbsoluteDifferences(nums: number[]): number[] {
    const res:number[] = [];

    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = 0; j < nums.length; j++){
            if(j === i) continue;
            sum += Math.abs(nums[i] - nums[j]);
        }

        res.push(sum);
    }


    return res;
};

console.log(getSumAbsoluteDifferences([2,3,5])); // [4,3,5]
console.log(getSumAbsoluteDifferences([1,4,6,8,10])); // [24,15,13,15,21]
console.log(getSumAbsoluteDifferences([1,2,3,4,5])); // [10,7,6,7,10]