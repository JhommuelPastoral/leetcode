function minMirrorPairDistance(nums) {
    var seen = new Map();
    var res = Infinity;
    var reverse = function (num) {
        var rev = 0;
        while (num > 0) {
            rev = rev * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return rev;
    };
    for (var i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            res = Math.min(res, i - seen.get(nums[i]));
        }
        seen.set(reverse(nums[i]), i);
    }
    return res === Infinity ? -1 : res;
}
console.log(minMirrorPairDistance([1, 2, 3, 12]));
console.log(minMirrorPairDistance([1, 2, 3, 4]));
console.log(minMirrorPairDistance([1, 2, 3, 21]));
