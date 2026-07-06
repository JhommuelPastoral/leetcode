function backTrack(nums:number[], subset:number[], index:number, result:number[]):number[]{
    if(index === nums.length){
        const sum = subset.reduce((acc:number, curr:number) => acc + curr, 0)
        const isDivisibleByThree =  sum % 3 === 0;
        if(isDivisibleByThree) result.push(sum);
        return result;
    }
    subset.push(nums[index]);
    backTrack(nums, subset, index + 1, result);

    subset.pop();
    backTrack(nums, subset, index + 1, result);

    return result;
}

function maxSumDivThree(nums: number[]): number {
    
    const subArr = backTrack(nums, [], 0, []);
    return Math.max(...subArr);
};

console.log(maxSumDivThree([3,6,5,1,8])); // 18
console.log(maxSumDivThree([4])); // 0