"use strict";
function maxArea(height) {
    let maxArea = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        const currArea = Math.min(height[left], height[right]) * (right - left);
        if (height[left] > height[right])
            right--;
        else
            left++;
        maxArea = Math.max(currArea, maxArea);
    }
    return maxArea;
}
;
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
