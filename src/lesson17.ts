// Task 1.Створити клас, що дозволяє виконувати такі операції над масивами: знаходження 
// кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

document.write(`<h2>Task 1</h2>`);
class ArrayAnalyzer {

  static countPositive(numbers: number[]): number {
    const numbersPositive = numbers.filter(num => num > 0)
    return numbersPositive.length
  }

  static countNegative(numbers: number[]): number {
    const numbersNegative = numbers.filter(num => num < 0)
    return numbersNegative.length
  }

  static countOccurrences(numbers: number[], findNum: number): number {
    const numbersOccurrence = numbers.filter(num => num === findNum)
    return numbersOccurrence.length
  }
}

const numbersArr1 = ArrayAnalyzer.countPositive([-3, -6, 0, 4, 7, 2, 6])
document.write(`<p>${numbersArr1} </p>`);
console.log(numbersArr1);

const numbersArr2 = ArrayAnalyzer.countNegative([3, 10, -4, 0, -7, 5])
document.write(`<p>${numbersArr2}</p>`);
console.log(numbersArr2);

const numberArr3 = ArrayAnalyzer.countOccurrences([3, 4, 5, 6], 3)
document.write(`<p>${numberArr3}</p>`);
console.log(numberArr3);

// Task 2.Створити службове авто (водій, марка, номер).
// Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
document.write(`<h2>Task 2</h2>`);
class CompanyCar {
  private static instance: CompanyCar | null = null;

  private driver: string;
  private brand: string;
  private plateNumber: string;

  private containerEl!: HTMLElement;

  private constructor(driver: string, brand: string, plateNumber: string) {
    this.driver = driver
    this.brand = brand
    this.plateNumber = plateNumber
    this.render()
  }

  static getInstance(driver: string, brand: string, plateNumber: string) {
    if (CompanyCar.instance === null) {
      CompanyCar.instance = new CompanyCar(driver, brand, plateNumber)
    }

    return CompanyCar.instance
  }

  public render(): void {
    if (this.containerEl) return

    this.containerEl = document.createElement('div')
    this.containerEl.className = 'container-task-2'

    this.containerEl.innerHTML = `
    <h3>Company Car</h2>
    <p>Driver: ${this.driver}</p>
    <p>Brand: ${this.brand}</p>
    <p>Plate: ${this.plateNumber}</p>
  `;

    document.body.append(this.containerEl)
  }
}
const car1 = CompanyCar.getInstance('Jonh', 'Kis', 'AA-1111-AA')
console.log(car1);

const car2 = CompanyCar.getInstance(
  'Mike',
  'BMW',
  'BB-2222-BB'
);

console.log(car1 === car2); // true
console.log(car2);


// Tas 3.Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) 
// програма нагадує про якусь подію (це просто текст) і також виводиться порядковий 
// номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити 
// одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
document.write(`<h2>Task 3</h2>`);
class Reminder {
  private static instance: Reminder | null = null

  private message: string;
  private counter: number = 0;
  private timerId: number | null = null;

  private containerEl!: HTMLElement;
  private timerEl!: HTMLElement;
  private textEl!: HTMLElement;
  private statusEl!: HTMLElement;

  private constructor(message: string, delaySeconds: number) {
    this.message = message
    this.createDOMStructure();
    this.startTimer(delaySeconds)
  }

  static getInstance(message: string, delaySeconds: number): Reminder {
    if (!Reminder.instance) {
      if (!message || !delaySeconds) {
        throw new Error("Error!");
      }
      Reminder.instance = new Reminder(message, delaySeconds)
    }
    return Reminder.instance
  }

  private startTimer(seconds: number): void {
    this.timerId = window.setInterval(() => {
      this.counter++
      console.log(`${this.counter} : ${this.message}`)
    }, seconds * 1000);
  }

  public stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId)
      this.timerId = null
      this.updateDOM()
      console.log("Таймер зупинено.")
    }
  }

  public updateMessage(newMessage: string): void {
    this.message = newMessage
    this.updateDOM()
    console.log(`Повідомлення змінено на: ${newMessage}`)
  }

  private createDOMStructure(): void {
    this.containerEl = document.createElement('div')
    this.containerEl.className = 'main-container'

    this.timerEl = document.createElement('div')
    this.timerEl.className = 'timer'

    this.textEl = document.createElement('p')
    this.textEl.className = 'text'

    this.statusEl = document.createElement('div')
    this.statusEl.className = 'timer-id'

    this.containerEl.append(this.timerEl, this.textEl, this.statusEl)
    document.body.append(this.containerEl)

    this.updateDOM()
  }

  private updateDOM(): void {
    this.timerEl.innerText = `Нагадувань: ${this.counter}`;
    this.textEl.innerText = this.message;
    this.statusEl.innerText = this.timerId ? `Статус: Працює (ID: ${this.timerId})` : 'Статус: Зупинено';
  }
}

const reminder = Reminder.getInstance('Пити воду!', 2)

setTimeout(() => {
  reminder.updateMessage('Зробити розминку!')
}, 5000);

setTimeout(() => {
  reminder.updateMessage('Випити таблетки!')
}, 10000);

setTimeout(() => {
  reminder.stopTimer()
}, 15000);

console.log(reminder);


















// Практика №1
// class Temperature {
//   celsius: number;

//   private constructor(celsius: number) {
//     this.celsius = celsius
//   }

//   static celsiusToFahrenheit(celsius: number): number {
//     return celsius * 9 / 5 + 32
//   }
// }

// console.log(Temperature.celsiusToFahrenheit(180));


// Задача 1. Композиція
// class Battery {
//   charge() {
//     console.log('Battery is full');
//   }
// }
// class Phone {
//   battery: Battery;
//   constructor() {
//     this.battery = new Battery()
//   }

//   showBattery() {
//     this.battery.charge()
//   }
// }
// const phone = new Phone()
// phone.showBattery()

// Задача 2. Агрегація
// class Teacher {
//   name: string;

//   constructor(name: string) {
//     this.name = name
//   }
// }

// class School {
//   teacher: Teacher;

//   constructor(teacher: Teacher) {
//     this.teacher = teacher
//   }

//   showTeacher() {
//     console.log(this.teacher.name);
//   }
// }
// const teacher = new Teacher('Ivan')
// const school = new School(teacher)
// school.showTeacher()

// Задача 3. Композиція
// class CPU {

//   calculate() {
//     console.log('CPU is calculating...');

//   }
// }

// class Computer {
//   cpu: CPU;

//   constructor() {
//     this.cpu = new CPU()
//   }

//   run(): void {
//     this.cpu.calculate()
//   }

// }
// const pc = new Computer()
// pc.run()

// Задача 4. Агрегація
// class Author {
//   name: string;

//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Book {
//   author: Author;

//   constructor(author: Author) {
//     this.author = author
//   }

//   showAuthor() {
//     console.log(this.author.name);
//   }
// }
// const author = new Author('Jonh')
// const book = new Book(author)
// book.showAuthor()




// task 6
// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name
//   }
// }

// class Comment_ {
//   user: User;
//   text!: string;

//   constructor(user: User, text: string) {
//     this.user = user
//     this.text = text
//   }

//   show() {
//     console.log(`${this.user.name}, ${this.text}`);
//   }
// }

// const user = new User('Val')

// const comment = new Comment_(user, 'Nice to meet you')
// comment.show()



