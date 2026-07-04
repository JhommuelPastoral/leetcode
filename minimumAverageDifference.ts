function minimumAverageDifference(nums: number[]): number {
    let min = Infinity;
    let index = 0;
    let leftSum = 0;
    let rightSum = nums.reduce((acc:number, curr:number) => acc + curr, 0);
    for(let i = 0; i < nums.length; i++){
        rightSum -= nums[i];
        leftSum += nums[i];
        const rightAvg =(nums.length - 1 -i) === 0 ? 0 : Math.floor(rightSum / (nums.length - 1 -i));
        const avg = Math.abs(Math.floor(leftSum / (i + 1)) - rightAvg);
        if(avg < min){
            min = avg;
            index = i;
        }
    }

    return index;
};

console.log(minimumAverageDifference([2,5,3,9,5,3])); // Output: 3
console.log(minimumAverageDifference([0])); // Output: 0