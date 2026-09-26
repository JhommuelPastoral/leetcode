function originalDigits(s: string): string {
    const map = new Map<string,number>();
    let res = '';
    for(const ch of s) map.set(ch, (map.get(ch) ?? 0) + 1);
    
    const order = ['z', 'w', 'u', 'x', 'g', 'v', 'n', 'h'];

    for (const ch of order) {
        while (map.get(ch)) {
            res += getPossibility(ch, map);
        }
    }
    return res.split('').sort((a:string, b:string) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
};

function getPossibility(ch:string, map:Map<string,number>){
    switch(ch){
        case 'z':
                map.set('z', map.get('z')! - 1);
                map.set('e', map.get('e')! - 1);
                map.set('r', map.get('r')! - 1);
                map.set('o', map.get('o')! - 1);
                return "0";
        case 'w':
                map.set('t', map.get('t')! - 1);
                map.set('w', map.get('w')! - 1);
                map.set('o', map.get('o')! - 1);
                return "2";
        case 'u':
                map.set('f', map.get('f')! - 1);
                map.set('o', map.get('o')! - 1);
                map.set('u', map.get('u')! - 1);
                map.set('r', map.get('r')! - 1);
                return "4";
        case 'x':
                map.set('s', map.get('s')! - 1);
                map.set('i', map.get('i')! - 1);
                map.set('x', map.get('x')! - 1);
                return "6";
        case 'g':
                map.set('e', map.get('e')! - 1);
                map.set('i', map.get('i')! - 1);
                map.set('g', map.get('g')! - 1);
                map.set('h', map.get('h')! - 1);
                map.set('t', map.get('t')! - 1);
                return "8";    
        case 'v':
            const isFive =
                (map.get('f') ?? 0) > 0 &&
                (map.get('i') ?? 0) > 0 &&
                (map.get('v') ?? 0) > 0 &&
                (map.get('e') ?? 0) > 0;

            const isSeven =
                (map.get('s') ?? 0) > 0 &&
                (map.get('e') ?? 0) >= 2 &&
                (map.get('v') ?? 0) > 0 &&
                (map.get('n') ?? 0) > 0;
                
            if(isFive && isSeven){
                if(!map.get('x')) {
                    map.set('s', map.get('s')! - 1);
                    map.set('e', map.get('e')! - 2);
                    map.set('v', map.get('v')! - 1);
                    map.set('n', map.get('n')! - 1);
                    return '7';
                }
                else {
                    map.set('f', map.get('f')! - 1);
                    map.set('i', map.get('i')! - 1);
                    map.set('v', map.get('v')! - 1);
                    map.set('e', map.get('e')! - 1);
                    return '5';
                }
            }
            else if(!isFive && isSeven) {
                map.set('s', map.get('s')! - 1);
                map.set('e', map.get('e')! - 2);
                map.set('v', map.get('v')! - 1);
                map.set('n', map.get('n')! - 1);
                return '7';
            }
            else if(isFive && !isSeven){
                map.set('f', map.get('f')! - 1);
                map.set('i', map.get('i')! - 1);
                map.set('v', map.get('v')! - 1);
                map.set('e', map.get('e')! - 1);
                return '5';
            }
            return '';
        case 'n':
            const isOne =
                (map.get('o') ?? 0) > 0 &&
                (map.get('n') ?? 0) > 0 &&
                (map.get('e') ?? 0) > 0;

            const isNine =
                (map.get('n') ?? 0) >= 2 &&
                (map.get('i') ?? 0) > 0 &&
                (map.get('e') ?? 0) > 0;
            
            if(isOne && isNine){
                if(!map.get('z') && !map.get('u')){
                    map.set('o', map.get('o')! - 1);
                    map.set('n', map.get('n')! - 1);
                    map.set('e', map.get('e')! - 1);
                    return '1';
                } 
                else {
                    map.set('n', map.get('n')! - 2);
                    map.set('i', map.get('i')! - 1);
                    map.set('e', map.get('e')! - 1);
                    return '9';
                }
            }
            else if(!isOne && isNine) {
                map.set('n', map.get('n')! - 2);
                map.set('i', map.get('i')! - 1);
                map.set('e', map.get('e')! - 1);
                return '9';       
            }
            else if(isOne && !isNine) {
                map.set('o', map.get('o')! - 1);
                map.set('n', map.get('n')! - 1);
                map.set('e', map.get('e')! - 1);
                return '1';              
            }
            return '';
        case 'h':
            if(map.get('g')){
                map.set('e', map.get('e')! - 1);
                map.set('i', map.get('i')! - 1);
                map.set('g', map.get('g')! - 1);
                map.set('h', map.get('h')! - 1);
                map.set('t', map.get('t')! - 1);
                return "8";  
            }
            else{
                map.set('t', map.get('t')! - 1);
                map.set('h', map.get('h')! - 1);
                map.set('r', map.get('r')! - 1);
                map.set('e', map.get('e')! - 2);
                return "3";    
            }
        default: return ""       
    }


}

console.log(originalDigits("owoztneoer"));
console.log(originalDigits("fviefuro"));
