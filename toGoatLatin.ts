function toGoatLatin(sentence: string): string {
    const arr: string[] = sentence.split(' ');
    const vowels = new Set<string>(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']);
    for(let i = 0; i < arr.length; i++){
        let str:string = '';
        if(vowels.has(arr[i][0])){
            str = arr[i] + 'ma';
        }
        else{
            str = arr[i].substring(1,arr[i].length);
            str += arr[i][0] + 'ma';
        }
        for(let j = 0; j < i + 1; j++) str+= 'a';
        arr[i] = str;
    };

    return arr.join(' ');
};


const sentence = "I speak Goat Latin";
console.log(toGoatLatin(sentence));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));