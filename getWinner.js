function getWinner(arr, k) {
    var _a;
    var winner = {
        id: arr[0],
        counter: 0
    };
    if (k > arr.length)
        return Math.max.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    while (winner.counter !== k) {
        if (arr[0] > arr[1])
            _a = [arr[1], arr[0]], arr[0] = _a[0], arr[1] = _a[1];
        arr.push(arr.shift());
        if (arr[0] === max)
            return max;
        if (arr[0] === winner.id)
            winner.counter++;
        else {
            winner.id = arr[0];
            winner.counter = 1;
        }
    }
    return winner.id;
}
;
console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2));
console.log(getWinner([1, 2, 3, 4, 5], 2));
console.log(getWinner([1, 2, 3, 4, 5], 4));
