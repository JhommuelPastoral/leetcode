function printVertically(s: string): string[] {

    const arr: string[][] = [];
    const res: string[] = [];
    let maxCol = 0;
    for(const word of s.split(' ')){
        maxCol = Math.max(word.length, maxCol);
        arr.push([...Array.from(word)]);
    }
    for(let i = 0; i < maxCol; i++){
        let temp = '';
        for(let j = 0; j < arr.length; j++){
            const char = arr[j][i] ?? " ";
            temp += char;
        }
        res.push(temp.trimEnd());
    }
    return res;
};

console.log(printVertically("HOW ARE YOU"));
console.log(printVertically("TO BE OR NOT TO BE"));