function findWords(words) {
    var map = new Map();
    var res = [];
    ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].forEach(function (row, index) {
        for (var _i = 0, row_1 = row; _i < row_1.length; _i++) {
            var char = row_1[_i];
            map.set(char, index + 1);
        }
    });
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var row = map.get(word[0].toLowerCase());
        var isSameRow = true;
        for (var _a = 0, _b = word.toLowerCase(); _a < _b.length; _a++) {
            var ch = _b[_a];
            if (map.get(ch) !== row) {
                isSameRow = false;
                break;
            }
        }
        if (isSameRow)
            res.push(word);
    }
    return res;
}
;
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // Output: ["Alaska", "Dad"]
console.log(findWords(["omk"])); // Output: []
console.log(findWords(["adsdf", "sfd"])); // Output: ["adsdf", "sfd"]
