function vowelStrings(words, left, right) {
    var res = 0;
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (var i = left; i <= right; i++) {
        if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1]))
            res++;
    }
    return res;
}
;
console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey", "aeo", "mu"], 0, 2));
