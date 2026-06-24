"use strict";
function findAnagrams(s, p) {
    var _a, _b, _c;
    const res = [];
    const map = new Map();
    for (const char of p) {
        map.set(char, ((_a = map.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    const tempMap = new Map();
    for (let i = 0; i < p.length; i++) {
        tempMap.set(s[i], ((_b = tempMap.get(s[i])) !== null && _b !== void 0 ? _b : 0) + 1);
    }
    const isSame = () => {
        if (tempMap.size !== map.size)
            return false;
        for (const [key, value] of Array.from(map)) {
            if (tempMap.get(key) !== value)
                return false;
        }
        return true;
    };
    if (isSame())
        res.push(0);
    for (let i = p.length; i < s.length; i++) {
        const left = s[i - p.length];
        const right = s[i];
        tempMap.set(left, tempMap.get(left) - 1);
        if (tempMap.get(left) === 0) {
            tempMap.delete(left);
        }
        tempMap.set(right, ((_c = tempMap.get(right)) !== null && _c !== void 0 ? _c : 0) + 1);
        if (isSame()) {
            res.push(i - p.length + 1);
        }
    }
    return res;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
console.log(findAnagrams("af", "be"));
