function sumOfEncryptedInt(nums: number[]): number {
    let sum = 0;

    for(const num of nums){
        const strNum = num.toString().split('');
        const arrNum = strNum.map((str) => parseInt(str));
        const max = Math.max(...arrNum);
        const encrypt = parseInt(new Array(strNum.length).fill(max).join(''));
        sum += encrypt;

    }

    return sum;


};

console.log(sumOfEncryptedInt([4, 1, 2, 6]));