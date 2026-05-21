function finalPrices(prices: number[]): number[] {
    const discountedPrices = [];

    for(let i = 0; i < prices.length; i++){
        let discount: number | null = null;
        for(let j = i + 1; j <prices.length; j++){
            if(j > i && prices[j] <= prices[i]){
                discount = prices[i] - prices[j];
                break; 
            } 
        }
        if(discount !== null) discountedPrices.push(discount);
        else discountedPrices.push(prices[i]);
    }


    return discountedPrices;
};

console.log(finalPrices([8,4,6,2,3]));