function minimumAverage(nums: number[]): number {
    nums.sort((a:number, b:number) => a - b);
    let minAvg = Infinity;
    while(nums.length > 0){
        const min = nums.shift()!;
        const max = nums.pop()!;
        minAvg = Math.min(minAvg, (min+max)/2);
    }
    return minAvg;
};

console.log(minimumAverage([1,3,5]));
console.log(minimumAverage([6,2,7,5,1,2,0,3]));