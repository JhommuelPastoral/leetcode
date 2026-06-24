"use strict";
function findScore(nums) {
    const pairs = nums.map((num, idx) => [num, idx]);
    pairs.sort((a, b) => {
        if (a[0] !== b[0])
            return a[0] - b[0];
        return a[1] - b[1];
    });
    console.log(pairs);
    const marked = new Array(nums.length).fill(false);
    let score = 0;
    for (const [value, idx] of pairs) {
        if (marked[idx])
            continue;
        score += value;
        marked[idx] = true;
        if (idx > 0)
            marked[idx - 1] = true;
        if (idx < nums.length - 1)
            marked[idx + 1] = true;
    }
    return score;
}
console.log(findScore([2, 1, 3, 4, 5])); // 9
console.log(findScore([2, 3, 5, 1, 3, 2])); // 6
