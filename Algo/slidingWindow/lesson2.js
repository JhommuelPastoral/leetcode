"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
function maxProductSubArray(nums, k) {
    var window = nums.slice(0, k).reduce(function (a, b) { return a * b; }, 1);
    var max = window;
    for (var i = k; i < nums.length; i++) {
        window *= nums[i];
        window /= nums[i - k];
        max = Math.max(max, window);
        console.log(window);
    }
    return max;
}
exports.arr = [1, 4, 1, 6, -3, 3, -5, 2, 26];
console.log(maxProductSubArray(exports.arr, 4));
function hasSubtringAnagram(s, anagram) {
    var _a, _b, _c;
    var mapAnagram = new Map();
    var window = new Map();
    for (var _i = 0, anagram_1 = anagram; _i < anagram_1.length; _i++) {
        var ch = anagram_1[_i];
        mapAnagram.set(ch, ((_a = mapAnagram.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var i = 0; i < anagram.length; i++)
        window.set(s[i], ((_b = window.get(s[i])) !== null && _b !== void 0 ? _b : 0) + 1);
    var isAnagram = true;
    for (var _d = 0, _e = Array.from(mapAnagram); _d < _e.length; _d++) {
        var _f = _e[_d], key = _f[0], value = _f[1];
        if (window.get(key) !== value) {
            isAnagram = false;
            break;
        }
    }
    if (isAnagram)
        return true;
    for (var i = anagram.length; i < s.length; i++) {
        window.set(s[i], ((_c = window.get(s[i])) !== null && _c !== void 0 ? _c : 0) + 1);
        var prev = s[i - anagram.length];
        window.set(prev, window.get(prev) - 1);
        if (window.get(prev) === 0)
            window.delete(prev);
        isAnagram = true;
        for (var _g = 0, _h = Array.from(mapAnagram); _g < _h.length; _g++) {
            var _j = _h[_g], key = _j[0], value = _j[1];
            if (window.get(key) !== value) {
                isAnagram = false;
                break;
            }
        }
        if (isAnagram)
            return true;
    }
    return false;
}
console.log(hasSubtringAnagram("greyhounds", "hoy"));
