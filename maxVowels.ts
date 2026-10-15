function maxVowels(s: string, k: number): number {
    const vowels = new Set<string>(['a','e','i', 'o', 'u']);
    let counter = 0;
    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])) counter++;
    }
    let res = counter;
    let left = 0;
    for(let i = k; i < s.length; i++){
        if(vowels.has(s[left])) counter--;
        if(vowels.has(s[i])) counter++;
        res = Math.max(res,counter);
        left++;
    }
    return res;
};


console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
console.log(maxVowels("rhythms", 4)); // 0