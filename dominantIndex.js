var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function dominantIndex(nums) {
    if (nums.length === 1)
        return 0;
    var sorted = __spreadArray([], nums, true).sort(function (a, b) { return b - a; });
    if (sorted[0] >= sorted[1] * 2) {
        return nums.indexOf(sorted[0]);
    }
    return -1;
}
console.log(dominantIndex([3, 6, 1, 0]));
