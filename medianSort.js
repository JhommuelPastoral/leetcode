var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function medianSort(arr1, arr2) {
    var merged = __spreadArray(__spreadArray([], arr1, true), arr2, true).sort(function (a, b) { return a - b; });
    if (merged.length === 0)
        return 0;
    var median = 0;
    if (merged.length % 2 === 1) {
        var size_1 = Math.floor(merged.length / 2);
        median = merged[size_1];
        return median;
    }
    var size = Math.floor(merged.length / 2);
    median = (merged[size] + merged[size - 1]) / 2;
    return median;
}
var arr1 = [1, 3];
var arr2 = [2];
console.log(medianSort(arr1, arr2));
console.log(medianSort([1, 2], [3, 4]));
console.log(medianSort([1], [3]));
console.log(medianSort([1], []));
