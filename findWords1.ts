function findWords(words: string[]): string[] {
    const map = new Map<string, number>();
    const res:string[] = [];
    ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].forEach((row, index) => {
        for (const char of row) {
            map.set(char, index + 1);
        }
    });

    for(const word of words){
        const row:number = map.get(word[0].toLowerCase())!;
        let isSameRow = true;
        for(const ch of word.toLowerCase()){
            if(map.get(ch) !== row){
                isSameRow = false;
                break;
            }
        }
        if(isSameRow) res.push(word);
    }
    return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // Output: ["Alaska", "Dad"]
console.log(findWords(["omk"])); // Output: []
console.log(findWords(["adsdf", "sfd"])); // Output: ["adsdf", "sfd"]