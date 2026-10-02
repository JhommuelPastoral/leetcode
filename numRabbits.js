function numRabbits(answers) {
    var _a;
    var map = new Map();
    var res = 0;
    for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
        var ans = answers_1[_i];
        map.set(ans, ((_a = map.get(ans)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, _c = Array.from(map); _b < _c.length; _b++) {
        var _d = _c[_b], ans = _d[0], value = _d[1];
        var groupSize = ans + 1;
        var groups = Math.ceil(value / groupSize);
        res += groups * groupSize;
    }
    return res;
}
console.log(numRabbits([1, 1, 2])); // Output: 5
console.log(numRabbits([10, 10, 10])); // Output: 11
console.log(numRabbits([0, 0, 1, 1, 1])); // Output: 6
