"use strict";
function finalPositionOfSnake(n, commands) {
    let row = 0;
    let col = 0;
    for (const command of commands) {
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
