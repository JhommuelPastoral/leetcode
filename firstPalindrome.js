"use strict";
function firstPalindrome(words) {
    for (const word of words) {
        let j = 0;
        let isPalindrome = true;
        for (let i = word.length - 1; i >= 0; i--) {
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
