function findWinners(matches) {
    var _a;
    var res = [[], []];
    var players = new Set();
    var loseMap = new Map();
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
        var _b = matches_1[_i], win = _b[0], lose = _b[1];
        players.add(win);
        players.add(lose);
        loseMap.set(lose, ((_a = loseMap.get(lose)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _c = 0, _d = Array.from(players); _c < _d.length; _c++) {
        var player = _d[_c];
        if (!loseMap.has(player)) {
            res[0].push(player);
        }
        else if (loseMap.get(player) === 1) {
            res[1].push(player);
        }
    }
    res[0].sort(function (a, b) { return a - b; });
    res[1].sort(function (a, b) { return a - b; });
    return res;
}
console.log(findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]));
console.log(findWinners([[2, 3], [1, 3], [5, 4], [6, 4]]));
