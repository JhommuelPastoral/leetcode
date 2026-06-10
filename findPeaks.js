function findPeaks(mountain) {
    var res = [];
    for (var i = 1; i < mountain.length - 1; i++) {
        if (mountain[i - 1] < mountain[i] && mountain[i] > mountain[i + 1])
            res.push(i);
    }
    return res;
}
;
console.log(findPeaks([0, 1, 0])); // [1]
console.log(findPeaks([0, 2, 1, 0])); // [1]
console.log(findPeaks([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // []
