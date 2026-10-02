function lastNonEmptyString(s: string): string {
    const map = new Map<string, number>();
    for (const char of s) map.set(char, (map.get(char) ?? 0) + 1);
    const max = Math.max(...Array.from(map.values()));
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.get(char) === max) {
            if (s.lastIndexOf(char) === i) {
                res += char;
            }
        }
    }

    return res;
}

console.log(lastNonEmptyString('abca')); // Output: 'a'
console.log(lastNonEmptyString('abcb')); // Output: 'b'
console.log(lastNonEmptyString('abcabc')); // Output: 'c'