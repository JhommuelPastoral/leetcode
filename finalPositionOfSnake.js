function finalPositionOfSnake(n, commands) {
    var row = 0;
    var col = 0;
    for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
        var command = commands_1[_i];
        if (command === 'RIGHT')
            col++;
        else if (command === 'LEFT')
            col--;
        else if (command === 'UP')
            row--;
        else if (command === 'DOWN')
            row++;
    }
    return (row * n) + col;
}
;
console.log(finalPositionOfSnake(3, ['RIGHT', 'DOWN', 'LEFT', 'UP'])); // Output: 0
console.log(finalPositionOfSnake(4, ['DOWN', 'DOWN', 'RIGHT', 'UP', 'LEFT'])); // Output: 5
console.log(finalPositionOfSnake(5, ['UP', 'UP', 'LEFT', 'DOWN', 'RIGHT'])); // Output: 0
