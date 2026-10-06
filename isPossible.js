function isPossible(nums) {
    var arrSet = [];
    for (var i = 0; i < nums.length; i++) {
        var isInserted = false;
        for (var j = arrSet.length - 1; j >= 0; j--) {
            var set = arrSet[j];
            if (set.has(nums[i] - 1) && !set.has(nums[i])) {
                set.add(nums[i]);
                isInserted = true;
                break;
            }
        }
        if (!isInserted) {
            arrSet.push(new Set([nums[i]]));
        }
    }
    return arrSet.every(function (set) { return set.size >= 3; });
}
console.log(isPossible([1, 2, 3, 3, 4, 5]));
console.log(isPossible([1, 2, 3, 4, 4, 5]));
console.log(isPossible([1, 2, 3, 4, 5, 6]));
