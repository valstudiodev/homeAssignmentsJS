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
let siteList = [
    {
        companyName: 'Tech Vision',
        ownerName: 'Jonh Smith',
        sponsors: [
            {
                firstName: 'David',
                lastName: 'Guetta',
                investmentAmount: 20000,
            },
            {
                firstName: 'Oscar',
                lastName: 'Vold',
                investmentAmount: 12000,
            },
        ],
        releaseYear: 2025,
        price: 8000,
    },
    {
        companyName: 'Universal',
        ownerName: 'Alex Oconner',
        sponsors: [
            {
                firstName: 'Brian',
                lastName: 'Disel',
                investmentAmount: 50000,
            },
            {
                firstName: 'Malcolm',
                lastName: 'Fisher',
                investmentAmount: 25000,
            },
        ],
        releaseYear: 2008,
        price: 15000,
    },
    {
        companyName: 'Galaxy',
        ownerName: 'Bob Sconer',
        sponsors: [
            {
                firstName: 'Ben',
                lastName: 'Marshal',
                investmentAmount: 38000,
            },
            {
                firstName: 'Oleg',
                lastName: 'Venom',
                investmentAmount: 18000,
            },
            {
                firstName: 'Benjamin',
                lastName: 'Franclin',
                investmentAmount: 60000,
            },
        ],
        releaseYear: 2005,
        price: 46000,
    },
];
document.write(`<h3>Задача 1</h3> `);
// ================================
// 1) загальну вартість усіх сайтів
// ================================
function getTotalPriceSites(arr) {
    const totalPrice = arr.reduce((prevSum, site) => prevSum += site.price, 0);
    return totalPrice;
}
;
// ==========================================================
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// ==========================================================
function getSitesCreatedBetween2000And2009(arr) {
    const sitesCreatedBetween2000And2009 = arr.filter((year) => year.releaseYear >= 2000 && year.releaseYear <= 2009);
    return sitesCreatedBetween2000And2009;
}
// =========================================================================
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// =========================================================================
function getAmountOfSitesInvestmentAmountMore10000(arr) {
    let investmentAmountMoreThan100000 = 0;
    for (const site of arr) {
        const sum = site.sponsors.reduce((prevSum, item) => prevSum + item.investmentAmount, 0);
        if (sum > 100000)
            investmentAmountMoreThan100000++;
    }
    return investmentAmountMoreThan100000;
}
// ===================================================================================================
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// ===================================================================================================
function getListOfSponsors(arr) {
    const sponsorsList = [];
    arr.forEach(site => {
        site.sponsors.forEach(sponsor => {
            sponsorsList.push(`${sponsor.firstName} ${sponsor.lastName}`);
        });
    });
    return sponsorsList;
}
// ===========================================
// 5) знайти рік, коли прибуток був найбільшим
// ===========================================
// ====== reduce ======
function getYearWithHigtherIncome(arr) {
    const higtherPrice = arr.reduce((acc, item) => {
        return item.price > acc.price ? item : acc;
    });
    return higtherPrice;
}
// ============================================
// 6) упорядкувати список за спаданням прибутку
// ============================================
function getDecliningProfits(arr) {
    const decliningProfits = [...arr].sort((a, b) => b.price - a.price);
    return decliningProfits;
}
// ====================================================================================================
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
// ====================================================================================================
function getCopyListsObjectsSites(arr) {
    const cheapSites = [];
    const expensiveSites = [];
    for (const site of arr) {
        if (site.price <= 10000) {
            cheapSites.push({
                ...site,
                sponsors: site.sponsors.map(s => ({ ...s }))
            });
        }
        else
            expensiveSites.push({
                ...site,
                sponsors: site.sponsors.map(s => ({ ...s }))
            });
    }
    return { cheapSites, expensiveSites };
}
function runMain(data) {
    // ============= 1 =============
    const totalPriceSites = getTotalPriceSites(data);
    document.write(`<p>Total sum: ${totalPriceSites} </p>`);
    // ============= 2 =============
    const sitesCreated2000and2009 = getSitesCreatedBetween2000And2009(data);
    console.log(sitesCreated2000and2009);
    // ============= 3 =============
    const sumInvestmentAmount = getAmountOfSitesInvestmentAmountMore10000(data);
    document.write(`<p>The sites has sum of invest amount > 100000 : ${sumInvestmentAmount}</p>`);
    // ============= 4 =============
    const listOfSponsors = getListOfSponsors(data);
    document.write(`<p>The list of the sponsors: ${listOfSponsors.join(', ')}</p>`);
    // ============= 5 =============
    const priceHigther = getYearWithHigtherIncome(data);
    document.write(`<p>The biggest price in : ${priceHigther.releaseYear} year</p>`);
    // ============= 6 =============
    const profitsDeclining = getDecliningProfits(data);
    console.log(profitsDeclining);
    // ============= 7 =============
    const copyLists = getCopyListsObjectsSites(data);
    console.log(copyLists);
}
runMain(siteList);
// =======================================================================
// Задача 2. Розробити функцію, у яку передають об’єкт(день, місяць, рік).
// Визначити, який буде рік через N місяців.
// =======================================================================
document.write(`<h3>Задача 2</h3> `);
let userDate = {
    day: 23,
    month: 5,
    year: 2023,
};
function getYearInN(date, N) {
    return date.year + Math.floor((date.month - 1 + N) / 12);
}
const nMonths = 36;
const futureYear = getYearInN(userDate, nMonths);
document.write(`<p>Початковий рік: ${userDate.year}</p>`);
document.write(`<p>Через ${nMonths} місяців буде <b>${futureYear}</b> рік</p>`);
// ===========================================================================================
// Задача 3. Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари)
// ===========================================================================================
// document.write(`<h3>Задача 3</h3> `);
document.write(`<h3>Задача 3</h3>`);
let dataList = [
    {
        id: 344277463,
        old_price: 1395,
        old_usd_price: '37.70',
        price: 1099,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '29.70',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 363766641,
        old_price: 0,
        old_usd_price: '0.00',
        price: 90,
        min_month_price: 0,
        sell_status: 'unavailable',
        status: 'active',
        usd_price: '2.43',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 339273715,
        old_price: 38,
        old_usd_price: '1.03',
        price: 25,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '0.68',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 330746665,
        old_price: 3087,
        old_usd_price: '83.43',
        price: 2548,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '68.86',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 344972806,
        old_price: 699,
        old_usd_price: '18.89',
        price: 549,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '14.84',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 318302299,
        old_price: 0,
        old_usd_price: '0.00',
        price: 8500,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '229.73',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 361430565,
        old_price: 3500,
        old_usd_price: '94.59',
        price: 1999,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '54.03',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 14429030,
        old_price: 3339,
        old_usd_price: '90.24',
        price: 2999,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '81.05',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 56340912,
        old_price: 2094,
        old_usd_price: '56.59',
        price: 1776,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '48.00',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 315292225,
        old_price: 1799,
        old_usd_price: '48.62',
        price: 1499,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '40.51',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 28437961,
        old_price: 42999,
        old_usd_price: '1162.14',
        price: 33999,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '918.89',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 339896833,
        old_price: 6399,
        old_usd_price: '172.95',
        price: 5899,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '159.43',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 364354149,
        old_price: 1600,
        old_usd_price: '43.24',
        price: 1500,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '40.54',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: {
            id: 106,
            discount_price: 1300,
            title: 'ціна по промокоду діє з 22.03 по 28.03',
            price_show_in_site_id: 5151,
            show_in_details: 1,
            show_in_catalog: 1,
            is_description: 1,
            description: 'test',
            promo_code: '',
            url_for_image: 'https://rozetka.com.ua/ua/promo/allgalaxies/',
            images: '',
            images_mobile: '',
            hide_price: 0,
        },
    },
    {
        id: 363184995,
        old_price: 0,
        old_usd_price: '0.00',
        price: 4499,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '121.59',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 98077846,
        old_price: 0,
        old_usd_price: '0.00',
        price: 3113,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '84.14',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 310694668,
        old_price: 0,
        old_usd_price: '0.00',
        price: 3000,
        min_month_price: 0,
        sell_status: 'unavailable',
        status: 'active',
        usd_price: '81.08',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 362812029,
        old_price: 0,
        old_usd_price: '0.00',
        price: 21700,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '586.49',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 361422708,
        old_price: 4100,
        old_usd_price: '110.81',
        price: 2699,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '72.95',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 318302257,
        old_price: 0,
        old_usd_price: '0.00',
        price: 8500,
        min_month_price: 0,
        sell_status: 'unavailable',
        status: 'active',
        usd_price: '229.73',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 310694498,
        old_price: 0,
        old_usd_price: '0.00',
        price: 2963,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '80.08',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 363651273,
        old_price: 5199,
        old_usd_price: '140.51',
        price: 4890,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '132.16',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 330747022,
        old_price: 3087,
        old_usd_price: '83.43',
        price: 2606,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '70.43',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 362617635,
        old_price: 4872,
        old_usd_price: '131.68',
        price: 2436,
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '65.84',
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
    {
        id: 363614439, // this
        old_price: 5199, // this
        old_usd_price: '140.51',
        price: 4890, // this
        min_month_price: 0,
        sell_status: 'available',
        status: 'active',
        usd_price: '132.16', // this
        pl_charge_pcs: 0,
        pl_use_instant_bonus: false,
        pl_premium_bonus_charge_pcs: 0,
        rests: -1,
        min_price: 0,
        max_price: 0,
        has_shops: false,
        info: null,
        show_in_site: null,
    },
];
// ========================================
// 1) Загальну вартість (нові ціни - price)
// ========================================
function getNewPrices(arr) {
    const totalSumNewPrices = arr.reduce((prevSum, item) => prevSum += item.price, 0);
    return totalSumNewPrices;
}
// ======================================================================
// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
// ======================================================================
function getProductsLowerPrice(arr) {
    const priceChanged = arr.reduce((prevPrice, current) => {
        return current.price < current.old_price ? prevPrice + 1 : prevPrice;
    }, 0);
    return priceChanged;
}
// =================================================
// 3) Товари, які доступні (sell_status:"available")
// =================================================
function getAvailableProducts(arr) {
    const availableItems = arr.filter(item => item.sell_status === 'available').length;
    return availableItems;
}
// ==================================================================================================
// 4) сформувати новий список об”єктів тільки доступних  для продажу товарів, які міститимуть тільки
// ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)
// ==================================================================================================
function createNewAvailableListsOfProducts(arr) {
    const listItemsForSell = arr
        .filter(item => item.sell_status === 'available')
        .map(({ id, price, old_price, usd_price }) => {
        return {
            id,
            price,
            old_price,
            usd_price,
        };
    });
    return listItemsForSell;
}
function initMain(data) {
    // =========== 1 ============
    const newPrices = getNewPrices(data);
    document.write(`<p>Загальна вартість (нові ціни - price): ${newPrices}</p>`);
    // =========== 2 ============
    const priceProductsChanged = getProductsLowerPrice(data);
    document.write(`<p>кількість товарів, у яких ціна зменшилась: ${priceProductsChanged}</p>`);
    // =========== 3 ============
    const availableProducts = getAvailableProducts(data);
    document.write(`<p>Товари, які доступні: ${availableProducts}</p>`);
    // =========== 4 ============
    const newListProductsForSell = createNewAvailableListsOfProducts(data);
    console.log(newListProductsForSell);
}
initMain(dataList);
// let user = {
//   name: 'Valentyn',
//   lastName: 'Tkachenko',
//   age: 35,
//   favoriteGames: ['Stalker', 'Resident Eviel', 'The last of us'],
//   marks: [10, 7, 8, 9, 4, 10, 10],
//   sayHi: function () {
//     console.log(`Hello ${this.name} ${this.lastName}`);
//   },
//   sayBye: function () {
//     console.log(`Bye ${this.name} ${this.lastName}`);
//   },
//   greeting: function () {
//     this.sayHi()
//     this.sayBye()
//   },
//   getAvarage: function () {
//     let s = 0
//     for (let i = 0; i < this.marks.length; i++) {
//       s += this.marks[i]
//     }
//     return s / this.marks.length
//   },
//   getScoreNum: function (searchScore: number) {
//     return this.marks.reduce((prevCount, score) => score === searchScore ? prevCount + 1 : prevCount, 0)
//   },
//   toString: function () {
//     return `${this.name} ${this.lastName}, Age: ${this.age}, Marks: ${this.marks}`
//   },
//   valueOf: function () {
//     return this.getAvarage()
//   }
// };
// user.sayHi();
// user.sayBye();
// // user.greeting()
// console.log(user.getAvarage().toFixed(1));
// console.log(user.getScoreNum(10));
// let s = user.toString()
// console.log(s);
// let num = user.valueOf()
// console.log(num.toFixed(1));
// console.log(Object.values(user));
// Task 1 — User Factory
// function createUser(name: string, age: number) {
//   return {
//     name: name,
//     age: age,
//     getInfo: function () {
//       return `Name: ${this.name}, Age: ${this.age}`
//     },
//   };
// };
// let user1 = createUser('Val', 35);
// console.log(user1.getInfo());
// let user2 = createUser('Jonh', 30);
// console.log(user2.getInfo());
// Task 2 — Car Factory
// function createCar(brand: string, speed: number) {
//   return {
//     brand: brand,
//     speed: speed,
//     showSpeed: function () {
//       return `The speed: ${this.speed}`
//     },
//     changeSpeed: function (newSpeed: number) {
//       this.speed = newSpeed
//     },
//     toString: function () {
//       return `Brand: ${this.brand}, Speed: ${this.speed}`
//     },
//   };
// };
// let car1 = createCar('BMW', 250);
// console.log(car1.showSpeed());
// console.log(car1.toString());
// let car2 = createCar('Kia', 230);
// car2.changeSpeed(300);
// console.log(car2.showSpeed());
// console.log(car2.toString());
// Task 3 — Bank Account
// function createBankAccount(owner: string, balance: number) {
//   return {
//     owner: owner,
//     balance: balance,
//     deposit: function (amount: number) {
//       this.balance += amount
//     },
//     withdraw: function (amount: number) {
//       if (this.balance < amount) {
//         console.log('Not enough money');
//         return;
//       }
//       this.balance -= amount
//     },
//     showBalance: function () {
//       return console.log(`${this.owner}: ${this.balance}$`);
//     },
//   };
// };
// let account1 = createBankAccount('Valentyn', 1000);
// account1.showBalance();
// account1.deposit(500);
// account1.showBalance();
// account1.withdraw(200);
// account1.showBalance();
// account1.withdraw(800);
// account1.showBalance();
// account1.withdraw(800);
// account1.showBalance();
// Task 4 — Counter
// function createCounter() {
//   let count = 0
//   return {
//     increment() {
//       count++
//     },
//     decrement() {
//       count--
//     },
//     reset() {
//       count = 0
//     },
//     show() {
//       console.log(count);
//     },
//   };
// };
// let counter1 = createCounter()
// counter1.increment()
// counter1.increment()
// counter1.show()
// Task 5 — Playlist
// type PlaylistType = {
//   name: string;
//   songs: string[];
//   addSongs(song: string): void;
//   removeSong(song: string): void;
//   showSongs(): void;
// }
// function createPlaylist(name: string) {
//   return {
//     name: name,
//     songs: [],
//     addSongs: function (song: string) {
//       this.songs.push(song);
//     },
//     removeSong: function (song: string) {
//       this.songs = this.songs.filter(item => item !== song)
//     },
//     showSongs() {
//       console.log(`Playlist: ${this.name}`);
//       this.songs.forEach((song, index) => {
//         console.log(`${index + 1}. ${song}`);
//       })
//     }
//   }
// }
// const playlist = createPlaylist('My favorite');
// console.log(playlist);
// playlist.addSongs('Linking Park')
// playlist.addSongs('Emenim')
// playlist.addSongs('The Offspring')
// playlist.showSongs()
// playlist.removeSong('The Offspring')
// playlist.showSongs()
// ========================================================
// task 1
// type PlayerType = {
//   name: string,
//   score: number,
//   showScore: () => void,
//   addScore: (points: number) => void,
// }
// function Player(this: PlayerType, name: string, score: number) {
//   this.name = name,
//     this.score = score,
//     this.showScore = function () {
//       console.log(`Score: ${this.score}`);
//     },
//     this.addScore = function (points: number) {
//       this.score += points
//     }
// }
// const player1 = new Player('Val', 100)
// player1.showScore()
// player1.addScore(50)
// player1.showScore()
// Task 2 — Bank Account
// type BankAccountType = {
//   owner: string,
//   balance: number,
//   deposit: (amount: number) => void,
//   withdraw: (amount: number) => void,
//   showBalance: () => void
// }
// function BankAccount(this: BankAccountType, owner: string, balance: number) {
//   this.owner = owner,
//     this.balance = balance,
//     this.deposit = function (amount: number) {
//       this.balance += amount
//     },
//     this.withdraw = function (amount: number) {
//       if (amount > this.balance) {
//         throw new Error("Not enough money");
//       }
//       this.balance -= amount
//     },
//     this.showBalance = function () {
//       console.log(`${this.owner} balance: ${this.balance}`);
//     }
// }
// const acc1 = new BankAccount('Val', 1000)
// console.log(acc1);
// acc1.deposit(500);
// acc1.showBalance();
// acc1.withdraw(800);
// acc1.showBalance();
// task 3 Playlist
// type PlaylistType = {
//   name: string,
//   songs: string[],
//   addSong: (song: string) => void,
//   removeSong: (song: string) => void,
//   showSongs: () => void,
// }
// function Playlist(this: PlaylistType, name: string) {
//   this.name = name,
//     this.songs = [],
//     this.addSong = function (song: string) {
//       this.songs.push(song)
//     },
//     this.removeSong = function (song: string) {
//       this.songs = this.songs.filter(item => item !== song)
//     },
//     this.showSongs = function () {
//       this.songs.forEach((song, index) => console.log(`${index + 1}. ${song} `));
//     }
// }
// const playlist = new Playlist('My playlist')
// console.log(playlist);
// playlist.addSong('Numb');
// playlist.addSong('My heart');
// playlist.addSong('In the end');
// playlist.removeSong('My heart')
// playlist.showSongs();
// task - playlist prototype
// type PlaylistType = {
//   name: string,
//   songs: string[],
// }
// function Playlist(this: PlaylistType, name: string) {
//   this.name = name,
//     this.songs = []
// }
// Playlist.prototype.addSong = function (song: string) {
//   this.songs.push(song);
// }
// Playlist.prototype.removeSong = function (song: string) {
//   this.songs = this.songs.filter(item => item !== song)
// }
// Playlist.prototype.showSongs = function () {
//   this.songs.forEach((song, index) => console.log(`${index + 1}. ${song} `));
// }
// const playlist = new Playlist('My playlist')
// console.log(playlist);
// playlist.addSong('My love')
// playlist.addSong('My friend')
// playlist.addSong('At the work')
// playlist.addSong('Mother')
// playlist.removeSong('At the work')
// playlist.showSongs()
// ==============================================================
// ======================== classes ========================
// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }
// const user1 = new User("Val", 33);
// user1.sayHello();
// ======================
// class BankAccount {
//   owner: string;
//   balance: number;
//   constructor(owner: string, balance: number) {
//     this.owner = owner;
//     this.balance = balance;
//   };
//   deposit(amount: number) {
//     this.balance += amount
//   };
//   withdraw(amount: number) {
//     if (amount > this.balance) {
//       throw new Error("Not enough money");
//     }
//     this.balance -= amount
//   };
//   showBalance() {
//     console.log(`${this.owner} balance: ${this.balance}`);
//   }
// }
// const acc1 = new BankAccount('Val', 1000)
// console.log(acc1);
// acc1.deposit(500);
// acc1.withdraw(800);
// acc1.withdraw(700);
// acc1.showBalance();
// ====================================
// Task — Todo List (Class OOP)
// class Todolist {
//   title: string;
//   tasks: string[];
//   constructor(title: string) {
//     this.title = title;
//     this.tasks = []
//   };
//   addTask(task: string) {
//     this.tasks.push(task)
//   };
//   removeTask(task: string) {
//     // this.tasks = this.tasks.filter(item => item !== task)
//     const index = this.tasks.indexOf(task)
//     if (index !== -1)
//       this.tasks.splice(index, 1)
//   };
//   showTask() {
//     this.tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
//   };
//   clearTask() {
//     this.tasks.length = 0
//   }
// }
// const task1 = new Todolist('My Day')
// task1.addTask('Learn JS');
// task1.addTask('Show a lesson JS')
// task1.addTask('Learn English');
// task1.addTask('Cook Dinner');
// task1.removeTask('Cook Dinner');
// // // task1.clearTask()
// task1.showTask()
// console.log(task1);
// ==============================================================
// let obj1 = {
//   myVar: 77,
//   method1: function () {
//     let func = function () {
//       console.log(this);
//       document.write(this.myVar);
//     }
//     return func
//   },
// }
// let f = obj1.method1()
// f()
// let obj1 = {
//   names: ['Ivan', 'Petro', 'Olga', 'Hanna'],
//   poritions: ['Driver', 'Manager', 'Programmer', 'Director'],
//   showNames: function () {
//     this.names.forEach((name, index) => {
//       document.write(`
//             ${name} ${this.poritions && this.poritions[index]} <br>
//         `);
//     });
//   },
// }
// obj1.showNames()
// ==============================================================
// =============== call / apply =================
// let obj1 = {
//   prop1: 11,
//   prop2: 22,
//   showProp: function () {
//     document.write(this.prop1);
//   },
//   getSum: function (val1: number, val2: number) {
//     return this.prop1 + val1 + val2
//   }
// }
// // obj1.showProp()
// let obj2 = {
//   prop1: 21,
//   prop2: 10,
// }
// // obj1.showProp.call(obj2)
// let s = obj1.getSum.call(obj2, 10, 7)
// document.write(s);
// const user = {
//   name: "Val",
//   age: 35,
// };
// const user2 = {
//   name: 'Stas',
//   age: 30,
// }
// function showUser(city: string, country: string) {
//   console.log(`Name: ${this.name}, Age: ${this.age}, from: ${city}, ${country}`);
// }
// showUser.call(user, 'Mariupol', 'Ukraine');
// showUser.apply(user2, ['Kyiv', 'Ukraine']);
// ==============================================================
// ================== bind ======================
// const user = {
//   name: "Val"
// };
// function showUser() {
//   console.log(this.name);
// }
// const newFunc = showUser.bind(user);
// newFunc();
// const user = {
//   name: "Val",
//   show() {
//     console.log(this.name);
//   }
// };
// setTimeout(user.show.bind(user), 2000);
// // Task 1
// const user = {
//   name: "Alex"
// };
// function sayHello(this: typeof user) {
//   console.log(`Hello ${this.name}`);
// }
// sayHello.call(user)
// // Task 2
// const player = {
//   name: "Mike"
// };
// function showInfo(this: typeof player, age: number) {
//   console.log(this.name, age);
// }
// const boundShowInfo = showInfo.bind(player)
// boundShowInfo(30)
// // task 3
// const data = {
//   title: "Result:"
// };
// function sum(this: typeof data, a: number, b: number) {
//   console.log(this.title, a + b);
// }
// sum.apply(data, [2, 3])
