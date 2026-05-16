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
// let user = {
//   name: 'Valentyn',
//   lastName: 'Tkachenko',
//   age: 35,
//   favoriteGames: ['Stalker', 'Resident Eviel', 'The last of us'],
//   marks: [10, 7, 8, 9, 4, 10, 10],
//   sayHi: function () {
//     console.log(`Hello ${this.name} ${this.lastName}`);
//   },
//   sayBye: function () {
//     console.log(`Bye ${this.name} ${this.lastName}`);
//   },
//   greeting: function () {
//     this.sayHi()
//     this.sayBye()
//   },
//   getAvarage: function () {
//     let s = 0
//     for (let i = 0; i < this.marks.length; i++) {
//       s += this.marks[i]
//     }
//     return s / this.marks.length
//   },
//   getScoreNum: function (searchScore: number) {
//     return this.marks.reduce((prevCount, score) => score === searchScore ? prevCount + 1 : prevCount, 0)
//   },
//   toString: function () {
//     return `${this.name} ${this.lastName}, Age: ${this.age}, Marks: ${this.marks}`
//   },
//   valueOf: function () {
//     return this.getAvarage()
//   }
// };
// user.sayHi();
// user.sayBye();
// // user.greeting()
// console.log(user.getAvarage().toFixed(1));
// console.log(user.getScoreNum(10));
// let s = user.toString()
// console.log(s);
// let num = user.valueOf()
// console.log(num.toFixed(1));
// console.log(Object.values(user));
// Task 1 — User Factory
// function createUser(name: string, age: number) {
//   return {
//     name: name,
//     age: age,
//     getInfo: function () {
//       return `Name: ${this.name}, Age: ${this.age}`
//     },
//   };
// };
// let user1 = createUser('Val', 35);
// console.log(user1.getInfo());
// let user2 = createUser('Jonh', 30);
// console.log(user2.getInfo());
// Task 2 — Car Factory
// function createCar(brand: string, speed: number) {
//   return {
//     brand: brand,
//     speed: speed,
//     showSpeed: function () {
//       return `The speed: ${this.speed}`
//     },
//     changeSpeed: function (newSpeed: number) {
//       this.speed = newSpeed
//     },
//     toString: function () {
//       return `Brand: ${this.brand}, Speed: ${this.speed}`
//     },
//   };
// };
// let car1 = createCar('BMW', 250);
// console.log(car1.showSpeed());
// console.log(car1.toString());
// let car2 = createCar('Kia', 230);
// car2.changeSpeed(300);
// console.log(car2.showSpeed());
// console.log(car2.toString());
// Task 3 — Bank Account
// function createBankAccount(owner: string, balance: number) {
//   return {
//     owner: owner,
//     balance: balance,
//     deposit: function (amount: number) {
//       this.balance += amount
//     },
//     withdraw: function (amount: number) {
//       if (this.balance < amount) {
//         console.log('Not enough money');
//         return;
//       }
//       this.balance -= amount
//     },
//     showBalance: function () {
//       return console.log(`${this.owner}: ${this.balance}$`);
//     },
//   };
// };
// let account1 = createBankAccount('Valentyn', 1000);
// account1.showBalance();
// account1.deposit(500);
// account1.showBalance();
// account1.withdraw(200);
// account1.showBalance();
// account1.withdraw(800);
// account1.showBalance();
// account1.withdraw(800);
// account1.showBalance();
// Task 4 — Counter
// function createCounter() {
//   let count = 0
//   return {
//     increment() {
//       count++
//     },
//     decrement() {
//       count--
//     },
//     reset() {
//       count = 0
//     },
//     show() {
//       console.log(count);
//     },
//   };
// };
// let counter1 = createCounter()
// counter1.increment()
// counter1.increment()
// counter1.show()
// Task 5 — Playlist
// type PlaylistType = {
//   name: string;
//   songs: string[];
//   addSongs(song: string): void;
//   removeSong(song: string): void;
//   showSongs(): void;
// }
// function createPlaylist(name: string) {
//   return {
//     name: name,
//     songs: [],
//     addSongs: function (song: string) {
//       this.songs.push(song);
//     },
//     removeSong: function (song: string) {
//       this.songs = this.songs.filter(item => item !== song)
//     },
//     showSongs() {
//       console.log(`Playlist: ${this.name}`);
//       this.songs.forEach((song, index) => {
//         console.log(`${index + 1}. ${song}`);
//       })
//     }
//   }
// }
// const playlist = createPlaylist('My favorite');
// console.log(playlist);
// playlist.addSongs('Linking Park')
// playlist.addSongs('Emenim')
// playlist.addSongs('The Offspring')
// playlist.showSongs()
// playlist.removeSong('The Offspring')
// playlist.showSongs()
// ========================================================
// task 1
// type PlayerType = {
//   name: string,
//   score: number,
//   showScore: () => void,
//   addScore: (points: number) => void,
// }
// function Player(this: PlayerType, name: string, score: number) {
//   this.name = name,
//     this.score = score,
//     this.showScore = function () {
//       console.log(`Score: ${this.score}`);
//     },
//     this.addScore = function (points: number) {
//       this.score += points
//     }
// }
// const player1 = new Player('Val', 100)
// player1.showScore()
// player1.addScore(50)
// player1.showScore()
// Task 2 — Bank Account
// type BankAccountType = {
//   owner: string,
//   balance: number,
//   deposit: (amount: number) => void,
//   withdraw: (amount: number) => void,
//   showBalance: () => void
// }
// function BankAccount(this: BankAccountType, owner: string, balance: number) {
//   this.owner = owner,
//     this.balance = balance,
//     this.deposit = function (amount: number) {
//       this.balance += amount
//     },
//     this.withdraw = function (amount: number) {
//       if (amount > this.balance) {
//         throw new Error("Not enough money");
//       }
//       this.balance -= amount
//     },
//     this.showBalance = function () {
//       console.log(`${this.owner} balance: ${this.balance}`);
//     }
// }
// const acc1 = new BankAccount('Val', 1000)
// console.log(acc1);
// acc1.deposit(500);
// acc1.showBalance();
// acc1.withdraw(800);
// acc1.showBalance();
// task 3 Playlist
// type PlaylistType = {
//   name: string,
//   songs: string[],
//   addSong: (song: string) => void,
//   removeSong: (song: string) => void,
//   showSongs: () => void,
// }
// function Playlist(this: PlaylistType, name: string) {
//   this.name = name,
//     this.songs = [],
//     this.addSong = function (song: string) {
//       this.songs.push(song)
//     },
//     this.removeSong = function (song: string) {
//       this.songs = this.songs.filter(item => item !== song)
//     },
//     this.showSongs = function () {
//       this.songs.forEach((song, index) => console.log(`${index + 1}. ${song} `));
//     }
// }
// const playlist = new Playlist('My playlist')
// console.log(playlist);
// playlist.addSong('Numb');
// playlist.addSong('My heart');
// playlist.addSong('In the end');
// playlist.removeSong('My heart')
// playlist.showSongs();
// task - playlist prototype
// type PlaylistType = {
//   name: string,
//   songs: string[],
// }
// function Playlist(this: PlaylistType, name: string) {
//   this.name = name,
//     this.songs = []
// }
// Playlist.prototype.addSong = function (song: string) {
//   this.songs.push(song);
// }
// Playlist.prototype.removeSong = function (song: string) {
//   this.songs = this.songs.filter(item => item !== song)
// }
// Playlist.prototype.showSongs = function () {
//   this.songs.forEach((song, index) => console.log(`${index + 1}. ${song} `));
// }
// const playlist = new Playlist('My playlist')
// console.log(playlist);
// playlist.addSong('My love')
// playlist.addSong('My friend')
// playlist.addSong('At the work')
// playlist.addSong('Mother')
// playlist.removeSong('At the work')
// playlist.showSongs()
// ==============================================================
// ======================== classes ========================
// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }
// const user1 = new User("Val", 33);
// user1.sayHello();
// ======================
// class BankAccount {
//   owner: string;
//   balance: number;
//   constructor(owner: string, balance: number) {
//     this.owner = owner;
//     this.balance = balance;
//   };
//   deposit(amount: number) {
//     this.balance += amount
//   };
//   withdraw(amount: number) {
//     if (amount > this.balance) {
//       throw new Error("Not enough money");
//     }
//     this.balance -= amount
//   };
//   showBalance() {
//     console.log(`${this.owner} balance: ${this.balance}`);
//   }
// }
// const acc1 = new BankAccount('Val', 1000)
// console.log(acc1);
// acc1.deposit(500);
// acc1.withdraw(800);
// acc1.withdraw(700);
// acc1.showBalance();
// ====================================
// Task — Todo List (Class OOP)
// class Todolist {
//   title: string;
//   tasks: string[];
//   constructor(title: string) {
//     this.title = title;
//     this.tasks = []
//   };
//   addTask(task: string) {
//     this.tasks.push(task)
//   };
//   removeTask(task: string) {
//     // this.tasks = this.tasks.filter(item => item !== task)
//     const index = this.tasks.indexOf(task)
//     if (index !== -1)
//       this.tasks.splice(index, 1)
//   };
//   showTask() {
//     this.tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
//   };
//   clearTask() {
//     this.tasks.length = 0
//   }
// }
// const task1 = new Todolist('My Day')
// task1.addTask('Learn JS');
// task1.addTask('Show a lesson JS')
// task1.addTask('Learn English');
// task1.addTask('Cook Dinner');
// task1.removeTask('Cook Dinner');
// // // task1.clearTask()
// task1.showTask()
// console.log(task1);
// ==============================================================
// let obj1 = {
//   myVar: 77,
//   method1: function () {
//     let func = function () {
//       console.log(this);
//       document.write(this.myVar);
//     }
//     return func
//   },
// }
// let f = obj1.method1()
// f()
// let obj1 = {
//   names: ['Ivan', 'Petro', 'Olga', 'Hanna'],
//   poritions: ['Driver', 'Manager', 'Programmer', 'Director'],
//   showNames: function () {
//     this.names.forEach((name, index) => {
//       document.write(`
//             ${name} ${this.poritions && this.poritions[index]} <br>
//         `);
//     });
//   },
// }
// obj1.showNames()
// ==============================================================
// =============== call / apply =================
// let obj1 = {
//   prop1: 11,
//   prop2: 22,
//   showProp: function () {
//     document.write(this.prop1);
//   },
//   getSum: function (val1: number, val2: number) {
//     return this.prop1 + val1 + val2
//   }
// }
// // obj1.showProp()
// let obj2 = {
//   prop1: 21,
//   prop2: 10,
// }
// // obj1.showProp.call(obj2)
// let s = obj1.getSum.call(obj2, 10, 7)
// document.write(s);
// const user = {
//   name: "Val",
//   age: 35,
// };
// const user2 = {
//   name: 'Stas',
//   age: 30,
// }
// function showUser(city: string, country: string) {
//   console.log(`Name: ${this.name}, Age: ${this.age}, from: ${city}, ${country}`);
// }
// showUser.call(user, 'Mariupol', 'Ukraine');
// showUser.apply(user2, ['Kyiv', 'Ukraine']);
// ==============================================================
// ================== bind ======================
// const user = {
//   name: "Val"
// };
// function showUser() {
//   console.log(this.name);
// }
// const newFunc = showUser.bind(user);
// newFunc();
// const user = {
//   name: "Val",
//   show() {
//     console.log(this.name);
//   }
// };
// setTimeout(user.show.bind(user), 2000);
// // Task 1
// const user = {
//   name: "Alex"
// };
// function sayHello(this: typeof user) {
//   console.log(`Hello ${this.name}`);
// }
// sayHello.call(user)
// // Task 2
// const player = {
//   name: "Mike"
// };
// function showInfo(this: typeof player, age: number) {
//   console.log(this.name, age);
// }
// const boundShowInfo = showInfo.bind(player)
// boundShowInfo(30)
// // task 3
// const data = {
//   title: "Result:"
// };
// function sum(this: typeof data, a: number, b: number) {
//   console.log(this.title, a + b);
// }
// sum.apply(data, [2, 3])
