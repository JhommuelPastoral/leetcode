var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function backTrack(nums, res, subset, index) {
    if (index === nums.length) {
        res.push(__spreadArray([], subset, true));
        return res;
    }
    subset.push(nums[index]);
    backTrack(nums, res, subset, index + 1);
    subset.pop();
    backTrack(nums, res, subset, index + 1);
    return res;
}
function subsetXORSum(nums) {
    var subsets = backTrack(nums, [], [], 0);
    var sum = 0;
    for (var _i = 0, subsets_1 = subsets; _i < subsets_1.length; _i++) {
        var subset = subsets_1[_i];
        if (subset.length === 0)
            continue;
        var sumOfXOR = 0;
        for (var _a = 0, subset_1 = subset; _a < subset_1.length; _a++) {
            var num = subset_1[_a];
            sumOfXOR ^= num;
        }
        sum += sumOfXOR;
    }
    return sum;
}
;
console.log(subsetXORSum([1, 2, 3]));
console.log(subsetXORSum([3, 4, 6, 8, 10]));
console.log(subsetXORSum([3, 4, 6, 8, 10, 12]));
