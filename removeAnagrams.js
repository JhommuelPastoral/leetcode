"use strict";
function removeAnagrams(words) {
    const deletedSet = new Set();
    for (let i = 0; i < words.length - 1; i++) {
        const wordMap = new Map();
        words[i].split('').forEach((val) => wordMap.set(val, (wordMap.get(val) ?? 0) + 1));
        const nextWord = words[i + 1];
        if (words[i].length !== nextWord.length)
            continue;
        for (const char of nextWord) {
            if (wordMap.get(char) === 1)
                wordMap.delete(char);
            else if (wordMap.get(char) > 1)
                wordMap.set(char, wordMap.get(char) - 1);
            else
                break;
        }
        if (!wordMap.size)
            deletedSet.add(i + 1);
    }
    return words.filter((val, index) => { if (!deletedSet.has(index))
        return val; });
}
;
console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"])); // Output: ["abba","cd"]
console.log(removeAnagrams(["a", "b", "c", "d", "e"])); // Output: ["a","b","c","d","e"]
