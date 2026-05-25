function makeGood(s: string): string {
    const arrString = s.split('');
    for(let i =0; i < s.length-1; i++) {
        if( ((s[i] === s[i].toLowerCase() && s[i+1] === s[i+1].toUpperCase()) ||
            (s[i] === s[i].toUpperCase() && s[i+1] === s[i+1].toLowerCase())) && 
            s[i].toLowerCase() === s[i+1].toLowerCase()
            ){
            arrString.splice(i,2);
            s = arrString.join('')
            i = -1;
        }
    }
    return s;
};

console.log(makeGood('leEeetcode'));