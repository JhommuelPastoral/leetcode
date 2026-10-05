function findTheWinner(n, k) {
    var set = new Set();
    for (var i = 1; i <= n; i++) {
        set.add(i);
    }
    var counter = 0;
    while (set.size !== 1) {
        counter = (counter + k - 1) % set.size;
        console.log(counter);
        var players = Array.from(set);
        var player = players[counter];
        set.delete(player);
    }
    return Array.from(set)[0];
}
console.log(findTheWinner(5, 2));
console.log(findTheWinner(6, 5));
console.log(findTheWinner(7, 3));
