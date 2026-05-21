function scoreDifference(nums) {
    var playerTurn = 1;
    var player1 = 0;
    var player2 = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0)
            playerTurn = playerTurn === 1 ? 2 : 1;
        if ((i + 1) % 6 === 0)
            playerTurn = playerTurn === 1 ? 2 : 1;
        if (playerTurn === 1)
            player1 += nums[i];
        else
            player2 += nums[i];
    }
    return player1 - player2;
}
;
console.log(scoreDifference([2, 4, 2, 1, 2, 1]));
