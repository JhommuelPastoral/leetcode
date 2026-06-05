function passwordStrength(password: string): number {
    let points = 0;
    const seen = new Set<string>();
    const specialChar = new Set<string>(['!', '@', '#', '$']);
    for(const char of password){
        if(!seen.has(char)){
            if(!isNaN(Number.parseInt(char))) points += 3
            else if(specialChar.has(char)) points += 5;
            else if(char === char.toLowerCase()) points += 1;
            else if(char === char.toUpperCase()) points += 2;
            seen.add(char);
        }
        
    }

    return points;

};

console.log(passwordStrength("P@ssw0rd!"));