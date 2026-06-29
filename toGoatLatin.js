function toGoatLatin(sentence) {
    var arr = sentence.split(' ');
    var vowels = new Set(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']);
    for (var i = 0; i < arr.length; i++) {
        var str = '';
        if (vowels.has(arr[i][0])) {
            str = arr[i] + 'ma';
        }
        else {
            str = arr[i].substring(1, arr[i].length);
            str += arr[i][0] + 'ma';
        }
        for (var j = 0; j < i + 1; j++)
            str += 'a';
        arr[i] = str;
    }
    ;
    return arr.join(' ');
}
;
var sentence = "I speak Goat Latin";
console.log(toGoatLatin(sentence));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
