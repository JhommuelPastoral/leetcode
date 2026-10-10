function numSmallerByFrequency(queries, words) {
    var _a, _b;
    var queryFreq = [];
    var wordFreq = [];
    var ans = [];
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var query = queries_1[_i];
        var map = new Map();
        var min = Infinity;
        var key = '';
        for (var _c = 0, query_1 = query; _c < query_1.length; _c++) {
            var ch = query_1[_c];
            map.set(ch, ((_a = map.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
            var ascii = ch.charCodeAt(0);
            if (ascii < min) {
                min = ascii;
                key = ch;
            }
        }
        queryFreq.push(map.get(key));
    }
    for (var _d = 0, words_1 = words; _d < words_1.length; _d++) {
        var word = words_1[_d];
        var map = new Map();
        var min = Infinity;
        var key = '';
        for (var _e = 0, word_1 = word; _e < word_1.length; _e++) {
            var ch = word_1[_e];
            map.set(ch, ((_b = map.get(ch)) !== null && _b !== void 0 ? _b : 0) + 1);
            var ascii = ch.charCodeAt(0);
            if (ascii < min) {
                min = ascii;
                key = ch;
            }
        }
        wordFreq.push(map.get(key));
    }
    for (var _f = 0, queryFreq_1 = queryFreq; _f < queryFreq_1.length; _f++) {
        var freq = queryFreq_1[_f];
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
