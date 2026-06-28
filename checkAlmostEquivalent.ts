function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const map = new Map<string, number>();
    for (let i = 0; i < word1.length; i++) {
        map.set(word1[i], (map.get(word1[i]) ?? 0) + 1);
        map.set(word2[i], (map.get(word2[i]) ?? 0) - 1);
    }
    for (const diff of Array.from(map.values())) {
        if (Math.abs(diff) > 3) return false;
    }

    return true;
}

console.log(checkAlmostEquivalent("abcdeef", "abaaacc"));
console.log(checkAlmostEquivalent("cccddabba", "babababab"));