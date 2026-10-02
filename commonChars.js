"use strict";
function commonChars(words) {
    const maps = [];
    const commonChar = new Set();
    const res = [];
    for (const word of words) {
        const map = new Map();
        for (const ch of word) {
            map.set(ch, (map.get(ch) ?? 0) + 1);
        }
        maps.push(map);
    }
    const firstWord = Array.from(maps[0].keys());
    for (let i = 0; i < firstWord.length; i++) {
        const char = firstWord[i];
        let isCommon = true;
        for (let j = 1; j < maps.length; j++) {
            if (!maps[j].has(char)) {
                isCommon = false;
                break;
            }
        }
        if (isCommon)
            commonChar.add(char);
    }
    for (const commonCh of Array.from(commonChar)) {
        let min = Infinity;
        for (let i = 0; i < words.length; i++) {
            min = Math.min(min, maps[i].get(commonCh));
        }
        while (min !== 0) {
            res.push(commonCh);
            min--;
        }
    }
    return res;
}
;
console.log(commonChars(["bella", "label", "roller"])); // Output: ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // Output: ["c","o"]
console.log(commonChars(["abc", "def", "ghi"])); // Output: []
