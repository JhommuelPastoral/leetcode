function sortByBits(arr: number[]): number[] {
    return  arr.sort((a:number, b:number) => bitCounter(a) - bitCounter(b)  || a - b)
};
function bitCounter(val:number):number{
    const binary = val.toString(2);
    let counter =0;
    for(const bit of binary){
        if(bit === '1') counter++;
    }

    return counter;
}

console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));
console.log(sortByBits([10000,10000]));
console.log(sortByBits([2,3,5,7,11,13,17,19]));
console.log(sortByBits([10,100,1000,10000]));