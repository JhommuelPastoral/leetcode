function minRotations(s) {
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        var from = i === 0 ? 0 : s[i - 1];
        var to = s[i];
        var diff = Math.abs((Number(from) - Number(to)));
        res += Math.min(diff, 10 - diff);
    }
    return res;
}
;
console.log(minRotations('012345987654321'));
console.log(minRotations('110010'));
console.log(minRotations('001'));
