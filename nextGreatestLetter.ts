function nextGreatestLetter(letters: string[], target: string): string {
    let res = Infinity;
    let min = Infinity;
    for(const ch of letters){
        if(ch.charCodeAt(0) > target.charCodeAt(0)) res = Math.min(res, ch.charCodeAt(0));
        min = Math.min(min, ch.charCodeAt(0));
    }
    if(res === Infinity) return String.fromCharCode(min);
    return String.fromCharCode(res);
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // f
console.log(nextGreatestLetter(["c", "f", "j"], "d")); // f