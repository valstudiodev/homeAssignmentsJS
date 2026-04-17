// =============================== task 1 ======================================
// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
// const userInputValue = parseInt(prompt('Enter the number', '10')!)
// const arrNumZero = new Array(userInputValue).fill(0)

// document.write(`${arrNumZero}`)
// console.log(arrNumZero);


// =============================== task 2 ======================================
//  Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
// const input = parseInt(prompt('Enter the number', '6')!);

// const arrHalf = Math.floor(input / 2);

// const newArrNums: number[] = new Array(input)

// newArrNums.fill(1, 0, arrHalf)
// newArrNums.fill(7, arrHalf)

// document.write(newArrNums);


// =============================== task 3 ======================================
//  Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
// const inputUser = parseInt(prompt('Enter the number', '15')!)
// const middleIndex = Math.floor(inputUser / 2)

// const newArrUser: number[] = new Array(inputUser)
// newArrUser.fill(1, 0, 5)
// newArrUser.fill(7, 5)

// document.write(`${newArrUser}`)
// console.log(newArrUser);




// =============================== task 4 ======================================
// Дано масив елементів. Вивести на екран елементи, що більші за 100
// function getInputNumbers(count: number) {
//   let arrNum: number[] = []

//   for (let i = 0; i < count; i++) {
//     const inputNum = prompt('Enter the number!', '100')
//     if (inputNum === null) break
//     arrNum.push(Number(inputNum))
//   }
//   return arrNum
// }
// const inputNumbers = getInputNumbers(3)

// for (const num of inputNumbers) {
//   if (num > 100) document.write(`The numbers more than 100 : ${num}`)
// }

// document.write(`Numbers more than 100 : ${inputNumbers}`)
// console.log(inputNumbers);




// =============================== task 5 ======================================
// Дано масив елементів. Знайти добуток додатних елементів
// function getInputNumbersUser(num: number) {
//   let arrNums: number[] = []

//   for (let i = 0; i < num; i++) {
//     const input = prompt('Enter the numbers', '10')
//     if (input === null) break
//     arrNums.push(Number(input))
//   }
//   return arrNums
// }
// const inputUserNum = getInputNumbersUser(3)

// function getMultiplePositiveResult(nums: number[]) {

//   let count = 1

//   for (const num of nums) {
//     if (num > 0) {
//       count *= num
//     }
//   }
//   return count
// }
// const resultPositive = getMultiplePositiveResult(inputUserNum)

// document.write(`${resultPositive}`)
// console.log(resultPositive);



// =============================== task 6 ======================================
// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
// const arrNumbers: number[] = [2, 5, 6, 3, 8, 9, 23, 16, 27]
// const firstElement = arrNumbers[0]

// arrNumbers.forEach((num, index) => {
//   if (index > 0 && num > firstElement) {
//     arrNumbers[index] = num * 2;
//   }
// });
// document.write(`${arrNumbers}`)

// =============================== task 7 ======================================
// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
// let arrPrices = [200, 245, 150, 1500, 570, 830, 2000, 3400]

// let discountPrices: number[] = []

// arrPrices.forEach(price => {
//   if (price > 1000) {
//     price *= 0.7
//     discountPrices.push(price)
//   }
// });
// document.write(`Discounts: ${discountPrices}`);

// =============================== task 8 ======================================
//  Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

// function getArrAutoSigns(arrNums) {
//   let arrNumAuto = []

//   for (let i = 0; i < arrNums; i++) {
//     const input = prompt('Enter the auto signs', 'ABA-4827')
//     if (input === null) break
//     arrNumAuto.push(input)
//   }
//   return arrNumAuto
// }
// const arrAutoSigns = getArrAutoSigns(5)

// let arrAutoSignsWithStartA: string[] = arrAutoSigns.filter(sign =>
//   sign[0].toLowerCase() === 'a'
// )

// document.write(`Auto signs starts with A : ${arrAutoSignsWithStartA} <br>`);

// =============================== task 9 ======================================
// Дано масив імен. Сформувати масив з перших літер цих імен.
// let arrNames: string[] = ['Oleg', 'Stas', 'Devid', 'Jonh', 'Lucy']

// let newArr = arrNames.map(name => name[0])

// document.write(`${newArr} <br>`)
// console.log(newArr);


// =============================== task 10 ======================================
// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
// let arrPricesHrn: number[] = [250, 100, 300]

// let arrTaxAmount = arrPricesHrn.map(tax => tax *= 0.2)

// document.write(`${arrTaxAmount}`)
// console.log(arrTaxAmount);










