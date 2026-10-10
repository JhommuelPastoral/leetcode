function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    const queryFreq:number[] = [];
    const wordFreq:number[] = [];
    const ans:number[] = [];
    for(const query of queries){
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
        queryFreq.push(map.get(key)!);
    }
    for(const word of words){
        const map = new Map<string,number>();
        let min = Infinity;
        let key = '';
        for(const ch of word){
            map.set(ch, (map.get(ch) ?? 0) + 1);
            const ascii = ch.charCodeAt(0);
            if(ascii < min){
                min = ascii;
                key = ch;
            }  
        }
        wordFreq.push(map.get(key)!);
    }

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

