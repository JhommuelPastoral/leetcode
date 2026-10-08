function resultingString(s) {
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        var current = s[i];
        if (arr.length > 0) {
            var last = arr[arr.length - 1];
            var diff = Math.abs(last.charCodeAt(0) - current.charCodeAt(0));
            var consecutive = diff === 1 || diff === 25;
            if (consecutive) {
                arr.pop();
                continue;
            }
        }
        arr.push(current);
    }
    return arr.join('');
}
console.log(resultingString("ab")); // Output: ""
console.log(resultingString("ac")); // Output: "ac"
console.log(resultingString("abc")); // Output: "c"
