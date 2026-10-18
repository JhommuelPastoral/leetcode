function greatestLetter(s: string): string {
    const set = new Set<string>();
    let ascii = 0;
    for(const ch of s){
        set.add(ch);
        if(set.has(ch.toLowerCase()) && set.has(ch.toUpperCase())) ascii = Math.max(ascii, ch.toUpperCase().charCodeAt(0));
    }


    return ascii ? String.fromCharCode(ascii) : '';
};

console.log(greatestLetter("lEeTcOdE"));
console.log(greatestLetter("arRAzFz"));
console.log(greatestLetter("AbCdEfGhIjK"));
console.log(greatestLetter("aBc"));
console.log(greatestLetter("AbCd"));