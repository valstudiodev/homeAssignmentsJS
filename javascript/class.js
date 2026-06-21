"use strict";
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.title} by ${this.author}`;
    }
}
const book = new Book('Harry Potter', 'J.K. Rowling');
console.log(book.getInfo());
// ===========
class Counter {
    count;
    constructor(count) {
        this.count = count;
    }
    increment() {
        return this.count++;
    }
    decrement() {
        return this.count--;
    }
    getValue() {
        return this.count;
    }
}
const counter1 = new Counter(10);
console.log(counter1.increment());
console.log(counter1.getValue());
console.log(counter1.decrement());
// =========
class BankAccount {
    owner;
    balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Not enough balance");
        }
        this.balance -= amount;
    }
    getBalance() {
        return `Name: ${this.owner}, Balance: ${this.balance}`;
    }
}
const account = new BankAccount('Val', 1000);
console.log(account.deposit(500));
console.log(account.withdraw(300));
console.log(account.withdraw(200));
console.log(account.getBalance());
