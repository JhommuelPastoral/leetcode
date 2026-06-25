function backTrack(digits, curStr, index, res, s) {
    if (curStr.length === s.length) {
        res.push(curStr);
        return res;
    }
    for (var _i = 0, _a = digits.get(s[index]); _i < _a.length; _i++) {
        var char = _a[_i];
        backTrack(digits, curStr + char, index + 1, res, s);
    }
    return res;
}
function letterCombination(digits) {
    var res = [];
    var digitsMap = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ]);
    backTrack(digitsMap, '', 0, res, digits);
    return res;
}
;
