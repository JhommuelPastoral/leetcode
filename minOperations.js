"use strict";
function minOperations(nums, k) {
    const set = new Set();
    for (let i = 1; i <= k; i++)
        set.add(i);
    let res = 0;
    while (nums.length > 0 && set.size > 0) {
        const pop = nums.pop();
        if (set.has(pop))
            set.delete(pop);
        res++;
    }
    return res;
}
;
console.log(minOperations([1, 2, 3, 4, 5], 5));
console.log(minOperations([3, 1, 3, 4, 3], 6));
