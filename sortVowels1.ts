function sortVowels(s: string): string {
    const vowels = new Set<string>(['A', 'E', 'I', 'O', 'U', 'a','e','i','o','u']);
    const arr:number[] = [];
    let res = '';
    for(const ch of s){
        if(vowels.has(ch)) arr.push(ch.charCodeAt(0));
    }
    arr.sort((a:number, b:number) => a - b);
    let counter = 0;
    for(const ch of s){
        if(vowels.has(ch)){
            res += String.fromCharCode(arr[counter]);
            counter++;
        }
        else res += ch;
        
    }
    return res;
};

console.log(sortVowels("lEetcOde")); // "lEOtcede"
console.log(sortVowels("hello")); // "ehllo"
console.log(sortVowels("programming")); // "prmminggao"