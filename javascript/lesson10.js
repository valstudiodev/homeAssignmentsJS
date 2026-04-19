"use strict";
// function historyPriceValueDocuments(value: number) {
//   const arrDocuments: number[] = []
//   for (let i = 0; i < value; i++) {
//     const randomNum = Math.floor(Math.random() * 10000)
//     if (randomNum !== NaN) {
//       arrDocuments.push(randomNum)
//     }
//   }
//   return arrDocuments
// }
// const priceDocuments = historyPriceValueDocuments(10000)
// console.log(priceDocuments);
// =====================================================================================
// =====================================================================================
const historyPriceValueDocuments = Array.from({ length: 5 }, () => Math.floor(Math.random() * 2000));
document.write(`History prices valuable documents: ${historyPriceValueDocuments} <br>`);
console.log(historyPriceValueDocuments);
// ====== 1 ======
const docMoreThan1000 = historyPriceValueDocuments.filter(doc => doc > 1000);
document.write(`Valuable documents more than 1000 : ${docMoreThan1000} <br>`);
console.log(docMoreThan1000);
// ====== 2 ======
const indexHigherMoreThan1000 = historyPriceValueDocuments.reduce((acc, num, index) => {
    if (num > 1000) {
        acc.push(index);
    }
    return acc;
}, []);
document.write(`Indexes of valuable documents more than 1000 : ${indexHigherMoreThan1000} <br>`);
console.log(indexHigherMoreThan1000);
// ====== 3 ======
const listPriceHigherPrev = historyPriceValueDocuments.filter((price, index, arr) => index > 0 && price > arr[index - 1]);
document.write(`List of valuable documents than more previous values : ${listPriceHigherPrev}<br>`);
console.log(listPriceHigherPrev);
// ====== 4 ======
const maxPrice = historyPriceValueDocuments.reduce((a, b) => Math.max(a, b));
console.log(maxPrice);
const valuePricesPercentMax = historyPriceValueDocuments.map(price => Math.round(price / maxPrice * 100));
document.write(`Valuable price percent : ${valuePricesPercentMax}<br>`);
console.log(valuePricesPercentMax);
// ====== 5 ======
const countChangePrice = historyPriceValueDocuments.reduce((acc, price, index, arr) => (index > 0 && price !== arr[index - 1]) ? acc + 1 : acc, 0);
document.write(`Count chamgin prices : ${countChangePrice} <br>`);
console.log(countChangePrice);
// ====== 6 ======
const isPriceLess1000 = historyPriceValueDocuments.some(price => price < 1000);
document.write(`The price less than 1000 : ${isPriceLess1000} <br>`);
console.log(isPriceLess1000);
// ====== 7 ======
const isAllPricesMore1000 = historyPriceValueDocuments.every(price => price > 1000);
document.write(`The prices more than 1000 : ${isAllPricesMore1000} <br>`);
console.log(isAllPricesMore1000);
// ====== 8 ======
const totalPriceMoreThan1000 = historyPriceValueDocuments.reduce((acc, price) => (price > 1000 ? acc + 1 : acc), 0);
document.write(`The count of prices than more 1000 : ${totalPriceMoreThan1000} <br>`);
console.log(totalPriceMoreThan1000);
// ====== 9 ======
let countSumPrices = 0;
historyPriceValueDocuments.forEach(price => {
    if (price > 1000)
        return countSumPrices += price;
});
document.write(`The amount of prices than more 1000 : ${countSumPrices} <br>`);
console.log(countSumPrices);
// ====== 10 ======
const firstPriceMore1000 = historyPriceValueDocuments.find(price => price > 1000);
document.write(`The first price more than 1000 : ${firstPriceMore1000} <br>`);
console.log(firstPriceMore1000);
// ====== 11 ======
const firstPriceIndexMore1000 = historyPriceValueDocuments.findIndex(index => index > 1000);
document.write(`The first index than more 1000 : ${firstPriceIndexMore1000} <br>`);
console.log(firstPriceIndexMore1000);
// ====== 12 ======
const lastPriceMore1000 = historyPriceValueDocuments.findLast(price => price > 1000);
document.write(`The last price than more 1000 : ${lastPriceMore1000} <br>`);
console.log(lastPriceMore1000);
// ====== 13 ======
const lastPriceIndexMore1000 = historyPriceValueDocuments.findLastIndex(index => index > 1000);
document.write(`The last index than more 1000 : ${lastPriceIndexMore1000}`);
console.log(lastPriceIndexMore1000);
