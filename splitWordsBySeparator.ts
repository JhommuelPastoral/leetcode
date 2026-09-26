function splitWordsBySeparator(words: string[], separator: string): string[] {
    let res = [];
    for(let word of words){
        const separated = word.split(separator).filter((val) => val.length >= 1);
        res.push(separated)
    }
    return res.flat();
};


console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."))
console.log(splitWordsBySeparator(["$easy$","$problem$"], "$"))