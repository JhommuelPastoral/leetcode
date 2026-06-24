"use strict";
function longestContinuousSubstring(s) {
    const alphabetMap = new Map();
    let res = 0;
    for (let i = 0; i < 26; i++)
        alphabetMap.set(String.fromCharCode(97 + i), i);
    for (let i = 0; i < s.length; i++) {
        let counter = 0;
        let index = alphabetMap.get(s[i]);
        for (let j = i; j < s.length; j++) {
            if (index === alphabetMap.get(s[j]))
                counter++;
            else
                break;
            index++;
        }
        res = Math.max(counter, res);
    }
    return res;
}
;
console.log(longestContinuousSubstring("abacaba"));
console.log(longestContinuousSubstring("abcde"));
console.log(longestContinuousSubstring("zab"));
