var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function backTrack(_a) {
    var candidates = _a.candidates, target = _a.target, current = _a.current, index = _a.index, sum = _a.sum, result = _a.result;
    if (sum === target) {
        result.push(__spreadArray([], current, true));
        return;
    }
    if (sum > target || index >= candidates.length) {
        return;
    }
    for (var i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) {
            continue;
        }
        current.push(candidates[i]);
        backTrack({
            candidates: candidates,
            target: target,
            current: current,
            index: i + 1,
            sum: sum + candidates[i],
            result: result
        });
        current.pop();
    }
}
function combinationSum2(candidates, target) {
    candidates.sort(function (a, b) { return a - b; });
    var result = [];
    backTrack({
        candidates: candidates,
        target: target,
        current: [],
        index: 0,
        sum: 0,
        result: result
    });
    return result;
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
