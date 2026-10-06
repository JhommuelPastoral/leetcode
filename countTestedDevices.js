function countTestedDevices(batteryPercentages) {
    var testedDevice = 0;
    for (var i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] - testedDevice > 0) {
            testedDevice++;
        }
    }
    return testedDevice;
}
;
console.log(countTestedDevices([100, 50, 30, 20, 10]));
console.log(countTestedDevices([100, 90, 80, 70, 60]));
