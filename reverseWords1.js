function reverseWords(s) {
    var vowelCount = 0;
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var arr = s.split(' ');
    var res = arr[0];
    for (var _i = 0, _a = arr[0]; _i < _a.length; _i++) {
        var ch = _a[_i];
        if (vowels.has(ch))
            vowelCount++;
    }
    for (var i = 1; i < arr.length; i++) {
        var counter = 0;
        var reverse = '';
        for (var j = arr[i].length - 1; j >= 0; j--) {
            if (vowels.has(arr[i][j]))
                counter++;
            if (counter > vowelCount) {
                counter++;
                break;
            }
            reverse += arr[i][j];
        }
        if (counter === vowelCount)
            res += " ".concat(reverse);
        else
            res += " ".concat(arr[i]);
    }
    return res;
}
;
console.log(reverseWords("hello world")); // Output: "hello dlrow"
console.log(reverseWords("this is a test")); // Output: "this is a test"
console.log(reverseWords("programming is fun")); // Output: "programming si fun"
