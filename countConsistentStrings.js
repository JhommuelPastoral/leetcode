"use strict";
function countConsistentStrings(allowed, words) {
    const allowedSet = new Set(allowed);
    let res = 0;
    for (const word of words) {
        let isAllowed = true;
        for (const ch of word) {
            if (!allowedSet.has(ch)) {
                isAllowed = false;
                break;
            }
        }
        if (isAllowed)
            res++;
    }
    return res;
}
;
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); // 2
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])); // 7
