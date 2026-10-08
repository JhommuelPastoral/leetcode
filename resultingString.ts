function resultingString(s: string): string {
    const arr: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (arr.length > 0) {
            const last = arr[arr.length - 1];
            const diff = Math.abs(
                last.charCodeAt(0) - current.charCodeAt(0)
            );
            const consecutive = diff === 1 || diff === 25;
            if (consecutive) {
                arr.pop();
                continue;
            }
        }
        arr.push(current);
    }

    return arr.join('');
}
console.log(resultingString("ab")); // Output: ""
console.log(resultingString("ac")); // Output: "ac"
console.log(resultingString("abc")); // Output: "c"