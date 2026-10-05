function freqAlphabets(s: string): string {
    const alphabet = new Map<number, string>();
    let ans:string[] = [];
    for (let i = 1; i <= 26; i++) {
        alphabet.set(i, String.fromCharCode(96 + i));
    }

    for(let i = 0; i < s.length; i++){
        if(s[i] !== '#'){
            ans.push(alphabet.get(Number(s[i]))!);
        }
        else{
            const val = Number(`${ s[i-2] + s[i-1] }`);
            ans.pop();
            ans.pop();
            ans.push(alphabet.get(val)!);
        }
    }
    return ans.join('');

};
console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));
console.log(freqAlphabets("25#"));