function findFloor(arr, target) {
    var left = 0, right = arr.length - 1;
    var floor = -1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target)
            return mid;
        if (arr[mid] < target) {
            floor = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return left - 1;
}
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5));
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 11));
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));
console.log(findFloor([3, 3, 4, 5, 6, 6, 8], 4));
