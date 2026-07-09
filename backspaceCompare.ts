function backspaceCompare(s: string, t: string): boolean {
    let arrS:string[] = [];
    let arrT:string[] = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] !== '#') arrS.push(s[i]);
        else arrS.pop();
    }
    for(let i = 0; i < t.length; i++){
        if(t[i] !== '#') arrT.push(t[i]);
        else arrT.pop();
    }


    return arrT.join('') === arrS.join('');
};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true