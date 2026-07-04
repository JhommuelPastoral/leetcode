var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function resultArray(nums) {
    var arr1 = [nums[0]];
    var arr2 = [nums[1]];
    for (var i = 2; i < nums.length; i++) {
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1])
            arr1.push(nums[i]);
        else
            arr2.push(nums[i]);
    }
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
;
console.log(resultArray([1, 2, 3, 4, 5, 6])); // Output: [1,3,5,2,4,6]
console.log(resultArray([10, 20, 30, 40, 50])); // Output: [10,30,50,20,40]
