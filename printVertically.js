"use strict";
function printVertically(s) {
    var _a;
    const arr = [];
    const res = [];
    let maxCol = 0;
    for (const word of s.split(' ')) {
        maxCol = Math.max(word.length, maxCol);
        arr.push([...Array.from(word)]);
    }
    for (let i = 0; i < maxCol; i++) {
        let temp = '';
        for (let j = 0; j < arr.length; j++) {
            const char = (_a = arr[j][i]) !== null && _a !== void 0 ? _a : " ";
            temp += char;
        }
        res.push(temp.trimEnd());
    }
    return res;
}
;
console.log(printVertically("HOW ARE YOU"));
console.log(printVertically("TO BE OR NOT TO BE"));
