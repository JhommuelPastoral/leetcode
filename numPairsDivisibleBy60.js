function numPairsDivisibleBy60(time) {
    var res = 0;
    for (var i = 0; i < time.length - 1; i++) {
        for (var j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0)
                res++;
        }
    }
    return res;
}
;
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40])); // 3
console.log(numPairsDivisibleBy60([60, 60, 60])); // 3
console.log(numPairsDivisibleBy60([60, 60, 60, 60])); // 6
