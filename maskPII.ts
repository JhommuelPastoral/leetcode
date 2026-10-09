type IsEmailProps ={
    isEmail:boolean;
    domainIndex:number;
    name:string;
};

function IsStringEmail(s:string):IsEmailProps{
    let upperCaseCounter = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '@') return {isEmail:true, domainIndex: i +1, name:`${s[0]}${s[i-1]}`};
    }
    return {isEmail:false, domainIndex:0, name:''};
}

function maskPII(s: string): string {
    let {isEmail,domainIndex,name} =  IsStringEmail(s);
    if(isEmail){
        name = name.toLowerCase();
        s = s.toLowerCase();
        let email = `${name[0]}*****${name[1]}@`;
        for(let i = domainIndex; i < s.length; i++) email+=s[i];
        return email
    }
    else{
        let number = '';
        for(const ch of s){
            if(Number.parseInt(ch) || ch === '0') number+=ch;
        }
        if(number.length === 10) return `***-***-${number[6]}${number[7]}${number[8]}${number[9]}`;
        else if(number.length === 11) return `+*-***-***-${number[7]}${number[8]}${number[9]}${number[10]}`;
        else if(number.length === 12) return `+**-***-***-${number[8]}${number[9]}${number[10]}${number[11]}`;
        else if(number.length === 13) return `+***-***-***-${number[9]}${number[10]}${number[11]}${number[12]}`;
    }
    return '';
};


console.log(maskPII("AB@qq.com"));
console.log(maskPII("1(234)567-890"));
console.log(maskPII("86-(10)12345678"));