"use strict";
function maxFreqSum(s) {
    const map = new Map();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowel = 0;
    let maxConsonant = 0;
    for (const char of s)
        map.set(char, (map.get(char) ?? 0) + 1);
    for (const [key, value] of Array.from(map)) {
        if (vowels.has(key) && value > maxVowel)
            maxVowel = value;
        else if (value > maxConsonant && !vowels.has(key))
            maxConsonant = value;
    }
    return maxConsonant + maxVowel;
}
;
console.log(maxFreqSum("abca")); // Output: 3
console.log(maxFreqSum("abcde")); // Output: 2
