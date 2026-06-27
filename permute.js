var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function permute(nums) {
    var result = [];
    if (nums.length === 1) {
        return [__spreadArray([], nums, true)];
    }
    for (var i = 0; i < nums.length; i++) {
        var n = nums.shift();
        var perms = permute(nums);
        for (var _i = 0, perms_1 = perms; _i < perms_1.length; _i++) {
            var perm = perms_1[_i];
            perm.push(n);
        }
        result.push.apply(result, perms);
        nums.push(n);
    }
    return result;
}
console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1, 2, 3, 4]));
