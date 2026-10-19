function minRotations(s: string): number {
    let res = 0;
    for(let i = 0; i < s.length ; i++){
        const from = i === 0 ? 0 : s[i-1];
        const to = s[i];
        const diff = Math.abs((Number(from) - Number(to)));
        res += Math.min(diff, 10 - diff)
    }
    return res;
};

console.log(minRotations('012345987654321'));
console.log(minRotations('110010'));
console.log(minRotations('001'));
