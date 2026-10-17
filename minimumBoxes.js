function minimumBoxes(apple, capacity) {
    var totalApples = apple.reduce(function (acc, curr) { return acc + curr; }, 0);
    capacity.sort(function (a, b) { return b - a; });
    var res = 0;
    for (var _i = 0, capacity_1 = capacity; _i < capacity_1.length; _i++) {
        var size = capacity_1[_i];
        totalApples -= size;
        res++;
        if (totalApples <= 0)
            break;
    }
    return res;
}
;
console.log(minimumBoxes([3, 2, 5], [4, 3, 2])); // Output: 3
console.log(minimumBoxes([1, 2, 3], [3, 2, 1])); // Output: 2
console.log(minimumBoxes([10, 20, 30], [15, 25, 35])); // Output: 3
