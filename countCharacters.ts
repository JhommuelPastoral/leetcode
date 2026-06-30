function countCharacters(words: string[], chars: string): number {
    const map = new Map<string,number>();
    let sum = 0;
    for(const char of chars) map.set((char), (map.get(char) ?? 0) + 1);

    for(const word of words){
        const temp = new Map <string,number>(map);
        let isGoodString = true;
        for(const char of word){
            if(temp.get(char)) temp.set(char, (temp.get(char)! - 1));
            else{
                isGoodString = false;
                break;
            }
        }
        if(isGoodString) sum += word.length;
        
    }

    return sum;

};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"));
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"));