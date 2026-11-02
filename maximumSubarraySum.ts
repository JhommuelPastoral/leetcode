
function maximumSubarraySum(nums: number[], k: number): number {
    let max = -Infinity;

    const map = new Map<number, number>();
    let tempSum = 0;

    const prefix: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        prefix[i] = tempSum;
    }

    for (let i = 0; i < nums.length; i++) {
        const target1 = nums[i] - k;
        const target2 = nums[i] + k;

        if (map.has(target1)) {
            const sum = prefix[i] - map.get(target1)!;
            max = Math.max(max, sum);
        }

        if (map.has(target2)) {
            const sum = prefix[i] - map.get(target2)!;
            max = Math.max(max, sum);
        }

        const currentPrefix = prefix[i] - nums[i];

        if (!map.has(nums[i]) || currentPrefix < map.get(nums[i])!) {
            map.set(nums[i], currentPrefix);
        }
    }

    return max === -Infinity ? 0 : max;
}



console.log(maximumSubarraySum([1,2,3,4,5], 1));
console.log(maximumSubarraySum([1,2,3,4,5], 2));
console.log(maximumSubarraySum([1,2,3,4,5], 3));