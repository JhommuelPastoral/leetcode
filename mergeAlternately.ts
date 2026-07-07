function mergeAlternately(word1: string, word2: string): string {
    let index = 0;
    let res:string = '';
    while(index < word1.length || index < word2.length){
        res += (word1[index] ?? '') + (word2[index] ?? '');
        index++;
    }
    return res;
};

console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"