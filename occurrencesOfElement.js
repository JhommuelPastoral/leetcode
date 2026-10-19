function occurrencesOfElement(nums, queries, x) {
    var index = [];
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === x)
            index.push(i);
    }
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var query = queries_1[_i];
        if (query - 1 < index.length)
            res.push(index[query - 1]);
        else
            res.push(-1);
    }
    return res;
}
;
console.log(occurrencesOfElement([1, 2, 3, 4, 5], [1, 3, 5, 2, 4], 5));
console.log(occurrencesOfElement([1, 2, 3, 4, 5], [1, 3, 5, 2, 4], 1));
console.log(occurrencesOfElement([1, 2, 3, 4, 5], [1, 3, 5, 2, 4], 6));
