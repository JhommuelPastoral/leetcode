function clearDigits(s) {
    var arr = Array.from(s);
    for (var i = 0; i < s.length; i++) {
        if (Number.isInteger(Number.parseInt(s[i]))) {
            arr[i] = null;
            for (var j = i - 1; j >= 0; j--) {
                if (!Number.isInteger(Number.parseInt(arr[j])) && arr[j] !== null) {
                    arr[j] = null;
                    break;
                }
            }
        }
    }
    return arr.length === 0 ? '' : arr.filter(function (val) { return val !== null; }).join('');
}
;
console.log(clearDigits("a1b2c3d4e5f6g7h8i9j0"));
console.log(clearDigits("leetcode"));
console.log(clearDigits("1234567890"));
