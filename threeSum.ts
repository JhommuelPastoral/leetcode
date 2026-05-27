function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];
    const seen = new Set<string>();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).join(',');
                if (sum === 0 && !seen.has(triplet)) {
                    res.push([nums[i], nums[j], nums[k]]);
                    seen.add(triplet);
                }
            }
        }
    }

    return res;
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]));