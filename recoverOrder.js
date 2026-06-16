function recoverOrder(order, friends) {
    var res = [];
    var friendSet = new Set(friends);
    for (var i = 0; i < order.length; i++) {
        if (friendSet.has(order[i]))
            res.push(order[i]);
    }
    return res;
}
;
console.log(recoverOrder([1, 2, 3, 4], [2, 4])); // [2, 4]
console.log(recoverOrder([1, 2, 3], [4, 5])); // []
console.log(recoverOrder([1, 2, 3], [1, 2, 3])); // [1, 2, 3]
