function maximumNumberOfStringPairs(words: string[]): number {
    const map = new Map<number, string>();
    let pair = 0;
    for(let i = 1; i < words.length; i++){
        let rev = '';
        for(let j = words[i].length - 1; j >=0; j--){
            rev += words[i][j];
        }
        map.set(i, rev);
    }
    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            if(words[i] === map.get(j)) pair++;
        }
    }

    return pair;
};
console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"])); // Output: 2
console.log(maximumNumberOfStringPairs(["ab","ba","cc"])); // Output: 1
console.log(maximumNumberOfStringPairs(["aa","ab"])); // Output: 0