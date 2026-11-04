function getMaximumGenerated(n: number): number {
    if(n < 2 ) return n;
    let max = 0;
    const nums:number[] = Array(n + 1).fill(0);
    nums[1] = 1;
    for(let i = 0; i <= n + 1; i++){
        if(2 * i <= n){
            nums[2 * i] = nums[i];
            max = Math.max(nums[i],max);
        }   
        if(2 * i + 1 <= n){
            nums[2 * i + 1] = nums[i] + nums[i + 1];
            max = Math.max(nums[i] + nums[i +1], max);
        }
    }
    return max;
};

console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(2));
console.log(getMaximumGenerated(3));