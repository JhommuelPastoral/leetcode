function numJewelsInStones(jewels, stones) {
    var set = new Set(jewels);
    var counter = 0;
    for (var _i = 0, stones_1 = stones; _i < stones_1.length; _i++) {
        var stone = stones_1[_i];
        if (set.has(stone))
            counter++;
    }
    return counter;
}
;
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
