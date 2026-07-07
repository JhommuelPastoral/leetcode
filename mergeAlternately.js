function mergeAlternately(word1, word2) {
    var _a, _b;
    var index = 0;
    var res = '';
    while (index < word1.length || index < word2.length) {
        res += ((_a = word1[index]) !== null && _a !== void 0 ? _a : '') + ((_b = word2[index]) !== null && _b !== void 0 ? _b : '');
        index++;
    }
    return res;
}
;
console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
