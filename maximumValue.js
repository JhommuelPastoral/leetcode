function maximumValue(strs) {
    var max = 0;
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var word = strs_1[_i];
        var temp = '';
        var isAllDigit = true;
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var char = word_1[_a];
            if (Number.isInteger(Number.parseInt(char)))
                temp += char;
            else {
                isAllDigit = false;
                break;
            }
        }
        if (!isAllDigit)
            max = Math.max(max, word.length);
        else
            max = Math.max(max, Number.parseInt(temp));
    }
    return max;
}
;
console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["1", "01", "001", "0001"]));
