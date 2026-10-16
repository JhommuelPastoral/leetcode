function vowelConsonantScore(s) {
    var vowelCounter = 0;
    var consonantCounter = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        if (isVowel(ch))
            vowelCounter++;
        else
            consonantCounter += isConsonant(ch);
    }
    if (consonantCounter > 0)
        return Math.floor(vowelCounter / consonantCounter);
    return 0;
}
;
function isConsonant(ch) {
    if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122)
        return 1;
    return 0;
}
function isVowel(ch) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u')
        return true;
    return false;
}
console.log(vowelConsonantScore('aeiou'));
console.log(vowelConsonantScore('aeioubcdfg'));
console.log(vowelConsonantScore('aeioubcdfgxyz'));
