"use strict";
function backTrack({ candidates, target, current, index, sum, result }) {
    if (sum === target) {
        result.push([...current]);
        return;
    }
    if (sum > target || index >= candidates.length) {
        return;
    }
    for (let i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) {
            continue;
        }
        current.push(candidates[i]);
        backTrack({
            candidates,
            target,
            current,
            index: i + 1,
            sum: sum + candidates[i],
            result
        });
        current.pop();
    }
}
function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    backTrack({
        candidates,
        target,
        current: [],
        index: 0,
        sum: 0,
        result
    });
    return result;
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
