function numberOfSpecialChars(word: string): number {
    const set = new Set<string>(word);
    let res = 0;
    for(const value of Array.from(set)){
        if(value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122){
            if(set.has(value.toUpperCase())) res++;
        }
    }


    return res;
};

console.log(numberOfSpecialChars("aAAbbbb"));
console.log(numberOfSpecialChars("aA"));
console.log(numberOfSpecialChars("aAAbbbBc"));