function canMakeArithmeticProgression(arr) {
    arr.sort(function (a, b) { return a - b; });
    var diff = Math.abs(arr[0] - arr[1]);
    for (var i = 1; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) !== diff)
            return false;
    }
    return true;
}
;
console.log(canMakeArithmeticProgression([3, 5, 1])); // Output: true
console.log(canMakeArithmeticProgression([1, 2, 4])); // Output: false
