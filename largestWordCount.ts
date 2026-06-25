function largestWordCount(messages: string[], senders: string[]): string {
    const map = new Map <number,number>();
    const senderMap = new Map <string, number>();
    let res = '';
    let max = 0;
    for(let i = 0; i < messages.length; i++){
        map.set(i, messages[i].split(' ').length);
    } 
    for(let i = 0; i < senders.length; i++){
        const words = map.get(i)!;
        senderMap.set(senders[i], (senderMap.get(senders[i]) ?? 0) + words);
        const total = senderMap.get(senders[i])!;
        if (total > max ||(total === max && senders[i] > res)) {
            max = total;
            res = senders[i];
        }
    }
    return res;
};


console.log(largestWordCount(["Hello userTwooo", "Hi userThree", "Wonderful day userThree", "Nice day userTwo"], ["userThree", "userTwo", "userTwo", "userThree"]))
console.log(largestWordCount(["How is leetcode for everyone", "Leetcode is useful for practice"], ["Bob", "Charlie"]))