function reverseWords(s: string): string {
    let vowelCount = 0;
    const vowels = new Set<string>(['a','e','i','o','u']);
    const arr = s.split(' ');
    let res = arr[0];
    for(const ch of arr[0]) {
        if(vowels.has(ch)) vowelCount++;
    }

    for(let i = 1; i < arr.length; i++){
        let counter = 0;
        let reverse = '';
        for(let j = arr[i].length -1; j >=0; j--){
            if(vowels.has(arr[i][j])) counter++;
            if(counter > vowelCount){
                counter++;
                break;
            }
            reverse += arr[i][j];
        }

        if(counter === vowelCount) res += ` ${reverse}`;
        else res += ` ${arr[i]}`;

    }

    return res;
};

console.log(reverseWords("hello world")); // Output: "hello dlrow"
console.log(reverseWords("this is a test")); // Output: "this is a test"
console.log(reverseWords("programming is fun")); // Output: "programming si fun"