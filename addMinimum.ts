function addMinimum(word: string): number {
    let res = 0;
    let i = 0;

    while (i < word.length) {
        let count = 0;

        if (word[i] === 'a') {
            count++;
            i++;
        }

        if (i < word.length && word[i] === 'b') {
            count++;
            i++;
        }

        if (i < word.length && word[i] === 'c') {
            count++;
            i++;
        }

        res += 3 - count;
    }

    return res;
}


console.log(addMinimum("aab")); // Output: 1
console.log(addMinimum("abc")); // Output: 0
console.log(addMinimum("aaa")); // Output: 2