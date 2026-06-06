function countOfSubstrings(word: string, k: number): number {

    const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);
    let res = 0;
    for(let i = 0; i < word.length; i++){
        let consonantCounter = 0;
        const seenVowels = new Set();
        for(let j = i; j < word.length; j++){
            if(!vowels.has(word[j])) consonantCounter++;
            else seenVowels.add(word[j]);
            if(consonantCounter === k && seenVowels.size === 5) res++;
            else if(consonantCounter >  k ) break;
        }
    }
    return res;
};

console.log(countOfSubstrings("aeioqq", 1));
console.log(countOfSubstrings("aeiou", 0));
console.log(countOfSubstrings("ieaouqqieaouqq", 1));
console.log(countOfSubstrings("iqeaouqi", 2));