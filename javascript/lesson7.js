"use strict";
// ======================= task 0 ============================
// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
// function getPeriodOfYear(month: number): string {
//   let season: string
//   switch (month) {
//     case 12: case 1: case 2:
//       return "Winter";
//     case 3: case 4: case 5:
//       return "Spring";
//     case 6: case 7: case 8:
//       return "Summer";
//     case 9: case 10: case 11:
//       return "Autamn";
//     default:
//       throw new Error("Error");
//   }
// }
// const p = document.createElement('p');
// p.textContent = `${getPeriodOfYear(5)}`;
// document.body.appendChild(p);
// ======================= task 1 ============================
// Створити функцію, яка за номером місяця повертає його назву.
// function getNameOfTheMonth(month: number): string {
//   let monthName: string
//   switch (month) {
//     case 1: return 'January'
//     case 2: return 'Febuary'
//     case 3: return 'Marth'
//     case 4: return 'April'
//     case 5: return 'May'
//     case 6: return 'June'
//     case 7: return 'July'
//     case 8: return 'August'
//     case 9: return 'September'
//     case 10: return 'October'
//     case 11: return 'November'
//     case 12: return 'December'
//     default:
//       throw new Error("Error");
//   }
// }
// const p = document.createElement('p')
// p.textContent = `${getNameOfTheMonth(5)}`
// document.body.appendChild(p);
// ======================= task 2 ============================
// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
// function isWorkingDay(day: number): string {
//   switch (day) {
//     case 1: return "Working day"
//     case 2: return "Working day"
//     case 3: return "Working day"
//     case 4: return "Working day"
//     case 5: return "Working day"
//     case 6: return "Day off"
//     case 7: return "Day off"
//     default:
//       throw new Error("Error");
//   }
// }
// const p = document.createElement('p')
// p.textContent = `${isWorkingDay(6)}`
// document.body.appendChild(p);
// ======================= task 3 ============================
// Створити окремі функції, які для 4 чисел знаходять: 1)суму; 2)добуток; 3)середнє арифметичне; 4)мінімальне значення.
// function getSumOfFourNumber(num1: number, num2: number, num3: number, num4: number): number {
//   return num1 + num2 + num3 + num4
// }
// const getSumOfFourNumber = (a: number, b: number, c: number, d: number) => {
//   return a + b + c + d
// }
// console.log(`${getSumOfFourNumber(23, 14, 40, 56)}`);
// const p = document.createElement('p')
// document.body.appendChild(p)
// p.textContent = `Sum result: ${getSumOfFourNumber(2, 2, 2, 2)}`
// function getMuiltipleOfFourNum(num1: number, num2: number, num3: number, num4: number): number {
//   return num1 * num2 * num3 * num4
// }
// function getAvgOfFourNum(num1: number, num2: number, num3: number, num4: number): number {
//   return (num1 + num2 + num3 + num4) / 4
// }
// function getMinNumber(num1: number, num2: number, num3: number, num4: number): number {
//   let minNum = num1
//   if (num2 < num1) minNum = num2
//   if (num3 < num1) minNum = num3
//   if (num4 < num1) minNum = num4
//   return minNum
// }
// console.log(`${getMinNumber(34, 8, 38, 8)}`);
// const p = document.createElement('p')
// document.body.appendChild(p)
// p.textContent = `Sum result: ${getSumOfFourNumber(2, 2, 2, 2)}`
// p.textContent = `Multiple result: ${getMuiltipleOfFourNum(2, 2, 2, 2)}`
// p.textContent = `Avarage number: ${getAvgOfFourNum(10, 10, 10, 10).toFixed(2)}`
// p.textContent = `Minimum number: ${getMinNumber(23, 56, 13, 24)}`
// ======================= task 4 ============================
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів:
// кількість парних, кількість додатних, кількість більших за 100.
// function getResultOfTreeNumber(a: number, b: number, c: number): object {
//   let even = 0
//   let positive = 0
//   let over100 = 0
//   if (a % 2 === 0) even++
//   if (a > 0) positive++
//   if (a > 100) over100++
//   if (b % 2 === 0) even++
//   if (b > 0) positive++
//   if (b > 100) over100++
//   if (c % 2 === 0) even++
//   if (c > 0) positive++
//   if (c > 100) over100++
//   return { even, positive, over100 }
// }
// const stats = getResultOfTreeNumber(123, 2, 2)
// console.log(stats);
// ======================= task 5 ============================
/* Створити окремі функції, які переводять:
1) Сантиметри у дюйми;
2) Кілограми у фунти;
3) Кілометри у милі.
*/
// const CM_TO_INCH = 0.3937;
// const KG_TO_POUND = 2.2046;
// const KM_TO_MILE = 0.6214;
// function getInchesFromCm(cm: number): number {
//   if (cm < 0) throw new Error("Error");
//   return cm * CM_TO_INCH
// }
// function getPoundsFromKg(kg: number): number {
//   if (kg < 0) throw new Error("Error");
//   return kg * KG_TO_POUND
// }
// function getMilesFromKm(km: number): number {
//   if (km < 0) throw new Error("Error");
//   return km * KM_TO_MILE
// }
// const p = document.createElement('p')
// document.body.appendChild(p)
// p.textContent = `Inches: ${getInchesFromCm(400).toFixed(2)}`
// p.textContent = `Pounds: ${getPoundsFromKg(10).toFixed(2)}`
// p.textContent = `Miles: ${getMilesFromKm(10).toFixed(1)}`
// console.log(`Inches: ${getInchesFromCm(400).toFixed(2)}`);
// console.log(`Pounds: ${getPoundsFromKg(10).toFixed(2)}`);
// console.log(`Miles: ${getMilesFromKm(10).toFixed(1)}`);
// ======================= task 6 ============================
// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців
// (таблиця заповнюється заданим фіксованим повідомленням).
// function createCustomTable(rows: number, columns: number, text: string): void {
//   const table = document.createElement('table')
//   document.body.appendChild(table)
//   table.style.width = '100%'
//   table.style.border = '2px solid #000'
//   table.style.borderCollapse = 'collapse'
//   table.style.textAlign = 'center'
//   for (let r = 0; r < rows; r++) {
//     const tr = document.createElement('tr')
//     table.appendChild(tr)
//     tr.style.height = '60px'
//     tr.style.border = '1px solid #000'
//     for (let c = 0; c < columns; c++) {
//       const td = document.createElement('td')
//       tr.appendChild(td)
//       td.textContent = `${text}`
//       td.style.border = '1px solid #000'
//     }
//   }
// }
// createCustomTable(5, 4, 'Hi Java Script')
// ======================= task 7 ============================
// function showRandomImage(img1, img2, img3, img4) {
//   const images = [img1, img2, img3, img4]
//   const randomImg = Math.floor(Math.random() * images.length)
//   const selectedImgUrl = images[randomImg]
// }
// document.write(`<h3>Ваше випадкове зображення: </h3>`)
// document.write(`<img src="../lesson_07/img/${showRandomImage(img1, img2, img3, img4)}">`)
// ======================= task 8 ============================
