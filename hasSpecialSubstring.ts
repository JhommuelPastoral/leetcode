function hasSpecialSubstring(s: string, k: number): boolean {
    for (let i = 0; i <= s.length - k; i++) {
        const ch = s[i];
        let same = true;

        for (let j = i + 1; j < i + k; j++) {
            if (s[j] !== ch) {
                same = false;
                break;
            }
        }

        if (!same) continue;

        const leftOk = i === 0 || s[i - 1] !== ch;
        const rightOk = i + k === s.length || s[i + k] !== ch;

        if (leftOk && rightOk) return true;
    }

    return false;
}

console.log(hasSpecialSubstring("aaabbb", 3)); // true
console.log(hasSpecialSubstring("aaabbb", 4)); // false