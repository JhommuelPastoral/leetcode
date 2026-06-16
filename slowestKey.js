function slowestKey(releaseTimes, keysPressed) {
    var _a;
    var maxDuration = releaseTimes[0];
    var result = keysPressed[0];
    for (var i = 1; i < releaseTimes.length; i++) {
        var duration = releaseTimes[i] - ((_a = releaseTimes[i - 1]) !== null && _a !== void 0 ? _a : 0);
        if (duration > maxDuration || (duration === maxDuration && keysPressed[i] > result)) {
            maxDuration = duration;
            result = keysPressed[i];
        }
    }
    return result;
}
console.log(slowestKey([9, 29, 49, 50], "cbcd")); // "c"
console.log(slowestKey([12, 23, 36, 46, 62], "spuda")); // "a"
