function divideString(s, k, fill) {
    var str = '';
    var res = [];
    for (var i = 0; i < s.length; i++) {
        if (str.length === k) {
            res.push(str);
            str = '';
        }
        str += s[i];
    }
    if (str.length === k)
        res.push(str);
    else {
        for (var i = str.length; i < k; i++)
            str += fill;
        res.push(str);
    }
    return res;
}
;
console.log(divideString("abcdefghi", 3, "x")); // Output: ["abc", "def", "ghi"]
console.log(divideString("abcdefghij", 3, "x")); // Output: ["abc", "def", "ghi", "jxx"]
console.log(divideString("abcdefghij", 4, "x")); // Output: ["abcd", "efgh", "ijxx"]
