function maxProductPair(nums, target) {
    var map = new Map();
    var max = -Infinity;
    var res = [];
    for (var i = 0; i < nums.length; i++)
        map.set(nums[i], i);
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (map.has(diff) && nums[i] * nums[map.get(diff)] > max && nums[i] + nums[map.get(diff)] === target && nums[i] !== nums[map.get(diff)] && nums[i] > nums[map.get(diff)]) {
            res = [i, map.get(diff)];
            max = nums[i] * nums[map.get(diff)];
        }
    }
    return res.length > 0 ? res : [-1, -1];
}
;
console.log(maxProductPair([1, 2, 3, 4, 5], 5));
console.log(maxProductPair([1, 2, 3, 4, 5], 7));
console.log(maxProductPair([1, 2, 3, 4, 5], 10));
