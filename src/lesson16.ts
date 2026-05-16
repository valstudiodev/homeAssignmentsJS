//  Task 1. Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.
document.write(`<h2>Task 2</h2>`);
type ItemType = {
  name: string;
  weight: number;
}

class Backpack {
  #weight: number = 0;
  #items: ItemType[] = [];
  constructor() {
    this.#weight = 0;
    this.#items = [];
  }
  addItem(name: string, itemWeight: number): void {
    if (this.#weight + itemWeight <= 10) {
      const newItem: ItemType = {
        name,
        weight: itemWeight,
      }
      this.#items.push(newItem);
      this.#weight += itemWeight;
      console.log(` Додано: ${name} (${itemWeight}кг)`);
    } else
      throw new Error(`Неможливо додати "${name}". Перевищення ліміту ваги!`);
  }
  get showWeight(): number {
    return this.#weight
  }
  toString() {
    return this.#items.map(item => `${item.name} (${item.weight}kg)`).join(', ');
  }
}
const myBackpack = new Backpack()
myBackpack.addItem('Laptop', 5);
myBackpack.addItem('Books', 4);
myBackpack.addItem('Bottle of water', 1);
document.write(`<p>Загальна вага: ${myBackpack.showWeight}</p>`);
document.write(myBackpack.toString());



// Task 3. Клас із полями #ingredients і #orders. Замовлення можливі, якщо є інгредієнти.
document.write(`<h2>Task 3</h2>`);
type IngredientType = {
  name: string;
  amount: number;
}
class Pizzeria {
  #ingredients: IngredientType[];
  #orders: string[];

  constructor() {
    this.#ingredients = [];
    this.#orders = [];
  }
  addIngredients(name: string, amount: number) {
    if (name && amount > 0) {
      const existing = this.#ingredients.find(item => item.name.toLowerCase() === name.toLowerCase());

      if (existing) {
        existing.amount += amount;
      } else
        this.#ingredients.push({ name: name.toLowerCase(), amount });
    }
    document.write(`<p>Додано інгредієнт: ${name}, (${amount}gr)</p><hr>`);
  }
  createOrder(dishName: string, needsIngredients: string, requiredAmount: number = 1): void {
    const ingredient = this.#ingredients.find(item => item.name.toLowerCase() === needsIngredients.toLowerCase());
    if (!ingredient || ingredient.amount < requiredAmount) {
      document.write(`<p>Неможливо приготувати "${dishName}".Недостатньо інгредієнта: ${needsIngredients}</p><hr>`);
      return;
    }
    ingredient.amount -= requiredAmount;
    this.#orders.push(dishName);
    document.write(`<p>Замовлення прийнято: ${dishName}.Використано ${requiredAmount}г ${needsIngredients}</p><hr>`);
  }
  get ordersHistory(): string[] {
    return [...this.#orders];
  }
  toString() {
    return this.#ingredients.map(item => (`${item.name}: ${item.amount}г`)).join(' | ') || "Склад порожній";
  }
}
const myPizza = new Pizzeria()
// ==============
myPizza.addIngredients('Dough', 2000);
myPizza.addIngredients('Tomato', 500);
myPizza.addIngredients('Cheese', 300);
// ==============
myPizza.createOrder('Papperoni', 'cheese', 200)
myPizza.createOrder('Margarita', 'tomato', 150)
// ==============
document.write(`<p>${myPizza.ordersHistory}</p>`);
document.write(myPizza.toString());














// =============================================================
// class User {
//   #age = 0; // Приватне поле

//   constructor(age: number) {
//     this.#age = age
//   }

//   // Геттер: повертає значення
//   get age() {
//     return this.#age;
//   }
//   // Сеттер: встановлює значення з перевіркою
//   set age(value: number) {
//     if (value < 0 || value > 120) {
//       console.error("Некоректний вік!");
//       return;
//     }
//     this.#age = value;
//   }
//   showAge() {
//     console.log(`${ this.#age }`);
//   }
// }

// const user = new User(25);
// user.showAge()
// user.age = 25; // Викликається set age(25)
// console.log(user.age); // Викликається get age() -> 25


// =============================================================










// ======================================================
// class Password {
//   #password: string;

//   constructor(password: number) {
//     this.#password = password;
//   }

//   setPassword(newPassword: string): void {
//     if (newPassword.length >= 6) {
//       this.#password = newPassword;
//       console.log("✅ Пароль успішно оновлено.");
//     } else
//       console.error("❌ Помилка: Пароль має містити мінімум 6 символів.");
//   }
//   checkPassword(candidate: string): boolean {
//     return this.#password === candidate
//   }
// }


// class BankAccount {
//   public name: string;
//   #money: number;

//   constructor(name: string, money: number) {
//     this.#money = money;
//     this.name = name;
//   }
//   deposit(amount: number) {
//     if (amount > 0) {
//       this.#money += amount
//     }
//   }
//   withdraw(amount: number) {
//     if (amount <= this.#money) {
//       this.#money -= amount
//     }
//   }
//   get getMoney() {
//     return this.#money
//   }
// }

// const user1 = new BankAccount('Val', 1000);
// user1.deposit(300)
// user1.withdraw(500)
// console.log(user1.getMoney);

// const user3 = new Password('1234567')
// console.log(user3.checkPassword('123456'));
// ======================
// task 1
// class Temperature {
//   #celsius: number;
//   constructor(celsius: number) {
//     this.#celsius = celsius
//   }
//   set setTemperature(value: number) {
//     if (value < -273.15) {
//       console.log('The temperature is too low');
//       return
//     }
//     this.#celsius = value
//   }
//   get getTemperature() {
//     return this.#celsius
//   }
//   toFahrenheit() {
//     return this.#celsius * (9 / 5) + 32
//   }
// }
// const temp = new Temperature(100)
// temp.setTemperature = -270
// console.log(temp.getTemperature);
// console.log(temp.toFahrenheit());

// ======================
// task 2
// class Player {
//   #name: string;
//   #health: number;

//   constructor(name: string, health: number) {
//     this.#health = Math.min(Math.max(health, 0), 100)
//     this.#name = name;
//   }
//   takeDamage(value: number) {
//     this.#health = Math.max(this.#health - value, 0);
//     console.log(`${ this.#name } отримав ${ value } шкоди.Поточне здоров'я: ${this.#health}`);
//   }
//   health(value: number) {
//     this.#health = Math.min(this.#health + value, 100)
//     console.log(`${this.#name} полікувався на ${value}. Поточне здоров'я: ${this.#health}`);
//   }
//   get totalHealth() {
//     return `Player: ${this.#name}, Health: ${this.#health}`;
//   }
// }
// const player1 = new Player('Val', 50)
// player1.takeDamage(60)
// player1.takeDamage(60)
// player1.health(200)
// player1.totalHealth

// ======================
// task 3 ShoppingCart
// class ShoppingCart {
//   #items: string[];
//   constructor() {
//     this.#items = [];
//   }
//   addItem(item: string): void {
//     if (item.length > 0) {
//       this.#items.push(item)
//       console.log(`✅ Додано: ${item}`);
//     } else
//       console.log('Item incorrect!');
//   }
//   removeItem(item: string): void {
//     this.#items = this.#items.filter(i => i !== item)
//   }
//   showItems() {
//     return this.#items
//   }
//   get totalItems() {
//     return this.#items.length
//   }
// }
// const cart1 = new ShoppingCart();
// cart1.addItem('laptop');
// cart1.addItem('Pan');

// // cart1.removeItem('Pan')
// console.log(cart1.showItems());
// console.log(cart1.totalItems);
// console.log(cart1);


// task 7 UserAccount
// class UserAccount {
//   #email: string;
//   #password: string;

//   constructor(email: string, password: string) {
//     this.#email = email;
//     this.#password = password;
//   }
//   changeEmail(newEmail: string): void {
//     if (newEmail.includes('@')) {
//       this.#email = newEmail
//       console.log("✅ Email успішно змінено.");
//     } else
//       console.error("❌ Помилка: Email має містити символ '@'.");
//   }
//   changePassword(newPassword: string): void {
//     if (newPassword.length > 8) {
//       this.#password = newPassword
//       console.log("✅ Пароль оновлено.");
//     } else
//       console.error("❌ Помилка: Пароль має бути не менше 8 символів.");
//   }
//   get email(): string {
//     return this.#email
//   }
// }
// const user1 = new UserAccount('test@example.com', 'secure123')

// user1.changeEmail('wrong-email.com')
// user1.changePassword('123');
// user1.changeEmail('new-user@gmail.com')
// user1.changePassword('my-new-long-password')
// console.log(user1.email);