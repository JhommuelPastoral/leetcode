function repeatedCharacter(s: string): string {
    const map = new Map<string,number>();

    for(const ch of s){
        map.set(ch, (map.get(ch) ?? 0) +1);
        if(map.get(ch) === 2) return ch;
    }
    return '';
};

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
console.log(repeatedCharacter("abcde"));