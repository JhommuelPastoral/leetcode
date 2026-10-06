function findTheLongestSubstring(s: string): number {
    const map = new Map<string, number>();
    map.set("00000", -1);

    let state = [0, 0, 0, 0, 0];
    let res = 0;

    const vowels = new Map<string, number>([
        ["a", 0],
        ["e", 1],
        ["i", 2],
        ["o", 3],
        ["u", 4],
    ]);

    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            const index = vowels.get(s[i])!;
            state[index] = state[index] === 0 ? 1 : 0;
        }

        const key = state.join("");

        if (map.has(key)) {
            res = Math.max(res, i - map.get(key)!);
        } else {
            map.set(key, i);
        }
    }

    return res;
}

console.log(findTheLongestSubstring("eleetminicoworoep"));
console.log(findTheLongestSubstring("leetcodeisgreat"));