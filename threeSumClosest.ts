function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const triplet = nums[i] + nums[left] + nums[right];
            if (Math.abs(triplet - target) < Math.abs(closest - target)) closest = triplet;
            if (triplet > target) right--;
            else if (triplet < target) left++;
            else return target;
        }
    }

    return closest;
}

console.log(threeSumClosest([-1,2,1,-4], 1)) // 2
console.log(threeSumClosest([0,0,0], 1)) // 0