function shiftingLetters(s: string, shifts: number[]): string {
    let index = 0;
    let arr:string[] = s.split('');
    while(index < s.length){
        for(let i = 0; i<index+1; i++){
            const sum = arr[i].charCodeAt(0) + shifts[index];
            if(sum > 122){
                arr[i] = String.fromCharCode(((sum - 97) % 26) + 97);
            }
            else{
                arr[i] = String.fromCharCode(sum);
            }
        }
        index++;
    }

    return arr.join('');
};

console.log(shiftingLetters("abc", [3,5,9])); // "rpl"
console.log(shiftingLetters("aaa", [1,2,3])); // "gfd"