class Person {
  name: string;
  age: number;
  private secret: string = "This is a secret";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return `Your name is ${this.name}`;
  }
  getSecret() {
    return this.secret;
  }
  updateSecret(newSecret: string) {
    this.secret = newSecret;
  }
}

class Employee extends Person {
  employeeId: number;
  constructor(name: string, age: number, employeeId: number) {
    super(name, age);
    this.employeeId = employeeId;
  }
}


abstract class BankAccount {
  accountNumber: string;
  balance: number;
  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends BankAccount {
  interestRate: number;
  constructor(accountNumber: string, balance: number, interestRate: number) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    this.balance += this.balance * this.interestRate;
  }
  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
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