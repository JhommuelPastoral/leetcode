function countPrefixSuffixPairs(words: string[]): number {
    let res = 0;

    for(let i = 0; i < words.length -1; i++){
        for(let j = i+1; j < words.length; j++){
            if(words[i].length > words[j].length ) continue;
            if(isPrefixAndSuffix(words[i], words[j])) res++;
        }
    }
    return res;
};

function isPrefixAndSuffix(str1:string, str2:string):boolean{
    for(let i =0; i < str1.length; i++){
        if(str1[i] !== str2[i]) return false;
        if(str1[str1.length - 1 - i] !== str2[str2.length - 1 - i]) return false;
    }
    return true;
}


console.log(countPrefixSuffixPairs(["abc","bc","ab","c"]));
console.log(countPrefixSuffixPairs(["a","b","c","ab","bc","abc"]));
console.log(countPrefixSuffixPairs(["a","a"]));
console.log(countPrefixSuffixPairs(["a","b","c"]));