function detectCapitalUse(word) {
    var isAllUpperCase = word === word.toUpperCase();
    var isAllLowerCase = word === word.toLowerCase();
    if (isAllUpperCase || isAllLowerCase)
        return true;
    var isUpperCaseFirst = word[0] === word[0].toUpperCase();
    if (!isUpperCaseFirst || word.slice(1) !== word.slice(1).toLowerCase())
        return false;
    return true;
}
;
console.log(detectCapitalUse("USA"));
