"use strict";
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//       * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// рік випуску
// вартість сайту
// type SponsorsType = {
//   firstName: string,
//   lastName: string,
//   investmentAmount: number,
// };
// type WebsiteType = {
//   companyName: string,
//   ownerName: string,
//   sponsors: SponsorsType[],
//   releaseYear: number,
//   price: number,
// };
// let siteList: WebsiteType[] = [
//   {
//     companyName: 'Tech Vision',
//     ownerName: 'Jonh Smith',
//     sponsors: [
//       {
//         firstName: 'David',
//         lastName: 'Guetta',
//         investmentAmount: 20000,
//       },
//       {
//         firstName: 'Oscar',
//         lastName: 'Vold',
//         investmentAmount: 12000,
//       },
//     ],
//     releaseYear: 2025,
//     price: 8000,
//   },
//   {
//     companyName: 'Universal',
//     ownerName: 'Alex Oconner',
//     sponsors: [
//       {
//         firstName: 'Brian',
//         lastName: 'Disel',
//         investmentAmount: 50000,
//       },
//       {
//         firstName: 'Malcolm',
//         lastName: 'Fisher',
//         investmentAmount: 25000,
//       },
//     ],
//     releaseYear: 2008,
//     price: 15000,
//   },
//   {
//     companyName: 'Galaxy',
//     ownerName: 'Bob Sconer',
//     sponsors: [
//       {
//         firstName: 'Ben',
//         lastName: 'Marshal',
//         investmentAmount: 38000,
//       },
//       {
//         firstName: 'Oleg',
//         lastName: 'Venom',
//         investmentAmount: 18000,
//       },
//       {
//         firstName: 'Benjamin',
//         lastName: 'Franclin',
//         investmentAmount: 60000,
//       },
//     ],
//     releaseYear: 2005,
//     price: 46000,
//   },
// ];
// Знайти:
// ================================
// 1) загальну вартість усіх сайтів
// ================================
// document.write(`<h3>Задача 1</h3> `);
// function getTotalPriceSites(arr: number[]) {
//   let totalPrice = 0
//   for (const site of siteList) {
//     totalPrice += site.price
//   }
//   return totalPrice
// };
// const totalPriceSites = siteList.reduce((prevSum, site) => prevSum += site.price, 0)
// console.log(totalPriceSites);
// document.write(`<p>Total sum: ${totalPriceSites} </p>`);
// ==========================================================
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// ==========================================================
// function getSitesCreatedBetween2000And2009(arr: WebsiteType[]) {
//   const sitesCreatedBetween2000And2009 = arr.filter((year) => year.releaseYear >= 2000 && year.releaseYear <= 2009);
//   return sitesCreatedBetween2000And2009;
// }
// const sitesCreated2000and2009 = getSitesCreatedBetween2000And2009(siteList);
// console.log(sitesCreated2000and2009);
// =========================================================================
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// =========================================================================
// function getAmountOfSitesInvestmentAmountMore10000(arr: WebsiteType[]) {
//   let investmentAmountMoreThan100000 = 0
//   for (const site of arr) {
//     const sum = site.sponsors.reduce((prevSum, item) => prevSum + item.investmentAmount, 0)
//     if (sum > 100000)
//       investmentAmountMoreThan100000++
//   }
//   return investmentAmountMoreThan100000;
// }
// const sumInvestmentAmount = getAmountOfSitesInvestmentAmountMore10000(siteList);
// console.log(sumInvestmentAmount);
// document.write(`<p>The sum of invest amount > 100000 : ${sumInvestmentAmount}</p>`);
// ===================================================================================================
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// ===================================================================================================
// function getListOfSponsors(arr: WebsiteType[]) {
//   const sponsorsList: string[] = []
//   arr.forEach(site => {
//     site.sponsors.forEach(sponsor => {
//       sponsorsList.push(`${sponsor.firstName} ${sponsor.lastName}`)
//     });
//   });
//   return sponsorsList;
// }
// const listOfSponsors = getListOfSponsors(siteList);
// console.log(listOfSponsors);
// document.write(`<p>${listOfSponsors.concat(', ')}</p>`);
// ===========================================
// 5) знайти рік, коли прибуток був найбільшим
// ===========================================
// ====== reduce ======
// function getYearWithHigtherIncome(arr: WebsiteType[]) {
//   const higtherPrice = arr.reduce((acc, item) => {
//     return item.price > acc.price ? item : acc
//   });
//   return higtherPrice;
// }
// const priceHigther = getYearWithHigtherIncome(siteList)
// console.log(priceHigther.releaseYear);
// document.write(`<p>The price the biggest in : ${priceHigther.releaseYear} year</p>`);
// ============================================
// 6) упорядкувати список за спаданням прибутку
// ============================================
// function getDecliningProfits(arr: WebsiteType[]) {
//   const decliningProfits = [...arr].sort((a, b) => b.price - a.price);
//   return decliningProfits;
// }
// const profitsDeclining = getDecliningProfits(siteList)
// console.log(profitsDeclining);
// document.write(`<p>Sorted list : ${profitsDeclining}</p>`);
// ====================================================================================================
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
// ====================================================================================================
// function getCopyListsObjectsSites(arr: WebsiteType[]) {
//   const cheapSites: WebsiteType[] = []
//   const expensiveSites: WebsiteType[] = []
//   for (const site of arr) {
//     if (site.price <= 10000) {
//       cheapSites.push({
//         ...site,
//         sponsors: site.sponsors.map(s => ({ ...s }))
//       })
//     } else
//       expensiveSites.push({
//         ...site,
//         sponsors: site.sponsors.map(s => ({ ...s }))
//       })
//   }
//   return { cheapSites, expensiveSites }
// }
// const copyLists = getCopyListsObjectsSites(siteList);
// console.log(copyLists);
// =======================================================================
// Задача 2. Розробити функцію, у яку передають об’єкт(день, місяць, рік).
// Визначити, який буде рік через N місяців.
// =======================================================================
// document.write(`<h3>Задача 2</h3> `);
// type UserDataType = {
//   day: number,
//   month: number,
//   year: number,
// };
// let userDate: UserDataType = {
//   day: 23,
//   month: 5,
//   year: 2023,
// };
// function getYearInN(date, N: number): number {
//   return date.year + Math.floor((date.month - 1 + N) / 12)
// }
// document.write(getYearInN(userDate, 36));
// ===========================================================================================
// Задача 3. Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари)
// ===========================================================================================
// document.write(`<h3>Задача 3</h3> `);
// type DataListType = {
//   id: number,
//   old_price: number,
//   old_usd_price: string,
//   price: number,
//   min_month_price: number,
//   sell_status: string,
//   status: string,
//   usd_price: string,
//   pl_charge_pcs: number,
//   pl_use_instant_bonus: boolean,
//   pl_premium_bonus_charge_pcs: number,
//   rests: number,
//   min_price: number,
//   max_price: number,
//   has_shops: boolean,
//   info: null,
//   show_in_site: null,
// }
// let dataList: DataListType[] = [
//   {
//     id: 344277463,
//     old_price: 1395,
//     old_usd_price: '37.70',
//     price: 1099,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '29.70',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 363766641,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 90,
//     min_month_price: 0,
//     sell_status: 'unavailable',
//     status: 'active',
//     usd_price: '2.43',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 339273715,
//     old_price: 38,
//     old_usd_price: '1.03',
//     price: 25,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '0.68',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 330746665,
//     old_price: 3087,
//     old_usd_price: '83.43',
//     price: 2548,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '68.86',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 344972806,
//     old_price: 699,
//     old_usd_price: '18.89',
//     price: 549,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '14.84',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 318302299,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 8500,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '229.73',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 361430565,
//     old_price: 3500,
//     old_usd_price: '94.59',
//     price: 1999,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '54.03',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 14429030,
//     old_price: 3339,
//     old_usd_price: '90.24',
//     price: 2999,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '81.05',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 56340912,
//     old_price: 2094,
//     old_usd_price: '56.59',
//     price: 1776,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '48.00',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 315292225,
//     old_price: 1799,
//     old_usd_price: '48.62',
//     price: 1499,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '40.51',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 28437961,
//     old_price: 42999,
//     old_usd_price: '1162.14',
//     price: 33999,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '918.89',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 339896833,
//     old_price: 6399,
//     old_usd_price: '172.95',
//     price: 5899,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '159.43',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 364354149,
//     old_price: 1600,
//     old_usd_price: '43.24',
//     price: 1500,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '40.54',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: {
//       id: 106,
//       discount_price: 1300,
//       title: 'ціна по промокоду діє з 22.03 по 28.03',
//       price_show_in_site_id: 5151,
//       show_in_details: 1,
//       show_in_catalog: 1,
//       is_description: 1,
//       description: 'test',
//       promo_code: '',
//       url_for_image: 'https://rozetka.com.ua/ua/promo/allgalaxies/',
//       images: '',
//       images_mobile: '',
//       hide_price: 0,
//     },
//   },
//   {
//     id: 363184995,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 4499,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '121.59',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 98077846,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 3113,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '84.14',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 310694668,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 3000,
//     min_month_price: 0,
//     sell_status: 'unavailable',
//     status: 'active',
//     usd_price: '81.08',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 362812029,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 21700,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '586.49',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 361422708,
//     old_price: 4100,
//     old_usd_price: '110.81',
//     price: 2699,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '72.95',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 318302257,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 8500,
//     min_month_price: 0,
//     sell_status: 'unavailable',
//     status: 'active',
//     usd_price: '229.73',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 310694498,
//     old_price: 0,
//     old_usd_price: '0.00',
//     price: 2963,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '80.08',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 363651273,
//     old_price: 5199,
//     old_usd_price: '140.51',
//     price: 4890,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '132.16',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 330747022,
//     old_price: 3087,
//     old_usd_price: '83.43',
//     price: 2606,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '70.43',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 362617635,
//     old_price: 4872,
//     old_usd_price: '131.68',
//     price: 2436,
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '65.84',
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
//   {
//     id: 363614439, // this
//     old_price: 5199, // this
//     old_usd_price: '140.51',
//     price: 4890, // this
//     min_month_price: 0,
//     sell_status: 'available',
//     status: 'active',
//     usd_price: '132.16', // this
//     pl_charge_pcs: 0,
//     pl_use_instant_bonus: false,
//     pl_premium_bonus_charge_pcs: 0,
//     rests: -1,
//     min_price: 0,
//     max_price: 0,
//     has_shops: false,
//     info: null,
//     show_in_site: null,
//   },
// ];
// ========================================
// 1) Загальну вартість (нові ціни - price)
// ========================================
// function getNewPrices(arr: DataListType[]) {
//   const totalSumNewPrices = arr.reduce((prevSum, item) => prevSum += item.price, 0);
//   return totalSumNewPrices;
// }
// const newPrices = getNewPrices(dataList);
// console.log(newPrices);
// ======================================================================
// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
// ======================================================================
// function getProductsLowerPrice(arr: DataListType[]) {
//   const priceChanged = arr.reduce((prevPrice, current) => {
//     return current.price < current.old_price ? prevPrice + 1 : prevPrice
//   }, 0);
//   return priceChanged;
// }
// const priceProductsChanged = getProductsLowerPrice(dataList);
// console.log(priceProductsChanged);
// =================================================
// 3) Товари, які доступні (sell_status:"available")
// =================================================
// function getAvailableProducts(arr: DataListType[]) {
//   const availableItems = arr.filter(item => item.sell_status === 'available').length;
//   return availableItems;
// }
// const availableProducts = getAvailableProducts(dataList);
// console.log(availableProducts);
// ==================================================================================================
// 4) сформувати новий список об”єктів тільки доступних  для продажу товарів, які міститимуть тільки
// ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)
// ==================================================================================================
// function createNewAvailableListsOfProducts(arr: DataListType[]) {
//   const listItemsForSell = arr
//     .filter(item => item.sell_status === 'available')
//     .map(({ id, price, old_price, usd_price }) => {
//       return {
//         id,
//         price,
//         old_price,
//         usd_price,
//       }
//     });
//   return listItemsForSell;
// }
// const newListProductsForSell = createNewAvailableListsOfProducts(dataList);
// console.log(newListProductsForSell);
