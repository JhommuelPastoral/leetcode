function maxDifference(s: string): number {
    const freq = new Map<string, number>();
    let maxOdd =  -Infinity;
    let minEven = Infinity;
    for(const ch of s) freq.set(ch, (freq.get(ch) ?? 0) + 1);
    for(const [key,value] of Array.from(freq)){
        if(value % 2 === 0 && value < minEven  ) minEven = value;
        if(value % 2 !== 0 && value > maxOdd) maxOdd = value;
    }
    return maxOdd- minEven;
};

console.log(maxDifference("aaabbbcc")); // 1
console.log(maxDifference("aabbcc")); // 0
console.log(maxDifference("abcde")); // 1