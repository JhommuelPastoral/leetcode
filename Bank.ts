class Bank {
    bal:number[];
    constructor(balance: number[]) {
        this.bal = balance;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        const index = account1 - 1 >= 0 && account1 - 1 <= this.bal.length - 1;
        const index2 = account2 - 1 >= 0 && account2 - 1 <= this.bal.length - 1;
        if(!index|| !index2 || this.bal[account1-1] < money) return false;
        this.bal[account1-1] -= money;
        this.bal[account2-1] += money;
        return true;
    }

    deposit(account: number, money: number): boolean {
        const index = account - 1 >= 0 && account - 1 <= this.bal.length - 1;
        if(!index) return false;
        this.bal[account - 1] += money;
        return true;
    }

    withdraw(account: number, money: number): boolean {
        const index = account - 1 >= 0 && account - 1 <= this.bal.length - 1;
        if(!index || this.bal[account-1] < money) return false;
        this.bal[account-1] -= money;
        return true; 
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */

const bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.withdraw(3, 10)); // true
console.log(bank.transfer(5, 1, 20)); // false
console.log(bank.deposit(5, 20)); // true
console.log(bank.transfer(5, 1, 20)); // true
console.log(bank.withdraw(3, 50)); // false