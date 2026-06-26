function lastRemaining(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    var isLeft = true;
    while (arr.length > 1) {
        var next = [];
        if (isLeft) {
            for (var i = 1; i < arr.length; i += 2) {
                next.push(arr[i]);
            }
        }
        else {
            for (var i = arr.length - 2; i >= 0; i -= 2) {
                next.unshift(arr[i]);
            }
        }
        arr = next;
        isLeft = !isLeft;
    }
    return arr[0];
}
console.log(lastRemaining(9));
console.log(lastRemaining(4));
