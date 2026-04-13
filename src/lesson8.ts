// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати
// до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку),
// хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

// let arrayGrades = [3, 3, 8, 6, 10]

// let sum = 0

// for (let i = 0; i < arrayGrades.length; i++) {
//   if (arrayGrades[i] < 0 || arrayGrades[i] > 10) {
//     throw new Error("Error");
//   }
//   sum += arrayGrades[i]
// }

// let avarageGrade = sum / arrayGrades.length
// console.log(avarageGrade.toFixed(1));

// if (avarageGrade < 0 || avarageGrade > 10) {
//   throw new Error("Error");
// } else
//   if (avarageGrade < 3) console.log("двійочник");

//   else if (avarageGrade < 6) console.log("трійочник");

//   else if (avarageGrade < 9) console.log("хорошист")

//   else console.log("відмінник")

// console.log(avarageGrade);

// let sumGrades = 0

// function getGrades(count: number): number[] {
//   let grades: number[] = []
//   for (let i = 0; i < count; i++) {
//     const input = parseFloat(prompt(`Введіть оцінку № ${i + 1}`, '10')!)
//     if (isNaN(input) || input < 1 || input > 10) throw new Error("Error");
//     grades.push(input)
//   }
//   return grades
// }
// let myGrades = getGrades(6)

// for (let a = 0; a < myGrades.length; a++) {
//   sumGrades += myGrades[a]
// }

// let avarageGrade = sumGrades / myGrades.length

// let category = ''
// if (avarageGrade <= 3) category = ('двійочник');
// else if (avarageGrade <= 6) category = ('трійочник');
// else if (avarageGrade <= 8) category = ('хорошист');
// else category = ('відмінник');

// // document.write(`Category: ${category}, grade: ${avarageGrade}`)
// console.log(`Category: ${category}, grade: ${avarageGrade.toFixed(1)}`);



// =======================================================================================
/* Задача 2.
Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
номери днів, протягом яких кількість відвідувачів була меншою за 20;
номери днів, коли кількість відвідувачів була мінімальною;
номери днів, коли кількість відвідувачів була максимальною;
загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
*/



// =======================================================================================
// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
// function getStudentsNames(nameStudent: number): string[] {
//   let arrayNames: string[] = []
//   for (let i = 0; i < nameStudent; i++) {
//     let inputName = prompt('Enter the student name', 'Alex')!
//     if (inputName === null) break

//     arrayNames.push(inputName)
//   }
//   return arrayNames
// }
// let arrayStudents = getStudentsNames(3)
// console.log(`${arrayStudents}`);

// let countIvan = 0

// for (let i = 0; i < arrayStudents.length; i++) {
//   if (arrayStudents[i].toLowerCase() === 'ivan')
//     countIvan++
// }
// console.log(`Count of name Ivan = ${countIvan}`);




// =======================================================================================
/*
Задача 4. Дано послідовність номерів автомобілів.Підрахувати кількість номерів, які :
починаються на букву «А» (для отримання першої літери можна також звернутися до номера авто як string
ніби як до масиву за номером 0 - autoNum[0]-перша літера);
•	перша і остання літери співпадають;
•	складаються з більше ніш 5 символів;
*/

// let arrAutoSigns = ['ABA-4827', 'MNK-7391', 'TRA-2056', 'AKN-9184', 'LAL-5630']

// let countChar = 0

// let sameLetters = ''

// for (let i = 0; i < arrAutoSigns.length; i++) {
//   if (arrAutoSigns[i][0].toLowerCase() === 'a') {
//     countChar++
//   }
//   if (arrAutoSigns[i][0].toLowerCase() === arrAutoSigns[i][2].toLowerCase())
//     console.log(`${arrAutoSigns[i][0]} - ${arrAutoSigns[i][2]}`);
//   if (arrAutoSigns[i] > 5)
//     console.log(arrAutoSigns[i]);




//   // for (let a = 0; a < arrAutoSigns[i].length; a++) {
//   //   if (arrAutoSigns[i][a] > 5) {

//   //   }
//   // }
// }

// console.log(countChar);




// =======================================================================================
/* Задача 5
 Дано послідовність оцінок учня. Підрахувати кількість:
1)	двійок
2)	кількість хороших оцінок (добре, відмінно);
3)	кількість оцінок, які нижче середнього.
*/
// function getInputGradeStudents(grade: number): string[] {
//   let arrGrades: string[] = []
//   for (let i = 0; i < grade; i++) {
//     const input = parseInt(prompt('Enter the grade...', '8')!)
//     if (input === null) break
//     // else if (input < 1 || input > 10) throw new Error("Error");

//     arrGrades.push(input)
//   }
//   return arrGrades
// }

// let studentsGrades = getInputGradeStudents(5)

// let countLowGrade = 0
// let countMediumGrade = 0
// let countHightGrade = 0

// if (condition) {

// }


// =======================================================================================
// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах).
// Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).


// =======================================================================================
/*Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
за весь рік;
у першій половині року;
у другій половині року;
за літо;
за ІІ квартал;
за парні місяці (з парними номерами);
за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
*/


// =======================================================================================
/*Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума
(елементи заповнюються випадковим чином значеннями від -500 до 500).
 Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться).
 Знаходити сумарний виграш.
*/


// =======================================================================================


