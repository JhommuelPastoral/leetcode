function countOfSubstrings(word, k) {
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var res = 0;
    for (var i = 0; i < word.length; i++) {
        var consonantCounter = 0;
        var seenVowels = new Set();
        for (var j = i; j < word.length; j++) {
            if (!vowels.has(word[j]))
                consonantCounter++;
            else
                seenVowels.add(word[j]);
            if (consonantCounter === k && seenVowels.size === 5)
                res++;
            else if (consonantCounter > k)
                break;
        }
    }
    return res;
}
;
console.log(countOfSubstrings("aeioqq", 1));
console.log(countOfSubstrings("aeiou", 0));
console.log(countOfSubstrings("ieaouqqieaouqq", 1));
console.log(countOfSubstrings("iqeaouqi", 2));
