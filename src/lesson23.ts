// =================================================================================================
// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому 
// на основі номера виводиться оператор (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)
// =================================================================================================
document.write(`<h2>Задача 1</h2>`);
type Operator = 'MTC' | 'Kyivstar' | 'Lifecell' | 'Unknown'

class PhoneNumber {
  private value: string

  constructor(value: string) {
    this.value = value

    this.validate()
  }

  private validate(): void {
    const regex: RegExp = /^0\d{9}$/

    if (!regex.test(this.value)) {
      throw new Error("Invalid phone number");
    }
  }

  private getOperator(): Operator {
    const prefix = this.value.slice(0, 3)

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
        return 'Unknown'
    }
  }

  private formatNumber(): string {
    const operator = this.getOperator()
    return `${operator} ${this.value}`
  }

  [Symbol.toPrimitive](hint: string): string | number {
    if (hint === 'string') return this.formatNumber()

    if (hint === 'number') return Number(this.value)

    return this.formatNumber();

  }
}

const phoneUser = new PhoneNumber('0976123445')
const phoneUser2 = new PhoneNumber('0506753423')
const phoneUser3 = new PhoneNumber('0936661112')
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
type TypeProductData = {
  name: string,
  price: number,
  quantity: number
}
class Product_ {
  name: string;
  price: number;
  quantity: number

  constructor(name: string, price: number, quantity: number) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  render(): string {
    return `Title: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
  }
}
const product1 = new Product_('Phone', 1500, 20)
const product2 = new Product_('Laptop', 20000, 10)
const product3 = new Product_('TV', 8000, 15)
console.log(product1.render());

class Shop {
  private products: Product_[]

  constructor(products: Product_[]) {
    this.products = products
  }

  addProduct(product: Product_) {
    this.products.push(product)
  }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.products.length) {
          const product = this.products[index]
          const totalPrice = product.price * product.quantity

          const result = `<p>${product.name} - ${totalPrice}</p>`

          index++

          return {
            value: result,
            done: false
          }
        }
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}
const shop = new Shop([product1, product2, product3])

for (const item of shop) {
  document.write(`${item}`);
}


// =================================================================================================
// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
// =================================================================================================
document.write(`<h2>Задача 3</h2>`);

function* generateEvenNumbers(count: number): Generator<number> {
  let generated: number = 0

  while (generated < count) {
    const random = Math.floor(Math.random() * 100)

    if (random % 2 === 0) {
      yield random
      generated++
    }
  }
}

const genRandomnumber = generateEvenNumbers(5)

for (const num of genRandomnumber) {
  document.write(`<p>${num}</p>`);
}



// =====================================================================
// ========================= Collections ===============================
// =====================================================================
document.write(`<h1>Collections</h1>`);
// =================================================================================================
// Задача 4. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
// =================================================================================================
document.write(`<h2>Задача 4</h2>`);

const ages = [12, 15, 12, 17, 15, 15, 18, 18];

function getCountValues(arr: number[]): Map<number, number> {
  const mapStudents = new Map<number, number>()
  let max = -Infinity

  arr.forEach(age => {
    if (age > max) max = age

    mapStudents.set(age, (mapStudents.get(age) || 0) + 1)
  });

  return mapStudents
}
function showResult() {
  const students = getCountValues(ages)

  students.forEach((value, key) => {
    document.write(`<p>${key}: ${value}</p>`);
  });
}
showResult()


// =================================================================================================
// Задача 5.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
// =================================================================================================
document.write(`<h2>Задача 5</h2>`);

type Book_ = {
  title: string,
  year: number,
  author: string,
}

const books: Book_[] = [
  { title: "Clean Code", year: 2008, author: "Robert C. Martin" },
  { title: "Clean Architecture", year: 2017, author: "Robert C. Martin" },
  { title: "You Don't Know JS", year: 2015, author: "Kyle Simpson" },
  { title: "JavaScript: The Good Parts", year: 2008, author: "Douglas Crockford" },
  { title: "Eloquent JavaScript", year: 2018, author: "Marijn Haverbeke" },
  { title: "Effective TypeScript", year: 2019, author: "Dan Vanderkam" },
  { title: "JavaScript Patterns", year: 2010, author: "Stoyan Stefanov" },
  { title: "Refactoring", year: 2018, author: "Martin Fowler" },
  { title: "Refactoring UI", year: 2019, author: "Adam Wathan" },
  { title: "Design Patterns", year: 1994, author: "Erich Gamma" },
  { title: "Patterns of Enterprise Application Architecture", year: 2002, author: "Martin Fowler" },
  { title: "Domain-Driven Design", year: 2003, author: "Eric Evans" }
];

function getAmountbooks(books: Book_[]): Map<string, number> {
  const mapBooks = new Map<string, number>()

  for (const book of books) {
    const author = book.author

    mapBooks.set(author, (mapBooks.get(author) || 0) + 1)
  }

  return mapBooks
}

function showResultBooks() {
  const result = getAmountbooks(books)

  // result.forEach((value, key) => {
  //   document.write(`<p>${key} : ${value}</p>`);
  // });

  for (const [author, count] of result) {
    document.write(`<p>${author} : ${count}</p>`);
  }
}
showResultBooks()


// =================================================================================================
// Задача 6. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). 
// Підрахувати для кожного клієнта кількість відвідувань.
// =================================================================================================
document.write(`<h2>Задача 6</h2>`);
const visits = [
  "Alex",
  "John",
  "Alex",
  "Maria",
  "John",
  "Alex"
]

function getVisitsUsers(visits: string[]): Map<string, number> {
  const mapVisits = new Map<string, number>()

  for (const login of visits) {
    if (mapVisits.has(login)) {
      mapVisits.set(login, (mapVisits.get(login) || 0) + 1)
    } else
      mapVisits.set(login, 1)
  }

  return mapVisits
}

function renderInfoUsersVisits(): void {
  const resultVisits = getVisitsUsers(visits)

  for (const [name, count] of resultVisits) {
    document.write(`<p>Name: ${name}, visits: ${count}</p>`);
  }
}
renderInfoUsersVisits()


// =================================================================================================
// Задача 7. Дано масив студентів (піб, курс, факультет). 
// Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів. 
// =================================================================================================
document.write(`<h2>Задача 7</h2>`);

type Student_ = {
  fullName: string,
  course: number,
  faculty: string,
}

const students: Student_[] = [
  { fullName: "Ivan Petrenko", course: 1, faculty: "IT" },
  { fullName: "Anna Kovalenko", course: 2, faculty: "Math" },
  { fullName: "Oleh Ivanov", course: 1, faculty: "IT" },
  { fullName: "Maria Shevchenko", course: 3, faculty: "Physics" },
  { fullName: "Dmytro Bondar", course: 2, faculty: "Math" }
]

function getCountFaculty(students: Student_[]) {
  const faculties = new Set<string>()
  const courses = new Map<number, number>()

  for (const student of students) {
    faculties.add(student.faculty)
    courses.set(student.course, (courses.get(student.course) || 0) + 1)
  }

  return {
    faculties: faculties.size,
    courses
  }
}

function showCountOfStudents(): void {
  const result = getCountFaculty(students)

  result.courses.forEach((count, course) => {
    document.write(`<p>Course: ${course}, qauntity: ${count}</p>`);
  });
}
showCountOfStudents()


// =================================================================================================
// Задача 8. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.
// =================================================================================================
document.write(`<h2>Задача 8</h2>`);

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];

function getTempratures(arrTemp: number[]): Map<number, number> {
  const map = new Map<number, number>()

  arrTemp.forEach(temp => {
    const value = Math.ceil(temp)

    map.set(value, (map.get(value) || 0) + 1)
  });

  return map
}

const resultTemp = getTempratures(temperatures)

resultTemp.forEach((count, temp) => {
  document.write(`<p>Temprature: ${temp}, count: ${count}</p>`);
});


// =================================================================================================
// Задача 9 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. 
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. 
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.
// =================================================================================================
document.write(`<h2>Задача 9</h2>`);

const mathGroup = ["Ivan", "Oleh", "Anna", "Maria"]
const historyGroup = ["Oleh", "Maria", "Petro", "Sofia"]

function getStudentsGroup(group: string[]): Set<string> {
  return new Set(group)
}
const groupA = getStudentsGroup(mathGroup)
const groupB = getStudentsGroup(historyGroup)

function getIntersectionStudents(groupA: Set<string>, groupB: Set<string>) {
  return [...groupA].filter(s => groupB.has(s))
}
const studentsIntersection = getIntersectionStudents(groupA, groupB)
document.write(`<p>${studentsIntersection}</p>`);

function getUnionStudents(groupA: Set<string>, groupB: Set<string>) {
  const studentsUnion = new Set([...groupA, ...groupB])
  return studentsUnion.size
}
const studentsUnion = getUnionStudents(groupA, groupB)
document.write(`${studentsUnion}`);








// =====================================================================
// =========================== Collections =============================
// =====================================================================
// =========== union ============
const fronts = new Set(['HTML', 'CSS'])
const backs = new Set(['Node', 'HTML'])

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
const numbers = [10, 20, 30]

const iteratos = numbers[Symbol.iterator]()

// console.log(iteratos.next());
// console.log(iteratos.next());
// console.log(iteratos.next());
// console.log(iteratos.next());

for (const number of numbers) {
  // console.log(number);
}


// =====================================================================
// ================================ MAP ================================
// =====================================================================
// =========
const map = new Map()

map.set("a", 1)
map.set(123, 'number key')
map.set({ id: 1 }, "object key")

for (const [key, value] of map) {
  // console.log(key, value);
}

// =========
const map2 = new Map<string, number>([
  ["html", 80],
  ["css", 70],
]);

for (const [key, value] of map2) {
  // console.log(key, value);
}
for (const value of map2.values()) {
  // console.log(value);
}
for (const key of map2.keys()) {
  // console.log(key);
}

// =========
const map3 = new Map()

map3.set('a', 1)
map3.set('b', 2)

map3.set('a', 10)

map3.delete('b')

for (const [key, value] of map3) {
  // console.log(key, value);
}

const aValue = map3.get('a')
// console.log(aValue);

const hasA = map3.has('a')
// console.log(hasA);

const size = map3.size
// console.log(size);

map3.clear()

// console.log(map3);


// ===============
const someUsers = new Map()

someUsers.set(1, 'Alex')
someUsers.set(2, 'Jonh')
someUsers.set(3, 'Maria')

const user2 = someUsers.get(2)
// console.log('User 2:', user2);

const hasUser3 = someUsers.has(3)
// console.log('Has user 3:', hasUser3);

someUsers.delete(1)

for (const [id, name] of someUsers) {
  // console.log(id, name);
}


//  task 4
const scores = new Map<string, number>([
  ["html", 80],
  ["css", 70],
  ["js", 95],
]);

for (const [key, value] of scores) {
  // console.log(key, value);
}


// let maxKey: string | null = null
// let maxValue = -Infinity

// for (const [key, value] of scores) {
//   if (value > maxValue) {
//     maxValue = value
//     maxKey = key
//   }
// }

// console.log('MAX:', maxKey, maxValue);





// =====================================================================
// ================================ SET ================================
// =====================================================================

const set = new Set([1, 2, 2, 3, 3, 3])

for (const value of set) {
  // console.log(value);

}











// =====================================================================
// ============================ Генератори =============================
// =====================================================================
function* numberGeneration() {
  yield 10
  yield 20
  yield 30
}

const generator = numberGeneration()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


function* test() {
  console.log('A');

  yield 1

  console.log('B');

  yield 2

  console.log('C');

}

const gen = test()
// gen.next()
// gen.next()
// gen.next()


function* colors() {
  yield 'red'
  yield 'green'
  yield 'blue'
}

// console.log(colors().next());
// console.log(colors().next());
// console.log(colors().next());

for (const color of colors()) {
  // console.log(color);
}


function* generator1() {
  yield 1
  yield 2
  yield 3
}

const arr = [...generator1()]
// console.log(arr);


function* generator2() {
  yield 1
  yield 2
  yield 3
}

// const [a, b] = generator2()
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

function forOfEngine<T>(iterable: Iterable<T>, callback: (value: T, index: number) => void): void {
  const iterator = iterable[Symbol.iterator]()

  let index = 0

  while (true) {
    const result = iterator.next()

    if (result.done) break

    callback(result.value, index)
    index++
  }
}

const arrNums = [10, 20, 30]
forOfEngine(arr, (value, index) => {
  // console.log(index, value);
})

forOfEngine(colors(), (value, index) => {
  // console.log(index, value);
})



// Рівень 1 — базовий iterator
const arrNumbers = [5, 10, 15]

// task 1
function manualForOf(arr: number[]) {
  const iterator = arr[Symbol.iterator]()

  while (true) {
    const result = iterator.next()

    if (result.done) return

    // console.log(result);
  }
}
// const gen1 = manualForOf(arrNumbers)
// console.log(gen1);


// for (const item of gen1) {

// }

