function numOfStrings(patterns, word) {
    var res = 0;
    for (var _i = 0, patterns_1 = patterns; _i < patterns_1.length; _i++) {
        var pattern = patterns_1[_i];
        if (word.includes(pattern))
            res++;
    }
    return res;
}
;
console.log(numOfStrings(["a", "abc", "bc", "d"], "abc")); // Output: 3
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb")); // Output: 2
