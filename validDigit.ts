function validDigit(n: number, x: number): boolean {
    const set = new Set<string>(n.toString());
    if(Number.parseInt(n.toString()[0]) === x) return false;
    return set.has(x.toString());
};


console.log(validDigit(123, 1)); // true
console.log(validDigit(123, 4)); // false
console.log(validDigit(123, 2));