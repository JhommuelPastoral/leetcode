function vowelStrings(words: string[], queries: number[][]): number[] {
    const result:number[] = [];
    const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);
    for(let [start,end] of queries){
        let counter = 0;
        while(start < end+1){
            if(vowels.has(words[start][0]) && vowels.has(words[start][words[start].length - 1])) counter++;
            start++;
        }
        result.push(counter)
    }


    return result;
};
console.log(vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]])); // [2,3,0]
console.log(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]])); // [3,2,1]