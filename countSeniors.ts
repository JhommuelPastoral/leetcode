function countSeniors(details: string[]): number {
    let res = 0;

    for(const detail of details){
        const parsedAge = Number.parseInt(`${detail[11]}${detail[12]}`);
        if(parsedAge > 60) res++;
    }


    return res;
};

console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"])); // Output: 2
console.log(countSeniors(["1313579440F2036","2921522980M5644"])); // Output: 0