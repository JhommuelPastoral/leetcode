function canBeEqual(target, arr) {
    target.sort(function (a, b) { return a - b; });
    arr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < target.length; i++) {
        if (target[i] !== arr[i])
            return false;
    }
    return true;
}
;
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
