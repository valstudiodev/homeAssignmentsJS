"use strict";
// Task 1.Створити клас, що дозволяє виконувати такі операції над масивами: знаходження 
// кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
class ArrayAnalyzer {
    static countPositive(numbers) {
        const numbersPositive = numbers.filter(num => num > 0);
        return numbersPositive.length;
    }
    static countNegative(numbers) {
        const numbersNegative = numbers.filter(num => num < 0);
        return numbersNegative.length;
    }
    static countOccurrences(numbers, findNum) {
        const numbersOccurrence = numbers.filter(num => num === findNum);
        return numbersOccurrence.length;
    }
}
const numbersArr1 = ArrayAnalyzer.countPositive([-3, -6, 0, 4, 7, 2, 6]);
console.log(numbersArr1);
const numbersArr2 = ArrayAnalyzer.countNegative([3, 10, -4, 0, -7, 5]);
console.log(numbersArr2);
const numberArr3 = ArrayAnalyzer.countOccurrences([3, 4, 5, 6], 3);
console.log(numberArr3);
// Task 2.Створити службове авто (водій, марка, номер).
// Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.
class CompanyCar {
    static instance = null;
    driver;
    brand;
    plateNumber;
    constructor(driver, brand, plateNumber) {
        this.driver = driver;
        this.brand = brand;
        this.plateNumber = plateNumber;
    }
    static getInstance(driver, brand, plateNumber) {
        if (CompanyCar.instance === null) {
            CompanyCar.instance = new CompanyCar(driver, brand, plateNumber);
        }
        return CompanyCar.instance;
    }
}
const carInstance = CompanyCar.getInstance('Jonh', 'Kis', 'AA-1111-AA');
console.log(carInstance);
// Tas 3.Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) 
// програма нагадує про якусь подію (це просто текст) і також виводиться порядковий 
// номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити 
// одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
class Reminder {
    static instance = null;
    message;
    counter = 0;
    timerId = null;
    constructor(message, delaySeconds) {
        this.message = message;
        this.startTimer(delaySeconds);
    }
    static getInstance(message, delaySeconds) {
        if (Reminder.instance === null) {
            Reminder.instance = new Reminder(message, delaySeconds);
        }
        return Reminder.instance;
    }
    startTimer(seconds) {
        this.timerId = setInterval(() => {
            this.counter++;
            console.log(`${this.counter} : ${this.message}`);
        }, seconds * 1000);
    }
    stopTimer() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
            console.log("Таймер зупинено.");
        }
    }
    updateMessage(newMessage) {
        this.message = newMessage;
        console.log(`Повідомлення змінено на: ${newMessage}`);
    }
}
const reminder = Reminder.getInstance('Пити воду!', 2);
console.log(reminder);
setTimeout(() => {
    reminder.updateMessage('Зробити розминку!');
}, 5000);
setTimeout(() => {
    reminder.updateMessage('Випити таблетки!');
}, 10000);
setTimeout(() => {
    reminder.stopTimer();
}, 15000);
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
