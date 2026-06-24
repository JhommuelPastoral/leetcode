"use strict";
function containDuplicate(nums) {
    const set = new Set();
    for (const num of nums) {
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
    const map = new Map();
    for (const char of str) {
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    return map;
}
const map = countChar('hello');
console.log(map);
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
