// =====================================================================
// ============================ Extends ================================
// =====================================================================
// Задача 4. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12,
// чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він
// виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) .
// Обробку усіх помилок зробити з використанням відповідних класів.

class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

class StudentPerformance {
  private vacationMonths: number[] = [6, 7, 8]

  private validateMonth() {
    try {
      if (condition) {

      }
    } catch (error) {

    }
  }

  private validateGrade() {

  }

  public canImproveGrade() {

  }


}










// Задача 0. Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження).
// На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість
// відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків)

class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name
    this.age = age
    this.address = address
  }

  getBirthYear() {
    const CURRENT_YEAR = new Date().getFullYear()
    return CURRENT_YEAR - this.age
  }

  toString(): string {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Address: ${this.address}
    `
  }
}
const person1 = new Person('Stive', 35, 'Sackville')
const container = document.querySelector(`.container`) as HTMLElement
if (container) {
  container.style.border = '2px solid #000'
  container.style.padding = '20px'
  container.style.maxWidth = '300px'
  container.style.marginBottom = '20px'
  container.innerHTML = `
    <div>${person1.toString()}</div>
    <p>Birth year: ${person1.getBirthYear()}</p>

  `
}

class Worker_ extends Person {
  position: string;
  salary: number;
  taxPercent: number;

  constructor(
    name: string,
    age: number,
    address: string,
    position: string,
    salary: number,
    taxPercent: number) {

    super(name, age, address)
    this.position = position
    this.salary = salary
    this.taxPercent = taxPercent

    this.getAnnualIncome()
  }

  getAnnualIncome() {
    return this.salary * 12
  }

  getTaxAmount() {
    return this.getAnnualIncome() * this.taxPercent / 100
  }

  toString() {
    return `
      <p>${super.toString()}</p>
      <p>Position: ${this.position}</p>
      <p> Salary: ${this.salary}</p>
      <p>Tax: ${this.taxPercent}</p>
    `
  }
}
const worker = new Worker_('Jonh', 30, 'New-York', 'cook', 2000, 20)
const container2_ = document.querySelector(`.container2`) as HTMLElement
if (container2_) {
  container2_.style.border = '2px solid #000'
  container2_.style.padding = '20px'
  container2_.style.maxWidth = '300px'
  container2_.innerHTML = `
    <div>${worker.toString()}</div>
    <p>Total annual incom: ${worker.getAnnualIncome()}</p>
    <p>Tax percent: ${worker.getTaxAmount()}</p>
  `
}


// Задача 1. Створити клас Client
class Client {
  id: string;
  fullName: string;
  balance: number;

  constructor(id: string, fullName: string, balance: number) {
    this.id = id
    this.fullName = fullName
    this.balance = balance
  }

  addMoney(amount: number): number {
    return this.balance += amount
  }

  withdrawMoney(amount: number): number {
    if (amount > this.balance) {
      throw new Error("Not enough money");
    }

    return this.balance -= amount
  }

  toString() {
    return `
      <p>ID: ${this.id}</p>
      <p>Full name: ${this.fullName}</p>
      <p>Balance: ${this.balance}</p>
    `
  }
}

const client = new Client('233223', 'Valentyn Tkachenko', 50000)
const containerBox3 = document.querySelector(`.container3`) as HTMLElement
if (containerBox3) {
  containerBox3.innerHTML = `
    <div>${client.toString()}</div>
    <div>${client.addMoney(500)}</div>
    <div>${client.withdrawMoney(1000)}</div>
  `
}

// class GoldenClient extends Client {
//   creditLimit: number;
//   creditRate: number;

//   constructor(id: string, fullName: string, balance: number, creditLimit: number, creditRate: number) {
//     super(id, fullName, balance)

//     this.creditLimit = creditLimit
//     this.creditRate = creditRate
//   }

//   getPenalty() {

//   }

//   withdrawMoney(amount: number) {

//   }

//   toString() {
//     // return
//   }
// }