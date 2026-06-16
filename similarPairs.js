function similarPairs(words) {
    var arr = [];
    var res = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var str = Array.from(new Set(word.split('').sort(function (a, b) { return a.localeCompare(b); }))).join('');
        arr.push(str);
    }
    console.log(arr);
    for (var i = 0; i < words.length - 1; i++) {
        for (var j = i + 1; j < words.length; j++) {
            if (arr[i] === arr[j])
                res++;
        }
    }
    return res;
}
;
console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])); // 2
console.log(similarPairs(["aabb", "ab", "ba"])); // 3
