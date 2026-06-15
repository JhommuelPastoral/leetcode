function longestPalindrome(s) {
    var isPalindrome = function (left, right) {
        while (left < right) {
            if (s[left] !== s[right])
                return false;
            left++;
            right--;
        }
        return true;
    };
    var res = '';
    for (var i = 0; i < s.length; i++) {
        var left = i;
        var right = left + 1;
        while (right < s.length) {
            if (s[left] === s[right]) {
                var length_1 = (right + 1) - left;
                if (isPalindrome(left, right) && length_1 > res.length) {
                    res = s.substring(left, right + 1);
                }
            }
            right++;
        }
    }
    return res.length === 0 ? s[0] : res;
}
;
console.log(longestPalindrome("babad")); // Output: "aba" or "bab"
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
