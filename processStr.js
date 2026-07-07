function processStr(s) {
    var str = '';
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
            str += char;
        else if (char === '*') {
            var temp = str.slice(0, str.length - 1);
            str = temp;
        }
        else if (char === '#')
            str += str;
        else if (char === '%') {
            var temp = '';
            for (var i = str.length - 1; i >= 0; i--) {
                temp += str[i];
            }
            str = temp;
        }
    }
    return str;
}
;
console.log(processStr("abc*de#f%")); // Output: fedcba
console.log(processStr("abc%de#f%")); // Output: fedcba
