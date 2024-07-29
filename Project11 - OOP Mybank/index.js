#! /usr/bin/env node
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    bankAccount;
    constructor(firstName, lastName, gender, age, mobileNumber, bankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    CustomerInfo() {
        return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}
Account Balance: ${this.bankAccount}`;
    }
}
class BankAccount {
    accountBalance;
    constructor(accountBalance) {
        this.accountBalance = accountBalance;
    }
    debit(amount) {
        let statement = "You entered wrong amount";
        if (amount > 0) {
            if (this.accountBalance > amount) {
                this.accountBalance -= amount;
                statement = `Transaction Successful, your new balance is ${this.accountBalance}`;
            }
            else {
                statement = "You dont have enough money to do this transaction.";
            }
        }
        return statement;
    }
    credit(amount) {
        let statement = "Transaction Failed";
        if (amount > 0) {
            this.accountBalance += amount;
            statement = "Your acoount has been credited successfully!";
        }
        return statement;
    }
}
let myBank = new BankAccount(100);
console.log(myBank.credit(50));
console.log(myBank.accountBalance);
console.log(myBank.debit(70));
let my_customer = new Customer("Taha", "Ahmed", "Male", 27, "123456789", 98123456);
console.log(my_customer.CustomerInfo());
export {};
