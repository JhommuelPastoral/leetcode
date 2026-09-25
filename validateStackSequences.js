function validateStackSequences(pushed, popped) {
    var stack = [];
    for (var _i = 0, pushed_1 = pushed; _i < pushed_1.length; _i++) {
        var val = pushed_1[_i];
        stack.push(val);
        while (true) {
            var pop = popped[0];
            var stackVal = stack[stack.length - 1];
            if (stackVal !== pop || stack.length === 0)
                break;
            else {
                stack.pop();
                popped.shift();
            }
        }
    }
    return stack.length === 0 && popped.length === 0;
}
;
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // Output: true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // Output: false
console.log(validateStackSequences([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // Output: true
