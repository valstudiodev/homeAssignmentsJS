// ===============================================================================================
// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// ===============================================================================================
// ========= 1)номери рядків від 0 до половини, стовпці від 0 до половини ==========
// ========= 2)номери рядків від 0 до половини, стовпці від половини до кінця ==========
// ========= 3)номери рядків (від половини до кінця, стовпці від 0 до половини ==========
// ========= 4)номери рядків від половини до кінця , стовпці від половини до кінця ==========
document.write('<h2>Задача 1</h2>')
const matrixSquare = [
  [1, 2, 3, 4],  // first row
  [5, 6, 7, 8], // second row
  [9, 10, 11, 12], // third row
  [13, 14, 15, 16] // forth row
]

function getHalfOfMatrix(matrix: number[][]): number {
  return matrix.length / 2
}
const half = getHalfOfMatrix(matrixSquare)

function getRangeIndexes(matrix: number[][], rowStart: number, rowEnd: number, colStart: number, colEnd: number) {
  let sum = 0

  for (let r = rowStart; r < rowEnd; r++) {
    for (let c = colStart; c < colEnd; c++) {
      sum += matrix[r][c]
    }
  }
  return sum
}
const sum1 = getRangeIndexes(matrixSquare, 0, half, 0, half)
const sum2 = getRangeIndexes(matrixSquare, 0, half, half, 4)
const sum3 = getRangeIndexes(matrixSquare, half, 4, 0, half)
const sum4 = getRangeIndexes(matrixSquare, half, 4, half, 4)
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
document.write(`The sum 1 : ${sum1}<br>`)
document.write(`The sum 2 : ${sum2}<br>`)
document.write(`The sum 3 : ${sum3}<br>`)
document.write(`The sum 4 : ${sum4}<br> <hr>`)


// ========= 5)Суму парних рядків ==========
function getSumEvenRows(arr: number[][]): number {
  let totalSum: number = 0

  for (let row = 0; row < arr.length; row += 2) {
    for (let col = 0; col < arr[row].length; col++) {
      totalSum += arr[row][col]
    }
  }
  return totalSum
}
const sumEvenRows = getSumEvenRows(matrixSquare)
console.log(sumEvenRows);
document.write(`The sum of the even rows: ${sumEvenRows}<br> <hr>`)


// ========= 6)Суму непарних стовпців ==========
function getSumOddColumns(arr: number[][]): number {
  let totalSum = 0

  for (let row = 0; row < arr.length; row++) {
    for (let col = 1; col < arr[row].length; col += 2) {
      totalSum += arr[row][col]
    }
  }
  return totalSum
}
const sumOddColumns = getSumOddColumns(matrixSquare)
console.log(sumOddColumns);
document.write(`The sum of odd columns: ${sumOddColumns}<br><hr>`)


// ========= 7)У парних рядках – непарні стовпці, у непарних – парні. ==========
function getCheckerboardSum(arr: number[][]) {
  let sumOddColInEvenRows: number = 0
  let sumEvenColInOddRows: number = 0

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      const isEvenRow = row % 2 === 0
      const isEvenCol = col % 2 === 0

      if (isEvenRow && !isEvenCol) {
        sumOddColInEvenRows += arr[row][col]
      }
      if (!isEvenRow && isEvenCol) {
        sumEvenColInOddRows += arr[row][col]
      }
    }
  }
  return {
    sumOddCols: sumOddColInEvenRows,
    sumEvenCols: sumEvenColInOddRows
  }
}
const checkboardSum = getCheckerboardSum(matrixSquare)
console.log(checkboardSum);
document.write("<ul>");
for (const [key, value] of Object.entries(checkboardSum)) {
  document.write(`<li><strong>${key}:</strong> ${value}</li>`);
}
document.write("</ul> <hr><hr><hr>");


// ===============================================================================================
// ===============================================================================================
// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// ===============================================================================================
// ===============================================================================================
document.write('<h2>Задача 2</h2>')
const storeProfitData = [
  [100, 120, 110, 200, 150, 240, 70],   // магазин 1
  [200, 180, 160, 680, 130, 120, 110], // магазин 2
  [130, 150, 80, 120, 170, 340, 100], // магазин 3
]

// ========= 1) загальний прибуток кожного масиву  тиждень; ==========

function getSumFromArrStoreProfitData(arr: number[][]) {
  let sum: number[] = []

  for (const row of arr) {
    let rowSum: number = 0

    for (const num of row) {
      rowSum += num
    }
    sum.push(rowSum)
  }
  return sum
}
const sumArrRow = getSumFromArrStoreProfitData(storeProfitData)
console.log(sumArrRow);
document.write(`загальний прибуток за кожен тиждень : ${sumArrRow}<br><hr>`)

// ========= 2)загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.); ==========

function getSumByColumns(arr: number[][]): number[] {
  const columnsSum: number[] = []

  const numCols = arr[0].length
  const numRows = arr.length

  for (let col = 0; col < numCols; col++) {
    let totalIncomeForEachDay = 0;

    for (let row = 0; row < numRows; row++) {
      totalIncomeForEachDay += arr[row][col]
    }
    columnsSum.push(totalIncomeForEachDay)
  }
  return columnsSum;
}
const dailyTotalSum = getSumByColumns(storeProfitData)
console.log(dailyTotalSum);
document.write(`прибуток по днях: ${dailyTotalSum}<br><hr>`)

// ========= 3) загальний прибуток за робочі дні ==========

function getTotalIncomeByDays(arr: number[][], daysCount: number = 5): number[] {
  const incomes: number[] = [];

  for (let week = 0; week < arr.length; week++) {
    // Перевірка: якщо в тижні менше днів, ніж ми хочемо порахувати
    if (arr[week].length < daysCount) {
      console.warn(`У тижні ${week + 1} недостатньо даних!`);
      incomes.push(0); // Або інша логіка обробки помилки
      continue;
    }

    let sum = 0;
    // Цикл іде до daysCount (наприклад, 5 для робочих днів)
    for (let day = 0; day < daysCount; day++) {
      sum += arr[week][day];
    }
    incomes.push(sum);
  }

  return incomes;
}
const incomeDays = getTotalIncomeByDays(storeProfitData, 5);
console.log(incomeDays);
document.write(`Total income for days: ${incomeDays}<br><hr>`)

function getWeeklyProfit(prices: number[][], limit: number = 5): number {
  return prices.reduce((total, row) => {
    const rowSum = row.slice(0, limit).reduce((acc, num) => acc + num, 0);
    return total + rowSum;
  }, 0);
}
const getIncomeWeekly = getWeeklyProfit(storeProfitData, 5);
console.log(getIncomeWeekly);
document.write(`Total income for working days from each store: ${getIncomeWeekly}<br><hr>`)

// ========= 4) загальний прибуток за вихідні дні ==========

function getWeekendsProfit(prices: number[][]) {
  let sumIncomeWeekendsDays = 0
  for (let week = 0; week < prices.length; week++) {

    for (let store = 5; store < prices[week].length; store++) {
      sumIncomeWeekendsDays += prices[week][store]
    }
  }
  return sumIncomeWeekendsDays
}
const incomeWeekends = getWeekendsProfit(storeProfitData)
console.log(incomeWeekends);
document.write(`Total income for Weekends from each store: ${incomeWeekends}<br><hr>`)

// ========= 5) максимальний прибуток за середу ==========

function getIncomeForWednesday(prices: number[][]) {
  let sumWednesday = 0
  for (let week = 0; week < prices.length; week++) {
    sumWednesday += prices[week][2]
  }
  return sumWednesday
}
const incomWednesday = getIncomeForWednesday(storeProfitData)
console.log(incomWednesday);
document.write(`Total income for Wednesday from each store: ${incomWednesday}<br><hr>`)

// ========= 6)сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200 ==========

function getArrWithValuesMoreThan200(arr: number[][]): number[] {
  return arr.flat(1).filter(value => value > 200);
}
const arrValueMore200 = getArrWithValuesMoreThan200(storeProfitData);
console.log(arrValueMore200);

// ========= 7)відсортувати кожен тиждень за зростанням ==========

function sortedValuesByIncrease(arr: number[][]): number[][] {
  const arrIncreaseInValues = arr.map(num => [...num].sort((num1, num2) => num1 - num2));
  return arrIncreaseInValues;
}
const sortedPricesByIncrease = sortedValuesByIncrease(storeProfitData)
console.log(sortedPricesByIncrease);

// ========= 8)відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
// тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків ==========

function sortByMax(arr: number[][]): number[][] {
  return [...arr].sort((rowA, rowB) => {
    const maxA = Math.max(...rowA);
    const maxB = Math.max(...rowB);

    return maxB - maxA;
  });
}
const elementsInDescendingOrder = sortByMax(storeProfitData)
console.log(elementsInDescendingOrder);

// ========= 9)упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох
// рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло,
// який з елементів повинен іти раніше). ==========

function sortedByTotal(arr: number[][]) {
  return [...arr].sort((arr1: number[], arr2: number[]) => {
    const arrA = arr1.reduce((sum, num) => sum + num, 0)
    const arrB = arr2.reduce((sum, num) => sum + num, 0)
    return arrB - arrA
  })
}
const sortedElements = sortedByTotal
console.log(sortedElements(storeProfitData));


// ===============================================================================================
// ===============================================================================================
// Задача 3.  Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати.
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
// ===============================================================================================
// ===============================================================================================
function createEmptyField(rowCount: number = 6, colCount: number = 6) {
  const field: number[][] = []

  for (let i = 0; i < rowCount; i++) {
    const row = new Array(colCount).fill(0)
    field.push(row)
  }
  return field
}

function placeShipsRandomly(rowCount: number, colCount: number, shipCount: number) {
  const arr = createEmptyField(rowCount, colCount)

  for (let i = 0; i < shipCount;) {
    const ranRowIndex = Math.floor(Math.random() * rowCount)
    const ranColIndex = Math.floor(Math.random() * colCount)
    if (arr[ranRowIndex][ranColIndex] === 0) {
      arr[ranRowIndex][ranColIndex] = 1
      i++
    }
  }
  return arr
}

function processGame(rowCount: number, colCount: number, shipCount: number, bulletsCount: number) {
  const gameProcess = placeShipsRandomly(rowCount, colCount, shipCount)

  let leftShipsNumber = shipCount
  let leftBulletsNumber = bulletsCount

  while (leftBulletsNumber > 0 && leftShipsNumber > 0) {
    const userRow = parseInt(prompt(`Залишилось снарядів: ${leftBulletsNumber}. Введіть рядок (1-${rowCount}):`)!) - 1;
    const userCol = parseInt(prompt(`Залишилось кораблів: ${leftShipsNumber}. Введіть стовпець (1-${colCount}):`)!) - 1;

    if (gameProcess[userRow][userCol] === 1) {
      alert('Влучив!')
      gameProcess[userRow][userCol] = 0
      leftShipsNumber--
    } else alert('Мимо!')
    leftBulletsNumber--
  }
  if (leftShipsNumber === 0) alert('Вітаємо! Ви потопили всі кораблі!')
  else alert('Гра закінчена. Снаряди вичерпано.')

  return gameProcess
}
const game = processGame(6, 6, 5, 10)
console.log(game);





















