function lengthAfterTransformations(s, t) {
    var arr = s.split('');
    var map = new Map();
    for (var i = 0; i < 26; i++)
        map.set(String.fromCharCode(97 + i), 97 + i);
    while (t > 0) {
        var tempStr = '';
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var ch = s_1[_i];
            if (ch === 'z')
                tempStr += 'ab';
            else
                tempStr += String.fromCharCode(map.get(ch) + 1);
        }
        s = tempStr;
        t--;
    }
    console.log(s);
    return s.length;
}
;
console.log(lengthAfterTransformations("abcz", 1)); // Output: 6
console.log(lengthAfterTransformations("a", 2)); // Output: 4
console.log(lengthAfterTransformations("xyz", 3)); // Output: 12
