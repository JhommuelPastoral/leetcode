function toggleLightBulbs(bulbs) {
    var set = new Set();
    for (var _i = 0, bulbs_1 = bulbs; _i < bulbs_1.length; _i++) {
        var bulb = bulbs_1[_i];
        if (!set.has(bulb))
            set.add(bulb);
        else {
            set.delete(bulb);
        }
    }
    return Array.from(set.values()).sort(function (a, b) { return a - b; });
}
;
console.log(toggleLightBulbs([1, 2, 3, 2, 1])); // Output: [3]
console.log(toggleLightBulbs([1, 2, 3, 4, 5])); // Output: [1,2,3,4,5]
