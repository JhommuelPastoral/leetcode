function uncommonFromSentences(s1: string, s2: string): string[] {
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();
    const res:string[] = [];
    for(const word of s1.split(' ')) map1.set(word, (map1.get(word) ?? 0 ) + 1);
    for(const word of s2.split(' ')) map2.set(word, (map2.get(word) ?? 0 ) + 1);
    for(const [key,value] of Array.from(map1)){
        if(value === 1){
            if(!map2.has(key)) res.push(key);
        }
    }
    for(const [key,value] of Array.from(map2)){
        if(value === 1){
            if(!map1.has(key)) res.push(key);
        }
    }

    return res;  
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana")); // ["banana"]