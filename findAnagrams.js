"use strict";
function findAnagrams(s, p) {
    const res = [];
    const map = new Map();
    for (const char of p) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }
    const tempMap = new Map();
    for (let i = 0; i < p.length; i++) {
        tempMap.set(s[i], (tempMap.get(s[i]) ?? 0) + 1);
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
        tempMap.set(right, (tempMap.get(right) ?? 0) + 1);
        if (isSame()) {
            res.push(i - p.length + 1);
        }
    }
    return res;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
console.log(findAnagrams("af", "be"));
