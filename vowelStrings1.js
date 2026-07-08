function vowelStrings(words, queries) {
    var result = [];
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var _a = queries_1[_i], start = _a[0], end = _a[1];
        var counter = 0;
        while (start < end + 1) {
            if (vowels.has(words[start][0]) && vowels.has(words[start][words[start].length - 1]))
                counter++;
            start++;
        }
        result.push(counter);
    }
    return result;
}
;
console.log(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]])); // [2,3,0]
console.log(vowelStrings(["a", "e", "i"], [[0, 2], [0, 1], [2, 2]])); // [3,2,1]
