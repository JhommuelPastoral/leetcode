function countGoodSubstrings(s) {
    var res = 0;
    for (var i = 0; i < s.length - 2; i++) {
        if (s[i] === s[i + 1] || s[i] === s[i + 2] || s[i + 1] === s[i + 2])
            continue;
        else
            res++;
    }
    return res;
}
;
console.log(countGoodSubstrings('xyzzaz')); // Output: 1
console.log(countGoodSubstrings('aababcabc')); // Output: 4
