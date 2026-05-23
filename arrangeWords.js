function arrangeWords(text) {
    var textArr = text.split(' ').map(function (val) { return val.toLowerCase(); }).sort(function (a, b) { return a.length - b.length; });
    textArr[0] = textArr[0][0].toUpperCase() + textArr[0].slice(1);
    return textArr.join(' ');
}
;
console.log(arrangeWords("Leetcode is cool"));
