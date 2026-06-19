var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function minMaxGame(nums) {
    var res = __spreadArray([], nums, true);
    while (res.length > 1) {
        var temp = [];
        for (var i = 0; i < res.length / 2; i++) {
            if (i % 2 === 0) {
                temp.push(Math.min(res[i * 2], res[i * 2 + 1]));
            }
            else {
                temp.push(Math.max(res[i * 2], res[i * 2 + 1]));
            }
        }
        res = temp;
    }
    return res[0];
}
console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); // 1
console.log(minMaxGame([3])); // 3
