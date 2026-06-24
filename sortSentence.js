"use strict";
function sortSentence(s) {
    const arr = new Array();
    for (const word of s.split(' ')) {
        const digit = Number.parseInt(word[word.length - 1]);
        arr[digit - 1] = `${word.slice(0, word.length - 1)}`;
    }
    return arr.join(' ');
}
;
console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
