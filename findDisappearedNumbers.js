function findDisappearedNumbers(nums) {
    var set = new Set(nums);
    var res = [];
    for (var i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            res.push(i);
        }
    }
    return res;
}
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([1, 1, 2]));
