function s(arr:string[], freq:number[]):number[]{
    for(const query of arr){
        const map = new Map<string,number>();
        let min = Infinity;
        let key = '';
        for(const ch of query){
            map.set(ch, (map.get(ch) ?? 0) + 1);
            const ascii = ch.charCodeAt(0);
            if(ascii < min){
                min = ascii;
                key = ch;
            }  
        }
        freq.push(map.get(key)!);
    }
    return freq;
}


function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    const queryFreq:number[] = [];
    const wordFreq:number[] = [];
    const ans:number[] = [];

    s(queries, queryFreq);
    s(words, wordFreq);
    for(const freq of queryFreq){
        let count = 0;
        for(let i = 0; i < wordFreq.length; i++){
            if(freq < wordFreq[i]) count++;
        }
        ans.push(count)
    }
    
    return ans;
};

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
console.log(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"]));

