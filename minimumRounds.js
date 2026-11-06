function minimumRounds(tasks) {
    var _a;
    var freq = new Map();
    var res = 0;
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        freq.set(task, ((_a = freq.get(task)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, _c = Array.from(freq); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        while (value > 0) {
            if (value % 3 === 0) {
                value -= 3;
                res++;
            }
            else {
                value -= 2;
                res++;
            }
        }
        if (value < 0)
            return -1;
    }
    return res;
}
;
console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
console.log(minimumRounds([2, 3, 3]));
console.log(minimumRounds([2, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
