"use strict";
// =============================================================================================================
// Задача 2. Створити об’єкт «Авто».
// =============================================================================================================
document.write(`<h2>Задача 2</h2>`);
let car = {
    brand: 'Kia',
    tankSize: 48,
    fuel: 30,
    seats: 5,
    passengers: 2,
    refuel(liters) {
        const spaceLeft = this.tankSize - this.fuel;
        const fuelToAdd = Math.min(liters, spaceLeft);
        this.fuel += fuelToAdd;
    },
    showFuel() {
        document.write(`Fuel: ${this.fuel}`);
    },
    showPassengers() {
        document.write(`Passengers: ${this.passengers}`);
    },
    addPassengers(count) {
        const freeSeats = this.seats - this.passengers;
        const addPassengers = Math.min(count, freeSeats);
        this.passengers += addPassengers;
    },
    removePassengers(count) {
        const canRemove = Math.min(count, this.passengers);
        this.passengers -= canRemove;
    },
};
const addPasseng = car.addPassengers(3);
const removePasseng = car.removePassengers(1);
car.showPassengers();
const refuel = car.refuel(15);
car.showFuel();
// =============================================================================================================
// Задача 4. Розробити клас Baner
// =============================================================================================================
document.write(`<h2>Задача 4</h2>`);
const myBanners = [
    {
        imagePath: '../lesson_15/img/img1.jpg',
        link: 'https://en.wikipedia.org/wiki/Smiley',
        altText: 'Smile 1',
    },
    {
        imagePath: '../lesson_15/img/img2.jpg',
        link: 'https://en.wikipedia.org/wiki/Smiley',
        altText: 'Smile 2',
    },
    {
        imagePath: '../lesson_15/img/img3.jpg',
        link: 'https://en.wikipedia.org/wiki/Smiley',
        altText: 'Smile 3',
    },
    {
        imagePath: '../lesson_15/img/img4.jpg',
        link: 'https://en.wikipedia.org/wiki/Smiley',
        altText: 'Smile 4',
    },
];
class Banner {
    items;
    constructor(items) {
        this.items = [...items];
    }
    ;
    randomBanner() {
        const randomIndex = Math.floor(Math.random() * this.items.length);
        return this.items[randomIndex];
    }
    ;
    render() {
        const banner = this.randomBanner();
        document.write(`
        <a href="${banner.link}">
            <img src="${banner.imagePath}" alt="${banner.altText}">
        </a>
      `);
    }
}
const mainBanner = new Banner(myBanners);
mainBanner.render();
// =============================================================================================================
// Задача 5. Розробити клас «Керівник танців»
// =============================================================================================================
document.write(`<h2>Задача 5</h2>`);
class DanceLeader {
    boys;
    girls;
    constructor(boys, girls) {
        this.boys = boys;
        this.girls = girls;
    }
    ;
    showGroupBoys() {
        document.write(`<p>Group boys: ${this.boys.join(', ')}</p>`);
    }
    ;
    showGroupGirls() {
        document.write(`<p>Group girls: ${this.girls.join(', ')}</p>`);
    }
    ;
    randomBoyName() {
        let ranIndex = Math.floor(Math.random() * this.boys.length);
        return this.boys[ranIndex];
    }
    ;
    randomGirlName() {
        let ranIndex = Math.floor(Math.random() * this.girls.length);
        return this.girls[ranIndex];
    }
    ;
    printPair() {
        let boy = this.randomBoyName();
        let girl = this.randomGirlName();
        document.write(`<p>Pair for dance: ${boy} & ${girl}</p>`);
    }
    ;
    run() {
        let count = 0;
        const maxPairs = 5;
        const intervalId = setInterval(() => {
            this.printPair();
            count++;
            if (count >= maxPairs) {
                clearInterval(intervalId);
                document.write("<p> All pairs are ready, the dance lesson is begening!!!</p>");
            }
        }, 5000);
    }
}
const group = new DanceLeader(['Adam', 'Val', 'Jonh'], ['Olga', 'Marina', 'Nicole']);
group.showGroupBoys();
group.showGroupGirls();
group.printPair();
group.run();
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// Задача 0,  Дано два об’єкта. Обидва містять масив цілих чисел.
// При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих,
// які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
// =============================================================================================================
// document.write(`<h2>Задача 0</h2>`);
// let obj1 = {
//   numbers: [2, 3, 5, 4, 9, 8],
//   getSum() {
//     return this.numbers.reduce((prevSum, num) => prevSum + num, 0)
//   },
// }
// let obj2 = {
//   numbers: [1, 5, 3, 8, 4, 7],
//   getMultiply(min: number, max: number) {
//     return this.numbers
//       .filter(num => num >= min && num <= max)
//       .reduce((product, num) => product * num, 1)
//   },
// }
// const resultSum = obj1.getSum.call(obj2)
// document.write(`<p>Сума obj2 (через call): ${resultSum}</p>`);
// const resultMultiply = obj2.getMultiply.apply(obj1, [3, 9])
// document.write(`<p>Добуток obj1 (через apply): ${resultMultiply}</p> <hr>`);
// =============================================================================================================
// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// =============================================================================================================
// document.write(`<h2>Задача 1</h2>`);
// =============================================================================================================
// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// =============================================================================================================
// document.write(`<h2>Задача 3</h2>`);
// class MultChecker {
//   private currentNumber: number = 0;
//   private correctAnswers: number = 0;
//   private wrongAnswers: number = 0;
//   constructor(private checkNumber: number) { }
//   generateNumber() {
//     this.currentNumber = 1 + Math.floor(Math.random() * 10)
//     return `${this.checkNumber} * ${this.currentNumber} = ?`
//   }
//   checkAnswer(userAnswer: number) {
//     const isCorrect = userAnswer === this.checkNumber * this.currentNumber
//     if (userAnswer < 0 || userAnswer > 1000) {
//       throw new Error("The number is not valid!");
//     }
//     if (isCorrect) {
//       this.correctAnswers++
//     } else
//       this.wrongAnswers++
//     return isCorrect
//   }
//   public render() {
//     document.write(`<div>`);
//     document.write(`<h3>Testing the table multiplied by ${this.checkNumber}</h3>`);
//     document.write(`<p>Correct answers: ${this.correctAnswers}</p>`);
//     document.write(`<p>Incorrect answers: ${this.wrongAnswers}</p>`);
//     document.write(`<p>Attempt: ${this.correctAnswers + this.wrongAnswers}</p>`);
//     document.write(`</div>`);
//   }
// }
// function runMain(): void {
//   const checker = new MultChecker(7)
//   const userInput = parseInt(prompt('Enter the amount of Attempt', '5')!)
//   for (let i = 0; i < userInput; i++) {
//     const example = checker.generateNumber()
//     const answer = parseInt(prompt(example) || '0')
//     if (userInput === null) {
//       throw new Error("Error");
//     }
//     if (checker.checkAnswer(answer)) alert('Correct!')
//     else alert('Mistake!')
//   }
//   checker.render()
// }
// runMain();
