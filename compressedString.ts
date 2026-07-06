function compressedString(word: string): string {
    let res = "";
    const arr:[string,number][] = [];
    for(const ch of word){
        if(arr[arr.length - 1] && arr[arr.length - 1][0] === ch){
            arr[arr.length - 1][1] += 1;
        }
        else{
            arr.push([ch,1]);
        }
    }
    for(let [key,value] of arr){
        if(value > 9){
            while(value > 9){
                res += `9${key}`;
                value -= 9;
            }
            if(value > 0) res += value.toString() + key;
        }
        else res += value.toString() + key;
    }

    return res;

};