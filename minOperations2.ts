function minOperations(nums: number[]): number {
    let operations = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const target = nums[i - 1] + 1;
            operations += target - nums[i];
            nums[i] = target;
        }
    }

    return operations;
}

console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([1, 5, 2, 4, 1])); // 14
console.log(minOperations([8])); // 0