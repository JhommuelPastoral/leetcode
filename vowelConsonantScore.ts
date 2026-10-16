function vowelConsonantScore(s: string): number {
    let vowelCounter =0;
    let consonantCounter = 0;
    for(const ch of s){
        if(isVowel(ch)) vowelCounter++;
        else consonantCounter += isConsonant(ch);
    }
    if(consonantCounter > 0) return Math.floor(vowelCounter/consonantCounter);
    return 0;
};  

function isConsonant(ch:string):number{
    if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) return 1;
    return 0;
}

function isVowel(ch:string):boolean{
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch ==='u' ) return true;
    return false;
}
console.log(vowelConsonantScore('aeiou'));
console.log(vowelConsonantScore('aeioubcdfg'));
console.log(vowelConsonantScore('aeioubcdfgxyz'));