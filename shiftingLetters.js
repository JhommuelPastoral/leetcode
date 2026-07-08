function shiftingLetters(s, shifts) {
    var index = 0;
    var arr = s.split('');
    while (index < s.length) {
        for (var i = 0; i < index + 1; i++) {
            var sum = arr[i].charCodeAt(0) + shifts[index];
            if (sum > 122) {
                arr[i] = String.fromCharCode(((sum - 97) % 26) + 97);
            }
            else {
                arr[i] = String.fromCharCode(sum);
            }
        }
        index++;
    }
    return arr.join('');
}
;
console.log(shiftingLetters("abc", [3, 5, 9])); // "rpl"
console.log(shiftingLetters("aaa", [1, 2, 3])); // "gfd"
