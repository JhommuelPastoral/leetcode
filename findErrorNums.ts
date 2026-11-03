function findErrorNums(nums: number[]): number[] {
    nums.sort((a:number, b:number) => a - b);
    let missing:number = 1;
    for(let i = 0; i < nums.length; i++){
        if(missing === nums[i] && nums[i] !== nums[i + 1]) missing++;
        if(nums[i] > missing) break;
    }
    const seen = new Set<number>();
    for(const num of nums){
        if(seen.has(num)) return [num, missing];
        seen.add(num)
    }


    return [];

};

console.log(findErrorNums([1,2,2,4]));
console.log(findErrorNums([1,1]));
console.log(findErrorNums([2,2]));