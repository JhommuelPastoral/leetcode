function maximumNumberOfStringPairs(words) {
    var map = new Map();
    var pair = 0;
    for (var i = 1; i < words.length; i++) {
        var rev = '';
        for (var j = words[i].length - 1; j >= 0; j--) {
            rev += words[i][j];
        }
        map.set(i, rev);
    }
    for (var i = 0; i < words.length; i++) {
        for (var j = i + 1; j < words.length; j++) {
            if (words[i] === map.get(j))
                pair++;
        }
    }
    return pair;
}
;
console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"])); // Output: 2
console.log(maximumNumberOfStringPairs(["ab", "ba", "cc"])); // Output: 1
console.log(maximumNumberOfStringPairs(["aa", "ab"])); // Output: 0
