function findWordsContaining(words: string[], x: string): number[] {
    const result:number[] = [];

    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)) result.push(i);
    }
    return result;

};

console.log(findWordsContaining(['apple', 'banana', 'cherry', 'date'], 'a')); // Output: [0, 1, 3]
console.log(findWordsContaining(['apple', 'banana', 'cherry', 'date'], 'e')); // Output: [0, 2, 3]
