var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function relativeSortArray(arr1, arr2) {
    var res = [];
    var map = new Map();
    var i = 0, j = 0;
    while (i < arr1.length) {
        map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
        i++;
    }
    var set = new Set(__spreadArray(__spreadArray([], arr2, true), arr1.sort(function (a, b) { return a - b; }), true));
    set.forEach(function (value) {
        res = __spreadArray(__spreadArray([], res, true), new Array(map.get(value)).fill(value), true);
    });
    return res;
}
;
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
