function freqAlphabets(s) {
    var alphabet = new Map();
    var ans = [];
    for (var i = 1; i <= 26; i++) {
        alphabet.set(i, String.fromCharCode(96 + i));
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            ans.push(alphabet.get(Number(s[i])));
        }
        else {
            var val = Number("".concat(s[i - 2] + s[i - 1]));
            ans.pop();
            ans.pop();
            ans.push(alphabet.get(val));
        }
    }
    return ans.join('');
}
;
console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));
console.log(freqAlphabets("25#"));
