function minSwaps(nums) {
    var res = 0;
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        var num = nums[i];
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        map.set(nums[i], sum);
    }
    var sorted = Array.from(map.entries()).sort(function (a, b) { return a[1] - b[1] || a[0] - b[0]; });
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i][0]) {
            for (var j = 0; j < nums.length; j++) {
                if (i === j)
                    continue;
                if (nums[j] === sorted[i][0]) {
                    var temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    res++;
                }
            }
        }
    }
    console.log(sorted);
    return res;
}
;
console.log(minSwaps([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]));
console.log(minSwaps([1, 3, 5, 2, 4, 6, 7]));
