function sumOfSquares(nums: number[]): number {
    let res = 0;

    for(let i = 0; i < nums.length; i++){
        if(  nums.length % (i+1) === 0) res += nums[i] * nums[i];
    }

    return res;
};

console.log(sumOfSquares([1,2,3,4])); // 5
console.log(sumOfSquares([1,2,3,4,5])); // 14
console.log(sumOfSquares([1,2,3,4,5,6])); // 14
console.log(sumOfSquares([1,2,3,4,5,6,7])); // 14