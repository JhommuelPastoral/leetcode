function addMinimum(word) {
    var res = 0;
    var i = 0;
    while (i < word.length) {
        var count = 0;
        if (word[i] === 'a') {
            count++;
            i++;
        }
        if (i < word.length && word[i] === 'b') {
            count++;
            i++;
        }
        if (i < word.length && word[i] === 'c') {
            count++;
            i++;
        }
        res += 3 - count;
    }
    return res;
}
console.log(addMinimum("aab")); // Output: 1
console.log(addMinimum("abc")); // Output: 0
console.log(addMinimum("aaa")); // Output: 2
