function passwordStrength(password) {
    var points = 0;
    var seen = new Set();
    var specialChar = new Set(['!', '@', '#', '$']);
    for (var _i = 0, password_1 = password; _i < password_1.length; _i++) {
        var char = password_1[_i];
        if (!seen.has(char)) {
            if (!isNaN(Number.parseInt(char)))
                points += 3;
            else if (specialChar.has(char))
                points += 5;
            else if (char === char.toLowerCase())
                points += 1;
            else if (char === char.toUpperCase())
                points += 2;
            seen.add(char);
        }
    }
    return points;
}
;
console.log(passwordStrength("P@ssw0rd!"));
