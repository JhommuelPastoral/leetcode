function divideString(s: string, k: number, fill: string): string[] {
    
    let str = '';
    const res:string[] = [];

    for(let i = 0; i < s.length; i++){
        if(str.length === k){
            res.push(str);
            str = '';
        }
        str += s[i]
    }
    if(str.length === k) res.push(str);
    else{
        for(let i = str.length; i < k; i++) str += fill;
        res.push(str);
    }
    return res;
};
console.log(divideString("abcdefghi", 3, "x")); // Output: ["abc", "def", "ghi"]
console.log(divideString("abcdefghij", 3, "x")); // Output: ["abc", "def", "ghi", "jxx"]
console.log(divideString("abcdefghij", 4, "x")); // Output: ["abcd", "efgh", "ijxx"]