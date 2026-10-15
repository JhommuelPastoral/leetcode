function reverseParentheses(s) {
    var arr = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        if (ch !== ')')
            arr.push(ch);
        else {
            var reverse = '';
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === '(') {
                    arr.pop();
                    break;
                }
                else
                    reverse += arr.pop();
            }
            for (var _a = 0, reverse_1 = reverse; _a < reverse_1.length; _a++) {
                var char = reverse_1[_a];
                arr.push(char);
            }
        }
    }
    return arr.join('');
}
;
console.log(reverseParentheses("(abcd)")); // "dcba"
console.log(reverseParentheses("(u(love)i)")); // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")); // "apmnolkjihgfedcbq"
