

class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  getInfo(): string {
    return `${this.title} by ${this.author}`
  }
}

const book = new Book('Harry Potter', 'J.K. Rowling')
console.log(book.getInfo());

// ===========
class Counter {
  count: number

  constructor(count: number) {
    this.count = count
  }

  increment() {
    return this.count++
  }

  decrement() {
    return this.count--
  }

  getValue(): number {
    return this.count
  }
}

const counter1 = new Counter(10)
console.log(counter1.increment());
console.log(counter1.getValue());
console.log(counter1.decrement());


// =========
class BankAccount {
  private owner: string;
  private balance: number

  constructor(owner: string, balance: number) {
    this.owner = owner
    this.balance = balance
  }

  deposit(amount: number): void {
    this.balance += amount
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Not enough balance");
    }

    this.balance -= amount
  }

  getBalance(): string {
    return `Name: ${this.owner}, Balance: ${this.balance}`
  }
}

const account = new BankAccount('Val', 1000)
console.log(account.deposit(500));
console.log(account.withdraw(300));
console.log(account.withdraw(200));
console.log(account.getBalance());

