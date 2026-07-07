function calculateScore(instructions, values) {
    var visit = new Set();
    var score = 0;
    var index = 0;
    while (true) {
        if (index < 0 || index >= instructions.length || visit.has(index))
            break;
        visit.add(index);
        if (instructions[index] === 'add') {
            score += values[index];
            index++;
        }
        else {
            index += values[index];
        }
    }
    return score;
}
;
console.log(calculateScore(['add', 'add', 'jump', 'add'], [1, 2, 2, 3])); // Output: 3
console.log(calculateScore(['add', 'jump', 'add', 'jump'], [1, 2, 3, 4])); // Output: 1
