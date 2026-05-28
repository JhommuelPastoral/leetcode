function containDuplicate(nums) {
    var set = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (set.has(num))
            return true;
        set.add(num);
    }
    return false;
}
console.log(containDuplicate([1, 2, 3, 1]));
console.log(containDuplicate([1, 2, 3, 4]));
function countChar(str) {
    var _a;
    var map = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    return map;
}
var map = countChar('hello');
console.log(map);
function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums, target));
