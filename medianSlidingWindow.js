function medianSlidingWindow(nums, k) {
    var res = [];
    var arr = nums.slice(0, k).sort(function (a, b) { return a - b; });
    for (var i = 0; i <= nums.length - k; i++) {
        if (k % 2 !== 0) {
            res.push(arr[Math.floor(k / 2)]);
        }
        else {
            var median = (arr[Math.floor(k / 2)] + arr[Math.floor(k / 2) - 1]) / 2;
            res.push(median);
        }
        // No next window
        if (i === nums.length - k)
            break;
        // Remove outgoing number
        var outgoing = nums[i];
        var removeIndex = arr.indexOf(outgoing);
        arr.splice(removeIndex, 1);
        // Add incoming number
        var incoming = nums[i + k];
        var left = 0;
        var right = arr.length;
        while (left < right) {
            var mid = Math.floor((left + right) / 2);
            if (arr[mid] < incoming) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        arr.splice(left, 0, incoming);
    }
    return res;
}
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [1,-1,-1,3,5,6]
console.log(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3)); // Output: [2,3,3,3,2,3,2]
