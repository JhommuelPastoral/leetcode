"use strict";
function uncommonFromSentences(s1, s2) {
    var _a, _b;
    const map1 = new Map();
    const map2 = new Map();
    const res = [];
    for (const word of s1.split(' '))
        map1.set(word, ((_a = map1.get(word)) !== null && _a !== void 0 ? _a : 0) + 1);
    for (const word of s2.split(' '))
        map2.set(word, ((_b = map2.get(word)) !== null && _b !== void 0 ? _b : 0) + 1);
    for (const [key, value] of Array.from(map1)) {
        if (value === 1) {
            if (!map2.has(key))
                res.push(key);
        }
    }
    for (const [key, value] of Array.from(map2)) {
        if (value === 1) {
            if (!map1.has(key))
                res.push(key);
        }
    }
    return res;
}
;
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana")); // ["banana"]
