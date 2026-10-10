function mostCommonWord(paragraph: string, banned: string[]): string {
    const freq = new Map<string,number>();
    const bannedWords = new Set<string>(banned);
    let max = 0;
    let str = '';
    let res = '';
    paragraph = paragraph.toLowerCase();
    for(let ch of paragraph){
        if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) str += ch;
        else{
            freq.set(str, (freq.get(str) ?? 0) + 1);
            if(freq.get(str)! > max && !bannedWords.has(str) && str.length){
                max = freq.get(str)!;
                res = str;
            }
            str = '';
        }
    }
    if(str && ((freq.get(str)! + 1) || 1) > max && !bannedWords.has(str)) res = str;
    return res;

};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));