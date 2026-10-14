var Bank = /** @class */ (function () {
    function Bank(balance) {
        this.bal = balance;
    }
    Bank.prototype.transfer = function (account1, account2, money) {
        var index = account1 - 1 >= 0 && account1 - 1 <= this.bal.length - 1;
        var index2 = account2 - 1 >= 0 && account2 - 1 <= this.bal.length - 1;
        if (!index || !index2 || this.bal[account1 - 1] < money)
            return false;
        this.bal[account1 - 1] -= money;
        this.bal[account2 - 1] += money;
        return true;
    };
    Bank.prototype.deposit = function (account, money) {
        var index = account - 1 >= 0 && account - 1 <= this.bal.length - 1;
        if (!index)
            return false;
        this.bal[account - 1] += money;
        return true;
    };
    Bank.prototype.withdraw = function (account, money) {
        var index = account - 1 >= 0 && account - 1 <= this.bal.length - 1;
        if (!index || this.bal[account - 1] < money)
            return false;
        this.bal[account - 1] -= money;
        return true;
    };
    return Bank;
}());
/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
var bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.withdraw(3, 10)); // true
console.log(bank.transfer(5, 1, 20)); // false
console.log(bank.deposit(5, 20)); // true
console.log(bank.transfer(5, 1, 20)); // true
console.log(bank.withdraw(3, 50)); // false
