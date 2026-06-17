var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function backTrack(i, arr, res, subset) {
    if (i === arr.length) {
        res.push(__spreadArray([], subset, true));
        return res;
    }
    subset.push(arr[i]);
    backTrack(i + 1, arr, res, subset);
    subset.pop();
    backTrack(i + 1, arr, res, subset);
}
function subsets(nums) {
    var res = backTrack(0, nums, [], []);
    return res;
}
;
console.log(subsets([1, 2, 3])); // [[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]
console.log(subsets([1, 2, 3, 5])); // [[1,2,3,5],[1,2,3],[1,2,5],[1,2],[1,3,5],[1,3],[1,5],[1],[2,3,5],[2,3],[2,5],[2],[3,5],[3],[5],[]]
