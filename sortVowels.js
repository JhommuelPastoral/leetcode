function sortVowels(s) {
    var _a;
    var freqVowels = new Map();
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (vowels.has(char))
            freqVowels.set(char, ((_a = freqVowels.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var sortedVowels = Array.from(freqVowels).sort(function (a, b) { return b[1] - a[1]; });
    if (sortedVowels.length === 0)
        return s;
    var index = 0;
    var res = '';
    for (var _b = 0, s_2 = s; _b < s_2.length; _b++) {
        var char = s_2[_b];
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
