function findMissingElements(nums) {
    var res = [];
    var min = Math.min.apply(Math, nums);
    var max = Math.max.apply(Math, nums);
    var set = new Set(nums);
    for (var i = min; i <= max; i++)
        if (!set.has(i))
            res.push(i);
    return res;
}
;
console.log(findMissingElements([3, 0, 1]));
