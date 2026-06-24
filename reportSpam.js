"use strict";
function reportSpam(message, bannedWords) {
    let counter = 0;
    const bannedWordsMap = new Set(bannedWords);
    for (const mess of message) {
        if (bannedWordsMap.has(mess))
            counter++;
        if (counter === 2)
            return true;
    }
    return false;
}
;
console.log(reportSpam(["hello", "world"], ["hello", "world"]));
