function findTheLongestSubstring(s) {
    var map = new Map();
    map.set("00000", -1);
    var state = [0, 0, 0, 0, 0];
    var res = 0;
    var vowels = new Map([
        ["a", 0],
        ["e", 1],
        ["i", 2],
        ["o", 3],
        ["u", 4],
    ]);
    for (var i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            var index = vowels.get(s[i]);
            state[index] = state[index] === 0 ? 1 : 0;
        }
        var key = state.join("");
        if (map.has(key)) {
            res = Math.max(res, i - map.get(key));
        }
        else {
            map.set(key, i);
        }
    }
    return res;
}
console.log(findTheLongestSubstring("eleetminicoworoep"));
console.log(findTheLongestSubstring("leetcodeisgreat"));
