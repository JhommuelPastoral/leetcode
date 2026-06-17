function isAcronym(words, s) {
    if (words.length !== s.length)
        return false;
    for (var i = 0; i < words.length; i++) {
        if (words[i][0] !== s[i])
            return false;
    }
    return true;
}
;
console.log(isAcronym(["alice", "bob", "charlie"], "abc")); // Output: true
console.log(isAcronym(["alice", "bob", "charlie"], "abd")); // Output: false
