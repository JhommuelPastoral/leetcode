function originalDigits(s) {
    var _a;
    var map = new Map();
    var res = '';
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        map.set(ch, ((_a = map.get(ch)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    var order = ['z', 'w', 'u', 'x', 'g', 'v', 'n', 'h'];
    for (var _b = 0, order_1 = order; _b < order_1.length; _b++) {
        var ch = order_1[_b];
        while (map.get(ch)) {
            res += getPossibility(ch, map);
        }
    }
    return res.split('').sort(function (a, b) { return a.charCodeAt(0) - b.charCodeAt(0); }).join('');
}
;
function getPossibility(ch, map) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    switch (ch) {
        case 'z':
            map.set('z', map.get('z') - 1);
            map.set('e', map.get('e') - 1);
            map.set('r', map.get('r') - 1);
            map.set('o', map.get('o') - 1);
            return "0";
        case 'w':
            map.set('t', map.get('t') - 1);
            map.set('w', map.get('w') - 1);
            map.set('o', map.get('o') - 1);
            return "2";
        case 'u':
            map.set('f', map.get('f') - 1);
            map.set('o', map.get('o') - 1);
            map.set('u', map.get('u') - 1);
            map.set('r', map.get('r') - 1);
            return "4";
        case 'x':
            map.set('s', map.get('s') - 1);
            map.set('i', map.get('i') - 1);
            map.set('x', map.get('x') - 1);
            return "6";
        case 'g':
            map.set('e', map.get('e') - 1);
            map.set('i', map.get('i') - 1);
            map.set('g', map.get('g') - 1);
            map.set('h', map.get('h') - 1);
            map.set('t', map.get('t') - 1);
            return "8";
        case 'v':
            var isFive = ((_a = map.get('f')) !== null && _a !== void 0 ? _a : 0) > 0 &&
                ((_b = map.get('i')) !== null && _b !== void 0 ? _b : 0) > 0 &&
                ((_c = map.get('v')) !== null && _c !== void 0 ? _c : 0) > 0 &&
                ((_d = map.get('e')) !== null && _d !== void 0 ? _d : 0) > 0;
            var isSeven = ((_e = map.get('s')) !== null && _e !== void 0 ? _e : 0) > 0 &&
                ((_f = map.get('e')) !== null && _f !== void 0 ? _f : 0) >= 2 &&
                ((_g = map.get('v')) !== null && _g !== void 0 ? _g : 0) > 0 &&
                ((_h = map.get('n')) !== null && _h !== void 0 ? _h : 0) > 0;
            if (isFive && isSeven) {
                if (!map.get('x')) {
                    map.set('s', map.get('s') - 1);
                    map.set('e', map.get('e') - 2);
                    map.set('v', map.get('v') - 1);
                    map.set('n', map.get('n') - 1);
                    return '7';
                }
                else {
                    map.set('f', map.get('f') - 1);
                    map.set('i', map.get('i') - 1);
                    map.set('v', map.get('v') - 1);
                    map.set('e', map.get('e') - 1);
                    return '5';
                }
            }
            else if (!isFive && isSeven) {
                map.set('s', map.get('s') - 1);
                map.set('e', map.get('e') - 2);
                map.set('v', map.get('v') - 1);
                map.set('n', map.get('n') - 1);
                return '7';
            }
            else if (isFive && !isSeven) {
                map.set('f', map.get('f') - 1);
                map.set('i', map.get('i') - 1);
                map.set('v', map.get('v') - 1);
                map.set('e', map.get('e') - 1);
                return '5';
            }
            return '';
        case 'n':
            var isOne = ((_j = map.get('o')) !== null && _j !== void 0 ? _j : 0) > 0 &&
                ((_k = map.get('n')) !== null && _k !== void 0 ? _k : 0) > 0 &&
                ((_l = map.get('e')) !== null && _l !== void 0 ? _l : 0) > 0;
            var isNine = ((_m = map.get('n')) !== null && _m !== void 0 ? _m : 0) >= 2 &&
                ((_o = map.get('i')) !== null && _o !== void 0 ? _o : 0) > 0 &&
                ((_p = map.get('e')) !== null && _p !== void 0 ? _p : 0) > 0;
            if (isOne && isNine) {
                if (!map.get('z') && !map.get('u')) {
                    map.set('o', map.get('o') - 1);
                    map.set('n', map.get('n') - 1);
                    map.set('e', map.get('e') - 1);
                    return '1';
                }
                else {
                    map.set('n', map.get('n') - 2);
                    map.set('i', map.get('i') - 1);
                    map.set('e', map.get('e') - 1);
                    return '9';
                }
            }
            else if (!isOne && isNine) {
                map.set('n', map.get('n') - 2);
                map.set('i', map.get('i') - 1);
                map.set('e', map.get('e') - 1);
                return '9';
            }
            else if (isOne && !isNine) {
                map.set('o', map.get('o') - 1);
                map.set('n', map.get('n') - 1);
                map.set('e', map.get('e') - 1);
                return '1';
            }
            return '';
        case 'h':
            if (map.get('g')) {
                map.set('e', map.get('e') - 1);
                map.set('i', map.get('i') - 1);
                map.set('g', map.get('g') - 1);
                map.set('h', map.get('h') - 1);
                map.set('t', map.get('t') - 1);
                return "8";
            }
            else {
                map.set('t', map.get('t') - 1);
                map.set('h', map.get('h') - 1);
                map.set('r', map.get('r') - 1);
                map.set('e', map.get('e') - 2);
                return "3";
            }
        default: return "";
    }
}
console.log(originalDigits("owoztneoer"));
console.log(originalDigits("fviefuro"));
