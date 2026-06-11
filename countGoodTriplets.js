function countGoodTriplets(arr, a, b, c) {
    var res = 0;
    for (var i = 0; i <= arr.length - 3; i++) {
        for (var j = i + 1; j <= arr.length - 2; j++) {
            if (Math.abs(arr[i] - arr[j]) > a)
                continue;
            for (var k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c)
                    res++;
            }
        }
    }
    return res;
}
;
console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));
console.log(countGoodTriplets([7, 3, 4, 5, 6], 2, 3, 1));
