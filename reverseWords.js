function reverseWords(s) {
    var trim = s.trim().split(' ').filter(function (str) { return str.length !== 0; });
    return trim.reverse().join(' ');
}
;
console.log(reverseWords("the sky is blue"));
