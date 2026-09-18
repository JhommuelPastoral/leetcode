function numOfStrings(patterns: string[], word: string): number {
    let res = 0;
    for(const pattern of patterns){
        if(word.includes(pattern)) res++;
    }


    return res;
};

console.log(numOfStrings(["a","abc","bc","d"], "abc")); // Output: 3
console.log(numOfStrings(["a","b","c"], "aaaaabbbbb")); // Output: 2