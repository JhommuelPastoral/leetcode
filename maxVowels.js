function maxVowels(s, k) {
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var counter = 0;
    for (var i = 0; i < k; i++) {
        if (vowels.has(s[i]))
            counter++;
    }
    var res = counter;
    var left = 0;
    for (var i = k; i < s.length; i++) {
        if (vowels.has(s[left]))
            counter--;
        if (vowels.has(s[i]))
            counter++;
        res = Math.max(res, counter);
        left++;
    }
    return res;
}
;
console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
console.log(maxVowels("rhythms", 4)); // 0
