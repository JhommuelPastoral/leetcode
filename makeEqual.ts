function makeEqual(words: string[]): boolean {
    if(words.length === 1) return true;
    const map = new Map<string,number>();
    for(const word of words){
        for(const ch of word) map.set(ch, (map.get(ch) ?? 0 )+ 1);
    }
    for(const [key, value] of Array.from(map)){
        if(value % words.length !== 0) return false;
    }

    return true;
};


console.log(makeEqual(["abc","aabc","bc"])); // Output: true
console.log(makeEqual(["ab","a"])); // Output: false
console.log(makeEqual(["abc","def","ghi"])); // Output: false
console.log(makeEqual(["a","a","a"])); // Output: true