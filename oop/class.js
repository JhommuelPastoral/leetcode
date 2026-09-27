"use strict";
class Person {
    name;
    age;
    secret = "This is a secret";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return `Your name is ${this.name}`;
    }
    getSecret() {
        return this.secret;
    }
    updateSecret(newSecret) {
        this.secret = newSecret;
    }
}
class Employee extends Person {
    employeeId;
    constructor(name, age, employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }
}
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
class SavingsAccount extends BankAccount {
    interestRate;
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    addInterest() {
        this.balance += this.balance * this.interestRate;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
}
const bankAccount = new SavingsAccount("123456789", 1000, 0.05);
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
