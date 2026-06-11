function removeDuplicates(s) {
    var _a;
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var curr = s[i];
        var lastIndex = (_a = stack[stack.length - 1]) !== null && _a !== void 0 ? _a : '';
        if (curr === lastIndex)
            stack.pop();
        else
            stack.push(curr);
    }
    return stack.join('');
}
;
console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("aabbccddeeffgg"));
