"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
function maxProductSubArray(nums, k) {
    let window = nums.slice(0, k).reduce((a, b) => a * b, 1);
    let max = window;
    for (let i = k; i < nums.length; i++) {
        window *= nums[i];
        window /= nums[i - k];
        max = Math.max(max, window);
    }
    return max;
}
exports.arr = [1, 4, 1, 6, -3, 3, -5, 2, 26];
console.log(maxProductSubArray(exports.arr, 4));
function hasSubtringAnagram(s, anagram) {
    var _a, _b, _c;
    const mapAnagram = new Map();
    const window = new Map();
    for (const ch of anagram)
        mapAnagram.set(ch, ((_a = mapAnagram.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
    for (let i = 0; i < anagram.length; i++)
        window.set(s[i], ((_b = window.get(s[i])) !== null && _b !== void 0 ? _b : 0) + 1);
    const isEqual = () => {
        for (const [key, value] of Array.from(mapAnagram)) {
            if (window.get(key) !== value) {
                return false;
            }
        }
        return true;
    };
    if (isEqual())
        return true;
    for (let i = anagram.length; i < s.length; i++) {
        window.set(s[i], ((_c = window.get(s[i])) !== null && _c !== void 0 ? _c : 0) + 1);
        const prev = s[i - anagram.length];
        window.set(prev, window.get(prev) - 1);
        if (window.get(prev) === 0)
            window.delete(prev);
        let isAnagram = true;
        for (const [key, value] of Array.from(mapAnagram)) {
            if (window.get(key) !== value) {
                isAnagram = false;
                break;
            }
        }
        if (isEqual())
            return true;
    }
    return false;
}
console.log(hasSubtringAnagram("greyhounds", "hoy"));
console.log(hasSubtringAnagram("abc", "bca"));
console.log(hasSubtringAnagram("bcaabc", "abc"));
console.log(hasSubtringAnagram("aaaaab", "aaab"));
