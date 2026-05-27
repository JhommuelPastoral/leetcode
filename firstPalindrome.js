function firstPalindrome(words) {
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var j = 0;
        var isPalindrome = true;
        for (var i = word.length - 1; i >= 0; i--) {
            if (word[i] !== word[j]) {
                isPalindrome = false;
                break;
            }
            j++;
        }
        if (isPalindrome)
            return word;
    }
    return '';
}
;
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
