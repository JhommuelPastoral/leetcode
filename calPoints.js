function calPoints(operations) {
    var arr = [];
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        if (operation === 'C')
            arr.pop();
        else if (operation === 'D')
            arr.push(arr[arr.length - 1] * 2);
        else if (operation === '+') {
            var sum = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(sum);
        }
        else
            arr.push(Number.parseInt(operation));
    }
    return arr.reduce(function (acc, curr) { return acc + curr; }, 0);
}
;
console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));
