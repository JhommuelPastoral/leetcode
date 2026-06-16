function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let maxDuration = releaseTimes[0];
    let result = keysPressed[0];

    for (let i = 1; i < releaseTimes.length; i++) {
        const duration = releaseTimes[i] - (releaseTimes[i - 1] ?? 0);

        if (duration > maxDuration ||(duration === maxDuration && keysPressed[i] > result)) {
            maxDuration = duration;
            result = keysPressed[i];
        }
    }

    return result;
}


console.log(slowestKey([9,29,49,50], "cbcd")) // "c"
console.log(slowestKey([12,23,36,46,62], "spuda")) // "a"