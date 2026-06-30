function discountPrices(sentence: string, discount: number): string {
    const result: string[] = [];

    for (const word of sentence.split(" ")) {

        if (word[0] !== "$") {
            result.push(word);
            continue;
        }

        let digits = "";
        let valid = true;

        for (let i = 1; i < word.length; i++) {
            if (!Number.isInteger(Number(word[i]))) {
                valid = false;
                break;
            }
            digits += word[i];
        }

        if (!valid) {
            result.push(word);
            continue;
        }

        if (digits === "") {
            result.push("$");
            continue;
        }

        const price = Number(digits);
        const discounted = price * (1 - discount / 100);

        result.push(`$${discounted.toFixed(2)}`);
    }

    return result.join(" ");
}

console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", 50));
console.log(discountPrices("1 $2 $3 $4 and 456 $", 50));