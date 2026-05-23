function reverseWords(s: string): string {
    const trim = s.trim().split(' ').filter((str) => str.length !== 0);
    return trim.reverse().join(' ');
};


console.log(reverseWords("the sky is blue"));

