function largestWordCount(messages, senders) {
    var _a;
    var map = new Map();
    var senderMap = new Map();
    var res = '';
    var max = 0;
    for (var i = 0; i < messages.length; i++) {
        map.set(i, messages[i].split(' ').length);
    }
    for (var i = 0; i < senders.length; i++) {
        var words = map.get(i);
        senderMap.set(senders[i], ((_a = senderMap.get(senders[i])) !== null && _a !== void 0 ? _a : 0) + words);
        var total = senderMap.get(senders[i]);
        if (total > max || (total === max && senders[i] > res)) {
            max = total;
            res = senders[i];
        }
    }
    return res;
}
;
console.log(largestWordCount(["Hello userTwooo", "Hi userThree", "Wonderful day userThree", "Nice day userTwo"], ["userThree", "userTwo", "userTwo", "userThree"]));
console.log(largestWordCount(["How is leetcode for everyone", "Leetcode is useful for practice"], ["Bob", "Charlie"]));
