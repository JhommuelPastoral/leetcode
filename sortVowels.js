"use strict";
function sortVowels(s) {
    const freqVowels = new Map();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (const char of s) {
        if (vowels.has(char))
            freqVowels.set(char, (freqVowels.get(char) ?? 0) + 1);
    }
    const sortedVowels = Array.from(freqVowels).sort((a, b) => b[1] - a[1]);
    if (sortedVowels.length === 0)
        return s;
    let index = 0;
    let res = '';
    for (const char of s) {
        if (vowels.has(char)) {
            if (sortedVowels[index][1]) {
                res += sortedVowels[index][0];
            }
            else {
                index++;
                res += sortedVowels[index][0];
            }
            sortedVowels[index][1] -= 1;
        }
        else
            res += char;
    }
    return res;
}
;
console.log(sortVowels("leetcode")); // Output: "leotcede"
console.log(sortVowels("hello"));
console.log(sortVowels("programming"));
