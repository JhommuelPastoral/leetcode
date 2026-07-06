function compressedString(word) {
    var res = "";
    var arr = [];
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var ch = word_1[_i];
        if (arr[arr.length - 1] && arr[arr.length - 1][0] === ch) {
            arr[arr.length - 1][1] += 1;
        }
        else {
            arr.push([ch, 1]);
        }
    }
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var _b = arr_1[_a], key = _b[0], value = _b[1];
        if (value > 9) {
            while (value > 9) {
                res += "9".concat(key);
                value -= 9;
            }
            if (value > 0)
                res += value.toString() + key;
        }
        else
            res += value.toString() + key;
    }
    return res;
}
;
