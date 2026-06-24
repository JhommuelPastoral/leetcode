"use strict";
function similarPairs(words) {
    const arr = [];
    let res = 0;
    for (const word of words) {
        const str = Array.from(new Set(word.split('').sort((a, b) => a.localeCompare(b)))).join('');
        arr.push(str);
    }
    console.log(arr);
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (arr[i] === arr[j])
                res++;
        }
    }
    return res;
}
;
console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])); // 2
console.log(similarPairs(["aabb", "ab", "ba"])); // 3
