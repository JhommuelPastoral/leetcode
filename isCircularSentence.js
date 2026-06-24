"use strict";
function isCircularSentence(sentence) {
    const arr = sentence.split(' ');
    if (arr.length === 1) {
        if (arr[0][0] === arr[0][arr[0].length - 1])
            return true;
        else
            return false;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][arr[i].length - 1] !== arr[i + 1][0])
            return false;
    }
    return arr[arr.length - 1][arr[arr.length - 1].length - 1] === arr[0][0];
}
;
console.log(isCircularSentence("leetcode exercises sound delightful"));
console.log(isCircularSentence("eetcode"));
console.log(isCircularSentence("Leetcode is cool"));
