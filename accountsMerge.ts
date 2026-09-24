function accountsMerge(accounts: string[][]): string[][] {
    const map = new Map<string, Set<string>[]>();
    const res: string[][] = [];

    for (const account of accounts) {
        const name = account[0];
        const acc = account.slice(1);

        if (!map.has(name)) {
            map.set(name, [new Set(acc)]);
            continue;
        }

        const emails = map.get(name)!;

        let merged = new Set<string>(acc);
        const newGroups: Set<string>[] = [];

        for (const emailSet of emails) {
            let isConnected = false;

            for (const email of Array.from(merged)) {
                if (emailSet.has(email)) {
                    isConnected = true;
                    break;
                }
            }

            if (isConnected) {
                merged = new Set([...Array.from(merged), ...Array.from(emailSet)]);
            } else {
                newGroups.push(emailSet);
            }
        }

        newGroups.push(merged);
        map.set(name, newGroups);
    }

    for (const [name, emailSets] of Array.from(map)) {
        for (const emails of emailSets) {
            res.push([name, ...Array.from(emails).sort()]);
        }
    }

    return res;
}

console.log(accountsMerge([["John", "gG3y1@example.com", "bM9Hs@example.com"], ["John", "gG3y1@example.com", "gG3y1@example.com", "bM9Hs@example.com"], ["Mary", "Ls2j8@example.com"], ["John", "dN2lC@example.com"]]))
console.log(accountsMerge([["John", "gG3y1@example.com", "bM9Hs@example.com"], ["John", "gG3y1@example.com", "gG3y1@example.com", "bM9Hs@example.com"], ["Mary", "Ls2j8@example.com"], ["John", "dN2lC@example.com"]]))