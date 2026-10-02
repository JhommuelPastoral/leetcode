"use strict";
function medianSlidingWindow(nums, k) {
    const res = [];
    const arr = nums.slice(0, k).sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - k; i++) {
        if (k % 2 !== 0) {
            res.push(arr[Math.floor(k / 2)]);
        }
        else {
            const median = (arr[Math.floor(k / 2)] + arr[Math.floor(k / 2) - 1]) / 2;
            res.push(median);
        }
        // No next window
        if (i === nums.length - k)
            break;
        // Remove outgoing number
        const outgoing = nums[i];
        const removeIndex = arr.indexOf(outgoing);
        arr.splice(removeIndex, 1);
        // Add incoming number
        const incoming = nums[i + k];
        let left = 0;
        let right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
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
