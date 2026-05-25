function letterCombinations(digits) {
    if (!digits.length)
        return [];
    var map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    var res = [''];
    for (var i = 0; i < digits.length; i++) {
        var letters = map.get(digits[i]);
        var temp = [];
        for (var j = 0; j < res.length; j++) {
            for (var k = 0; k < letters.length; k++) {
                temp.push(res[j] + letters[k]);
            }
        }
        res = temp;
    }
    return res;
}
console.log(letterCombinations('23'));
