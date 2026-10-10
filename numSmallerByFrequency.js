function s(arr, freq) {
    var _a;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var query = arr_1[_i];
        var map = new Map();
        var min = Infinity;
        var key = '';
        for (var _b = 0, query_1 = query; _b < query_1.length; _b++) {
            var ch = query_1[_b];
            map.set(ch, ((_a = map.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
            var ascii = ch.charCodeAt(0);
            if (ascii < min) {
                min = ascii;
                key = ch;
            }
        }
        freq.push(map.get(key));
    }
    return freq;
}
function numSmallerByFrequency(queries, words) {
    var queryFreq = [];
    var wordFreq = [];
    var ans = [];
    s(queries, queryFreq);
    s(words, wordFreq);
    for (var _i = 0, queryFreq_1 = queryFreq; _i < queryFreq_1.length; _i++) {
        var freq = queryFreq_1[_i];
        var count = 0;
        for (var i = 0; i < wordFreq.length; i++) {
            if (freq < wordFreq[i])
                count++;
        }
        ans.push(count);
    }
    return ans;
}
;
console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]));
