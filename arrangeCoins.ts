function arrangeCoins(n: number): number {
    let stairs = 0;

    while(n >= 0){
        stairs++;
        n -= stairs;
    }


    return stairs > 1 ? stairs - 1 : stairs;
};

console.log(arrangeCoins(5));