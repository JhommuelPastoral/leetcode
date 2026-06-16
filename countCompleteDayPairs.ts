function countCompleteDayPairs(hours: number[]): number {
    let res = 0;

    for(let i = 0; i < hours.length - 1; i++){
        for(let j = i + 1; j < hours.length; j++){
            if((hours[i] + hours[j]) % 24 === 0) res++;
        }
    }

    return res;
};

console.log(countCompleteDayPairs([1, 23, 24])) // 1
console.log(countCompleteDayPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])) // 0