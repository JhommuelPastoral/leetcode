function constructTransformedArray(nums: number[]): number[] {
    const n = nums.length;
    const res: number[] = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            res.push(0);
        } else {
            const index = ((i + nums[i]) % n + n) % n;
            res.push(nums[index]);
        }
    }

    return res;
}

console.log(constructTransformedArray([1,2,3,4,5]));
console.log(constructTransformedArray([6,1,7,5,3]));
console.log(constructTransformedArray([0,1,2,3,4]));