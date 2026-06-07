function longestContinuousSubstring(s) {
    var alphabetMap = new Map();
    var res = 0;
    for (var i = 0; i < 26; i++)
        alphabetMap.set(String.fromCharCode(97 + i), i);
    for (var i = 0; i < s.length; i++) {
        var counter = 0;
        var index = alphabetMap.get(s[i]);
        for (var j = i; j < s.length; j++) {
            if (index === alphabetMap.get(s[j]))
                counter++;
            else
                break;
            index++;
        }
        res = Math.max(counter, res);
    }
    return res;
}
;
console.log(longestContinuousSubstring("abacaba"));
console.log(longestContinuousSubstring("abcde"));
console.log(longestContinuousSubstring("zab"));
