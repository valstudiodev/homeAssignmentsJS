"use strict";
// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
// ===============================================================================================================
document.write(`<h2 style="font-size:40px;"> Задача 1</h2>`);
const arrBubbleSort = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30));
function bubbleSort(arr) {
    let changed;
    let rightIndex = arr.length - 1;
    let countChanged = 0;
    do {
        changed = false;
        for (let i = 1; i <= rightIndex; i++) {
            if (arr[i - 1] > arr[i]) {
                let current = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = current;
                countChanged++;
                changed = true;
            }
        }
        rightIndex--;
    } while (changed);
    document.write(`обмінів під час сортування бульбашкою: ${countChanged}`);
}
bubbleSort(arrBubbleSort);
document.write(`<p>${arrBubbleSort}</p><hr>`);
// ===============================================================================================================
// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
// ===============================================================================================================
document.write(`<h2 style="font-size:40px;"> Задача 2</h2>`);
const arrCoctailSort = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30));
function coctailSortSwitch(arr) {
    let changed;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let countChanged = 0;
    while (leftIndex < rightIndex) {
        changed = false;
        for (let i = leftIndex; i <= rightIndex; i++) {
            if (arr[i - 1] > arr[i]) {
                const current = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = current;
                countChanged++;
                changed = true;
            }
        }
        rightIndex--;
        if (!changed)
            return;
        changed = false;
        for (let i = rightIndex; i >= leftIndex; i--) {
            if (arr[i - 1] > arr[i]) {
                const current = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = current;
                countChanged++;
                changed = true;
            }
        }
        leftIndex++;
        if (!changed)
            break;
    }
    console.log(`${countChanged}`);
    document.write(`обмінів під час сортування змішуванням: ${countChanged}`);
}
coctailSortSwitch(arrCoctailSort);
document.write(`<p>${arrCoctailSort}</p><hr>`);
// ===============================================================================================================
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
// ===============================================================================================================
document.write(`<h2 style="font-size:40px;"> Задача 3</h2>`);
const arrInsertationSort = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30));
function insertationSortSwitch(arr) {
    let countChanged = 0;
    for (let k = 1; k < arr.length; k++) {
        const current = arr[k];
        let i = k - 1;
        while (i >= 0 && arr[i] > current) {
            arr[i + 1] = arr[i];
            i--;
            countChanged++;
        }
        arr[i + 1] = current;
    }
    document.write(`обмінів під час сортування включеннями: ${countChanged}<br>`);
}
insertationSortSwitch(arrInsertationSort);
document.write(`<p>${arrInsertationSort}</p><hr><hr><hr>`);
// =================================================================================================================================
// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
// =================================================================================================================================
// ============== bubbleSortTable ===========
document.write(`<h2 style="font-size:40px;"> Задача 4</h2>`);
// ============= function draw table ===========
function drawTable(arr, title) {
    let table = `<h4>${title}</h4><table border="1" style="border-collapse: collapse; text-align: center; margin-bottom: 10px;"><tr>`;
    for (const num of arr) {
        table += `<td style="padding: 10px; width: 30px;">${num}</td>`;
    }
    table += `</tr></table>`;
    document.write(table);
}
document.write(`<h3>Bubble Sort</h3>`);
const arr1 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
function bubbleSortTable(arr) {
    let changed;
    let rightIndex = arr.length - 1;
    let countChanged = 0;
    let step = 1;
    drawTable(arr, "Initial Position");
    do {
        changed = false;
        for (let i = 1; i <= rightIndex; i++) {
            if (arr[i - 1] > arr[i]) {
                let current = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = current;
                countChanged++;
                document.write(`Switch ${arr[i]} and ${arr[i - 1]}<br>`);
                changed = true;
            }
        }
        step++;
        rightIndex--;
        drawTable([...arr], `Step ${step} (Right)`);
    } while (changed);
    document.write(`<p><b>The total number of exchanges: ${countChanged}</b></p><hr>`);
}
bubbleSortTable(arr1);
// ============== coctail sort ===============
document.write(`<h3>Coctail sort</h3>`);
const arr2 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
function coctailSort(arr) {
    let changed;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let step = 1;
    let countChanged = 0;
    drawTable(arr, "Initial Position");
    while (leftIndex < rightIndex) {
        changed = false;
        for (let i = leftIndex; i <= rightIndex; i++) {
            if (arr[i - 1] > arr[i]) {
                const current = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = current;
                countChanged++;
                changed = true;
            }
        }
        rightIndex--;
        drawTable([...arr], `Step ${step} (Right)`);
        step++;
        if (!changed)
            return;
        changed = false;
        for (let i = rightIndex; i >= leftIndex; i--) {
            if (arr[i - 1] > arr[i]) {
                const current = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = current;
                countChanged++;
                changed = true;
            }
        }
        leftIndex++;
        drawTable([...arr], `Крок ${step} (Left)`);
        step++;
        if (!changed)
            break;
    }
    document.write(`<p><b>The total number of exchanges: ${countChanged}</b></p> <hr>`);
}
coctailSort(arr2);
// ============== insertationSort sort ===============
document.write(`<h3>Insertation Sort</h3>`);
const arr3 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
function insertationSort(arr) {
    let countChanged = 0;
    let step = 1;
    drawTable(arr, "Initial Position");
    for (let k = 1; k < arr.length; k++) {
        const current = arr[k];
        let i = k - 1;
        while (i >= 0 && arr[i] > current) {
            arr[i + 1] = arr[i];
            i--;
            countChanged++;
        }
        arr[i + 1] = current;
        if (countChanged) {
            drawTable([...arr], `Step ${step}: insert ${current}`);
            step++;
        }
    }
}
insertationSort(arr3);
document.write(`<hr><hr><hr>`);
// =================================================================================================================================
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
// =================================================================================================================================
document.write(`<h2 style="font-size:40px;"> Задача 5</h2>`);
let names = ['Ivan', 'Petr', 'Andrew', 'Oleg', 'Olga', 'Maria', 'Marina'];
function insertationSortAlphabet(arr) {
    for (let k = 1; k < arr.length; k++) {
        const current = arr[k];
        let i = k - 1;
        while (i >= 0 && arr[i].localeCompare(current) > 0) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = current;
    }
    return arr;
}
const sortedArrAlphabet = insertationSortAlphabet(names);
function binarySearch(arr, searchElement, start, end) {
    // if (start <= end) {
    //   const middle = Math.floor((start + end) / 2);
    //   if (arr[middle] === searchElement) return middle;
    //   if (arr[middle] < searchElement)
    //     return binarySearch(arr, searchElement, middle + 1, end);
    //   if (arr[middle] > searchElement)
    //     return binarySearch(arr, searchElement, start, middle - 1);
    //   else return -1
    // }
    if (start > end)
        return -1;
    const middle = Math.floor((start + end) / 2);
    const cmp = arr[middle].localeCompare(searchElement);
    if (cmp === 0)
        return middle;
    if (cmp < 0)
        return binarySearch(arr, searchElement, middle + 1, end);
    return binarySearch(arr, searchElement, start, middle - 1);
}
console.log(binarySearch(sortedArrAlphabet, 'Olga', 0, sortedArrAlphabet.length - 1));
document.write(`Index of nameOlga : ${binarySearch(sortedArrAlphabet, 'Olga', 0, sortedArrAlphabet.length - 1)}`);
// =================================================================================================================================
// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
// =================================================================================================================================
document.write(`<h2 style="font-size:40px;"> Задача 6</h2>`);
let namesArr = ['Ivan', 'Petr', 'Andrew', 'Ina', 'Jonh', 'Oleg', 'Olga', 'Maria', 'Marina'];
function insertationSortLength(arr) {
    for (let k = 1; k < arr.length; k++) {
        const current = arr[k];
        let i = k - 1;
        while (i >= 0 && arr[i].length > current.length) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = current;
    }
    return arr;
}
const sortedArrLength = insertationSortLength([...namesArr]);
console.log(`Sorted array: ${sortedArrLength}`);
document.write(`<p>Sorted array: ${sortedArrLength}</p>`);
function binarySearchLongestName(arr, searchElement) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        const middleLength = arr[middle].length;
        if (middleLength === searchElement)
            return middle;
        if (middleLength < searchElement)
            start = middle + 1;
        else
            end = middle - 1;
    }
    return -1;
}
const targetIndex = binarySearchLongestName(sortedArrLength, 5);
if (targetIndex !== -1) {
    const foundName = sortedArrLength[targetIndex];
    document.write(`<p>Yes, there is a name that is 5 characters long: <b>${foundName}</b> index in sorted array: ${targetIndex} </p>`);
}
else {
    document.write(`No names longer than 5 characters were found.`);
}
// =================================================================================================================================
// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
// Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
// =================================================================================================================================
document.write(`<h2 style="font-size:40px;"> Задача 7</h2>`);
function generateField(rowCount, colCount) {
    const matrix = [];
    for (let row = 0; row < rowCount; row++) {
        const rowArr = [];
        for (let col = 0; col < colCount; col++) {
            rowArr.push(1 + Math.floor(Math.random() * 7));
        }
        matrix.push(rowArr);
    }
    return matrix;
}
function countSundays(arr) {
    let sundaysDays = [];
    const sunday = 7;
    for (let row = 0; row < arr.length; row++) {
        let countSundays = 0;
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] === sunday) {
                countSundays++;
            }
        }
        sundaysDays.push(countSundays);
    }
    return sundaysDays;
}
function printTable(arr) {
    document.write(`<table border="2px">`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<tr>`);
        for (let j = 0; j < arr[i].length; j++) {
            const color = arr[i][j] === 7 ? 'style="background-color: #ffcccc; text-align:center"' : '';
            document.write(`<td ${color} style="padding: 5px; width: 30px; text-align:center">${arr[i][j]}</td>`);
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}
function printSundaysCount(arr) {
    arr.forEach((count, index) => document.write(`Row ${index + 1}: ${count} sundays <br>`));
}
function runMain() {
    const matrixField = generateField(4, 8);
    printTable(matrixField);
    const sundayStats = countSundays(matrixField);
    printSundaysCount(sundayStats);
}
runMain();
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function binarySearchBoolean(arr: number[], searchElement: number) {
//   let start = 0
//   let end = arr.length - 1
//   while (start <= end) {
//     const middle = Math.floor((start + end) / 2)
//     if (arr[middle] === searchElement) return middle
//     if (arr[middle] < searchElement) start = middle + 1
//     if (arr[middle] > searchElement) end = middle - 1
//   }
//   return -1
// }
// // const searchElement = binarySearchBoolean(nums, 4);
// // console.log(searchElement);
// function binarySearch(arr: number[], searchElement: number, start: number, end: number) {
//   if (start <= end) {
//     const middle = Math.floor((start + end) / 2)
//     if (arr[middle] === searchElement) return middle
//     if (arr[middle] < searchElement)
//       return binarySearch(arr, searchElement, middle + 1, end)
//     if (arr[middle] > searchElement)
//       return binarySearch(arr, searchElement, start, middle - 1)
//     else return -1
//   }
// }
// const search = binarySearch(nums, 5, 0, nums.length - 1)
// console.log(search);
// const users = [
//   {
//     id: 1,
//     name: "Val",
//     age: 34,
//     balance: 1000,
//     active: true,
//     getInfo() {
//       return `${this.name} (${this.age}) - ${this.balance}`;
//     },
//     toString() {
//       return `${this.name}: ${this.balance}`;
//     },
//     valueOf() {
//       return this.balance;
//     }
//   },
//   {
//     id: 2,
//     name: "John",
//     age: 28,
//     balance: 800,
//     active: false,
//     getInfo() {
//       return `${this.name} (${this.age}) - ${this.balance}`;
//     },
//     toString() {
//       return `${this.name}: ${this.balance}`;
//     },
//     valueOf() {
//       return this.balance;
//     }
//   },
//   {
//     id: 3,
//     name: "Val",
//     age: 22,
//     balance: 500,
//     active: true,
//     getInfo() {
//       return `${this.name} (${this.age}) - ${this.balance}`;
//     },
//     toString() {
//       return `${this.name}: ${this.balance}`;
//     },
//     valueOf() {
//       return this.balance;
//     }
//   }
// ];
// // 1. Виведи info кожного користувача через getInfo()
// const userInfo = users.forEach(user => console.log(user.getInfo()));
// // 2. Знайди суму всіх balance
// const totalBalance = users.reduce((prevSum, user) => prevSum += user.valueOf(), 0);
// console.log(totalBalance);
// // 3. Знайди першого користувача з ім’ям "Val"
// const findUser = users.find((user) => user.name.toLowerCase() === 'val')
// console.log(findUser);
// // 4. Отримай масив тільки active === true
// const activeUsers = [...users]
//   .filter((user) => user.active === true)
// console.log(activeUsers);
// // 5. Збільш balance всім на +100
// const updatedUsers = users.map(user => ({
//   ...user,
//   balance: user.balance + 100
// }));
// console.log(updatedUsers);
// // 6. Додай нового користувача (будь-які дані)
// const newUser = {
//   id: 4,
//   name: 'Vadim',
//   age: 30,
//   balance: 700,
//   active: false,
//   getInfo() {
//     return `${this.name} (${this.age}) - ${this.balance}`;
//   },
//   toString() {
//     return `${this.name}: ${this.balance}`;
//   },
//   valueOf() {
//     return this.balance;
//   },
// }
// // const updateUsers = [...users, newUser];
// // console.log(updateUsers);
// users.push(newUser);
// console.log(users);
// // 7. Видали користувача з id = 2
// const updateUsers = users.filter((user) => user.id !== 2)
// console.log(updateUsers);
// // 8. toString
// const message = updateUsers.forEach(user => console.log(user.toString()));
