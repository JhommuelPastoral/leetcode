"use strict";
function minSwaps(nums) {
    let res = 0;
    const map = new Map();
    for (const num of nums) {
        let sum = 0;
        let temp = num;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        map.set(num, sum);
    }
    const sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    const pos = new Map();
    for (let i = 0; i < nums.length; i++) {
        pos.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const target = sorted[i][0];
        if (nums[i] === target)
            continue;
        const j = pos.get(target);
        [nums[i], nums[j]] = [nums[j], nums[i]];
        pos.set(nums[j], j);
        pos.set(nums[i], i);
        res++;
    }
    return res;
}
console.log(minSwaps([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]));
console.log(minSwaps([1, 3, 5, 2, 4, 6, 7]));
