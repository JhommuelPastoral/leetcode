var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function printVertically(s) {
    var _a;
    var arr = [];
    var res = [];
    var maxCol = 0;
    for (var _i = 0, _b = s.split(' '); _i < _b.length; _i++) {
        var word = _b[_i];
        maxCol = Math.max(word.length, maxCol);
        arr.push(__spreadArray([], Array.from(word), true));
    }
    for (var i = 0; i < maxCol; i++) {
        var temp = '';
        for (var j = 0; j < arr.length; j++) {
            var char = (_a = arr[j][i]) !== null && _a !== void 0 ? _a : " ";
            temp += char;
        }
        res.push(temp.trimEnd());
    }
    return res;
}
;
console.log(printVertically("HOW ARE YOU"));
console.log(printVertically("TO BE OR NOT TO BE"));
