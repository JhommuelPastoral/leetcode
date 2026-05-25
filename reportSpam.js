function reportSpam(message, bannedWords) {
    var counter = 0;
    var bannedWordsMap = new Set(bannedWords);
    for (var _i = 0, message_1 = message; _i < message_1.length; _i++) {
        var mess = message_1[_i];
        if (bannedWordsMap.has(mess))
            counter++;
        if (counter === 2)
            return true;
    }
    return false;
}
;
console.log(reportSpam(["hello", "world"], ["hello", "world"]));
