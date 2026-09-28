function removeAnagrams(words) {
    var deletedSet = new Set();
    var _loop_1 = function (i) {
        var wordMap = new Map();
        words[i].split('').forEach(function (val) { var _a; return wordMap.set(val, ((_a = wordMap.get(val)) !== null && _a !== void 0 ? _a : 0) + 1); });
        var nextWord = words[i + 1];
        if (words[i].length !== nextWord.length)
            return "continue";
        for (var _i = 0, nextWord_1 = nextWord; _i < nextWord_1.length; _i++) {
            var char = nextWord_1[_i];
            if (wordMap.get(char) === 1)
                wordMap.delete(char);
            else if (wordMap.get(char) > 1)
                wordMap.set(char, wordMap.get(char) - 1);
            else
                break;
        }
        if (!wordMap.size)
            deletedSet.add(i + 1);
    };
    for (var i = 0; i < words.length - 1; i++) {
        _loop_1(i);
    }
    return words.filter(function (val, index) { if (!deletedSet.has(index))
        return val; });
}
;
console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"])); // Output: ["abba","cd"]
console.log(removeAnagrams(["a", "b", "c", "d", "e"])); // Output: ["a","b","c","d","e"]
