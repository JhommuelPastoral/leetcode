function isPrefixString(s: string, words: string[]): boolean {
    let index = 0;
    for(const word of words){
        for(let i = 0; i < word.length; i++){
            if(s[index] === word[i]) index++;
            else return false;
        }
        if(index === s.length ) return true;
    }


    return false;
};

console.log(isPrefixString("iloveleetcode", ["i","love","leetcode","apples"]));
console.log(isPrefixString("iloveleetcode", ["apples","i","love","leetcode"]));