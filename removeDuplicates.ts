function removeDuplicates(s: string): string {
    const stack:string[] = [];
    for(let i = 0; i < s.length ; i++){
        const curr = s[i];
        const lastIndex = stack[stack.length - 1 ] ?? '';
        if(curr === lastIndex) stack.pop();
        else stack.push(curr);
    }

    return stack.join(''); 
};


console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("aabbccddeeffgg"));