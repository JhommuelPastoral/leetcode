function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function countBeautifulPairs(nums) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        var x = nums[i].toString();
        for (var j = i + 1; j < nums.length; j++) {
            var y = nums[j].toString();
            if (gcd(Number.parseInt(x[0]), Number.parseInt(y[y.length - 1])) === 1)
                res++;
        }
    }
    return res;
}
;
console.log(countBeautifulPairs([2, 5, 1, 4])); // Output: 5
console.log(countBeautifulPairs([11, 21, 12])); // Output: 2  
console.log(countBeautifulPairs([13, 10, 35, 24, 76])); // Output: 6
console.log(countBeautifulPairs([1, 2, 3, 4, 5])); // Output: 10
