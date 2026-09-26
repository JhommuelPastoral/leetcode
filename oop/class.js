var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.secret = "This is a secret";
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return "Your name is ".concat(this.name);
    };
    Person.prototype.getSecret = function () {
        return this.secret;
    };
    Person.prototype.updateSecret = function (newSecret) {
        this.secret = newSecret;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, employeeId) {
        var _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    return Employee;
}(Person));
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.addInterest = function () {
        this.balance += this.balance * this.interestRate;
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    };
    return SavingsAccount;
}(BankAccount));
var bankAccount = new SavingsAccount("123456789", 1000, 0.05);
console.log(bankAccount.balance); // 1000
bankAccount.deposit(500);
console.log(bankAccount.balance); // 1500
bankAccount.withdraw(200);
console.log(bankAccount.balance); // 1300
bankAccount.addInterest();
console.log(bankAccount.balance); // 1350
// const person1 = new Person("Alice", 30);
// person1.updateSecret("New secret for Alice");
// console.log(person1.getSecret());
// console.log(person1.getName());
// const employee1 = new Employee("Bob", 25, 12345);
// console.log(employee1.getName());
// console.log(employee1.getSecret());
