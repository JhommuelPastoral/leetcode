function trafficSignal(timer: number): string {
    if(timer === 0) return 'Green';
    else if(timer === 30) return 'Orange';
    else if (timer > 30 && timer <= 90 ) return 'Red';


    return 'Invalid';
};

console.log(trafficSignal(0));
console.log(trafficSignal(30));
console.log(trafficSignal(50));
console.log(trafficSignal(100));