"use strict";
// =================================================================================================
// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому 
// на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
// =================================================================================================
document.write(`<h2>Задача 1</h2>`);
class PhoneNumber {
    value;
    constructor(value) {
        this.value = value;
        this.validate();
    }
    validate() {
        const regex = /^0\d{9}$/;
        if (!regex.test(this.value)) {
            throw new Error("Invalid phone number");
        }
    }
    getOperator() {
        const prefix = this.value.slice(0, 3);
        switch (prefix) {
            case "050":
            case "066":
            case "095":
                return "MTC";
            case "096":
            case "097":
            case "098":
                return "Kyivstar";
            case "063":
            case "073":
            case "093":
                return "Lifecell";
            default:
                return 'Unknown';
        }
    }
    formatNumber() {
        const operator = this.getOperator();
        return `${operator} ${this.value}`;
    }
    [Symbol.toPrimitive](hint) {
        if (hint === 'string')
            return this.formatNumber();
        if (hint === 'number')
            return Number(this.value);
        return this.formatNumber();
    }
}
const phoneUser = new PhoneNumber('0976123445');
const phoneUser2 = new PhoneNumber('0506753423');
const phoneUser3 = new PhoneNumber('0936661112');
document.write(String(phoneUser));
document.write(`<div>${phoneUser2}</div>`);
document.write(`<div>${phoneUser3}</div>`);
console.log(Number(phoneUser));
console.log(Number(phoneUser2));
console.log(Number(phoneUser3));
// =================================================================================================
// Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). 
// Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
// =================================================================================================
document.write(`<h2>Задача 2</h2>`);
class Product_ {
    name;
    price;
    quantity;
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    render() {
        return `Title: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }
}
const product1 = new Product_('Phone', 1500, 20);
const product2 = new Product_('Laptop', 20000, 10);
const product3 = new Product_('TV', 8000, 15);
console.log(product1.render());
class Shop {
    products;
    constructor(products) {
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.products.length) {
                    const product = this.products[index];
                    const totalPrice = product.price * product.quantity;
                    const result = `<p>${product.name} - ${totalPrice}</p>`;
                    index++;
                    return {
                        value: result,
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
}
const shop = new Shop([product1, product2, product3]);
for (const item of shop) {
    document.write(`${item}`);
}
// =================================================================================================
// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
// =================================================================================================
document.write(`<h2>Задача 3</h2>`);
function* generateEvenNumbers(count) {
    let generated = 0;
    while (generated < count) {
        const random = Math.floor(Math.random() * 100);
        if (random % 2 === 0) {
            yield random;
            generated++;
        }
    }
}
const genRandomnumber = generateEvenNumbers(5);
for (const num of genRandomnumber) {
    document.write(`<p>${num}</p>`);
}
// =====================================================================
// ========================= Collections ===============================
// =====================================================================
document.write(`<h1>Collections</h1>`);
// =================================================================================================
// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
// =================================================================================================
document.write(`<h2>Задача 4</h2>`);
const ages = [12, 15, 12, 17, 15, 15, 18];
// =========== union ============
const fronts = new Set(['HTML', 'CSS']);
const backs = new Set(['Node', 'HTML']);
// const allSkills = fronts.union(backs)
// console.log([...allSkills]);
// ========== intersection ============
const frontend = new Set(["HTML", "CSS", "JS"]);
const backend = new Set(["Node", "Python", "JS"]);
// const common = frontend.intersection(backend)
// console.log([...common]);
// =========== difference ===========
const mySkills = new Set(["JS", "TS", "CSS", "HTML"]);
const requiredSkills = new Set(["CSS", "HTML"]);
// const uniqueSkills = mySkills.difference(requiredSkills)
// console.log([...uniqueSkills]);
// ================= symmetricDifference ==================
const packageA = new Set(["React", "Redux", "Axios"]);
const packageB = new Set(["React", "Vue", "Axios"]);
// const uniqueInEach = packageA.symmetricDifference(packageB)
// console.log([...packageB]);
// =================== isSubsetOf ==================
const localDbs = new Set(["Postgres", "Redis"]);
const allDbs = new Set(["Postgres", "MongoDB", "Redis", "MySQL"]);
// console.log(localDbs.isSubsetOf(allDbs));
// =============== isSupersetOf ==================
const frameworkSuite = new Set(["React", "Vue", "Angular", "Svelte"]);
const teamStack = new Set(["React", "Vue"]);
// console.log(frameworkSuite.isSupersetOf(teamStack));
//  ==================== isDisjointFrom ===================
const appleDevices = new Set(["iPhone", "MacBook"]);
const androidDevices = new Set(["Pixel", "Galaxy"]);
// console.log(appleDevices.isDisjointFrom(androidDevices));
const userRoles = new Map();
const alex = { name: "Alex", age: 25 };
const mary = { name: "Mary", age: 20 };
userRoles.set(alex, 'admin');
userRoles.set(mary, 'editor');
// console.log(userRoles.get(alex));
// console.log(userRoles.size);
for (const [user, role] of userRoles.entries()) {
    // console.log(`${user.name} - ${role}`);
}
// =====================================================================
// ============================= Symbols ===============================
// =====================================================================
// const id1 = Symbol.for('user')
// const id2 = Symbol.for('user')
// const user1 = {
//   id: 1,
// }
// user1.id = 100
// console.log(user1.id);
// const id = Symbol('id')
// const user2 = {
//   name: "Val",
//   [id]: 1,
// }
// user2[id] = 120
// console.log(user2[id]);
// const secret = Symbol('secret')
// const user3 = {
//   name: 'Jonh',
//   [secret]: '12345',
// }
// user3[secret] = '56778'
// console.log(user3[secret]);
// console.log(Object.keys(user3));
// console.log(Object.getOwnPropertySymbols(user3));
// console.log(JSON.stringify(user3));
// const user4 = {
//   name: 'Peter',
//   id: 5
// }
// // console.log(Object.keys(user4));
// // console.log(Object.values(user4));
// const sym: symbol = Symbol('app_secure_key')
// console.log(sym.description);
// const product = {
//   name: 'Laptop',
//   price: 25000,
//   [Symbol.toPrimitive](hint: "number" | 'string' | 'default') {
//     if (hint === "number") return this.price
//     if (hint === "string") return `${this.name}: ${this.price}UAH`
//     return this.price
//   }
// }
// console.log(+product);
// console.log(`${product}`);
// const queue = {
//   tasks: ['Task1', 'Task2'],
//   [Symbol.iterator]() {
//     let index = 0
//     return {
// next: () => ({
//         value: this.tasks[index++],
//         done: index > this.tasks.length
//       })
//     }
//   }
// }
// for (const task of queue.tasks) {
//   console.log(task);
// }
//  task 1 API Response (Junior)
// const response1 = {
//   status: 'sucsess',
//   data: {
//     user: {
//       id: 1,
//       name: 'Jonh',
//       email: 'jonh@gmail.com',
//     }
//   }
// }
// const {
//   data: {
//     user: {
//       id: userId,
//       name: userName,
//       email: userEmail,
//     }
//   }
// } = response1
// // console.log(userId);
// // console.log(userName);
// // console.log(userEmail);
// // task 3 API Array(Middle)
// const response2 = {
//   users: [
//     {
//       id: 1,
//       profile: {
//         name: 'Jonh'
//       }
//     },
//     {
//       id: 2,
//       profile: {
//         name: 'Anna'
//       }
//     }
//   ]
// }
// let {
//   users: [
//     {
//       profile: {
//         name: firstUserName
//       }
//     },
//     {
//       profile: {
//         name: secondUserName
//       }
//     }
//   ]
// } = response2
// // console.log(firstUserName);
// // console.log(secondUserName);
// //  task 4 Default Values (Middle)
// type Settings = {
//   language: string;
//   theme?: string;
// }
// const settings: Settings = {
//   language: 'en',
//   // theme: 'null'
// }
// const { language, theme = 'light' } = settings
// // console.log(settings.language);
// // console.log(theme);
// //  task 7 Hard
// const response3 = {
//   data: {
//     products: [
//       {
//         id: 1,
//         info: {
//           title: 'Laptop',
//           price: 1200,
//         },
//       },
//       {
//         id: 2,
//         info: {
//           title: 'Phone',
//           price: 800,
//         },
//       },
//     ],
//   },
// };
// const {
//   data: {
//     products: [
//       {
//         info: {
//           title: firstProductTitle
//         }
//       },
//       {
//         info: {
//           title: secondProductPrice
//         }
//       }
//     ]
//   }
// } = response3
// console.log(firstProductTitle);
// console.log(secondProductPrice);
//  task 8
// const user1 = undefined
// const { name } = user
// console.log(user1);
// =====================================================================
// ============================= Ітератори =============================
// =====================================================================
const numbers = [10, 20, 30];
const iteratos = numbers[Symbol.iterator]();
// console.log(iteratos.next());
// console.log(iteratos.next());
// console.log(iteratos.next());
// console.log(iteratos.next());
for (const number of numbers) {
    // console.log(number);
}
// =====================================================================
// ============================ Генератори =============================
// =====================================================================
function* numberGeneration() {
    yield 10;
    yield 20;
    yield 30;
}
const generator = numberGeneration();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
function* test() {
    console.log('A');
    yield 1;
    console.log('B');
    yield 2;
    console.log('C');
}
const gen = test();
// gen.next()
// gen.next()
// gen.next()
function* colors() {
    yield 'red';
    yield 'green';
    yield 'blue';
}
// console.log(colors().next());
// console.log(colors().next());
// console.log(colors().next());
for (const color of colors()) {
    // console.log(color);
}
function* generator1() {
    yield 1;
    yield 2;
    yield 3;
}
const arr = [...generator1()];
// console.log(arr);
function* generator2() {
    yield 1;
    yield 2;
    yield 3;
}
const [a, b] = generator2();
// console.log(a, b);
// =====================
// type IteratorResult<T> = {
//   value: T;
//   done: boolean;
// };
// type Iterator<T> = {
//   next(): IteratorResult<T>;
// };
// type Iterable<T> = {
//   [Symbol.iterator](): Iterator<T>;
// };
function forOfEngine(iterable, callback) {
    const iterator = iterable[Symbol.iterator]();
    let index = 0;
    while (true) {
        const result = iterator.next();
        if (result.done)
            break;
        callback(result.value, index);
        index++;
    }
}
const arrNums = [10, 20, 30];
forOfEngine(arr, (value, index) => {
    // console.log(index, value);
});
forOfEngine(colors(), (value, index) => {
    // console.log(index, value);
});
// Рівень 1 — базовий iterator
const arrNumbers = [5, 10, 15];
// task 1
function manualForOf(arr) {
    const iterator = arr[Symbol.iterator]();
    while (true) {
        const result = iterator.next();
        if (result.done)
            return;
        // console.log(result);
    }
}
// const gen1 = manualForOf(arrNumbers)
// console.log(gen1);
// for (const item of gen1) {
// }
