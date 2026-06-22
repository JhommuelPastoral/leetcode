var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function countDistinctIntegers(nums) {
    var res = __spreadArray([], nums, true);
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var reversed = 0;
        while (num > 0) {
            var digit = num % 10;
            reversed = (reversed * 10) + digit;
            num = Math.floor(num / 10);
        }
        res.push(reversed);
    }
    return Array.from(new Set(res)).length;
}
;
console.log(countDistinctIntegers([1, 13, 10, 12, 31, 11]));
console.log(countDistinctIntegers([1, 2, 3, 4, 5, 6]));
