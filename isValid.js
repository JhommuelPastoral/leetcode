function isValid(word) {
    if (word.length < 3)
        return false;
    var vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    var hasVowel = true;
    var hasConsonant = true;
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if ((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
            (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
            (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
            if (vowels.has(char))
                hasVowel = false;
            else if (!(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57))
                hasConsonant = false;
        }
        else
            return false;
    }
    return !hasVowel && !hasConsonant;
}
;
console.log(isValid("a0Ba"));
console.log(isValid("a0bb"));
console.log(isValid("a0b"));
console.log(isValid("0aB"));
console.log(isValid("a0B"));
console.log(isValid("a0"));
console.log(isValid("0a"));
