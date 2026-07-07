function sortVowels(s: string): string {
    const freqVowels = new Map<string,number>();
    const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);
    for(const char of s){
        if(vowels.has(char)) freqVowels.set(char, (freqVowels.get(char) ?? 0) + 1);
    } 
    const sortedVowels =  Array.from(freqVowels).sort((a:[string,number], b:[string,number]) => b[1] - a[1]);
    if(sortedVowels.length === 0) return s;

    let index:number = 0;
    let res:string = '';
    for(const char of s){
        if(vowels.has(char)){
            if(sortedVowels[index][1]){
                res += sortedVowels[index][0];
            } 
            else{
                index++;
                res += sortedVowels[index][0];
            }
            sortedVowels[index][1] -= 1;
        }
        else res += char;
    }

    return res;

};

console.log(sortVowels("leetcode")); // Output: "leotcede"
console.log(sortVowels("hello"));
console.log(sortVowels("programming"));