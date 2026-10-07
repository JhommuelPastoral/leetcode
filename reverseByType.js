function reverseByType(s) {
    var _a, _b;
    var arr = s.split('');
    var left = 0;
    var right = arr.length - 1;
    // Reverse lowercase letters
    while (left < right) {
        var isLeftLetter = arr[left].charCodeAt(0) >= 97 &&
            arr[left].charCodeAt(0) <= 122;
        var isRightLetter = arr[right].charCodeAt(0) >= 97 &&
            arr[right].charCodeAt(0) <= 122;
        if (!isLeftLetter) {
            left++;
        }
        else if (!isRightLetter) {
            right--;
        }
        else {
            _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
            left++;
            right--;
        }
    }
    // Reverse special characters
    left = 0;
    right = arr.length - 1;
    while (left < right) {
        var isLeftSpecial = arr[left].charCodeAt(0) < 97 ||
            arr[left].charCodeAt(0) > 122;
        var isRightSpecial = arr[right].charCodeAt(0) < 97 ||
            arr[right].charCodeAt(0) > 122;
        if (!isLeftSpecial) {
            left++;
        }
        else if (!isRightSpecial) {
            right--;
        }
        else {
            _b = [arr[right], arr[left]], arr[left] = _b[0], arr[right] = _b[1];
            left++;
            right--;
        }
    }
    return arr.join('');
}
console.log(reverseByType("a-bC-dEf-ghIj"));
console.log(reverseByType("Test1ng-Leet=code-Q!"));
