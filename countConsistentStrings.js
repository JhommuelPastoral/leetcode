function countConsistentStrings(allowed, words) {
    var allowedSet = new Set(allowed);
    var res = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var isAllowed = true;
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var ch = word_1[_a];
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
